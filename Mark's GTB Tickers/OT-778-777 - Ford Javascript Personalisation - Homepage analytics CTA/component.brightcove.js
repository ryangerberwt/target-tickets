import 'jquery';
import analyticsEventLayer from 'analytics/analyticsEventLayer.js';
import videoRegistry from 'guxfoe/brightcove/component.brightcove.videoRegistry.js';
import BrightcovePoster from 'guxfoe/brightcove/component.brightcove.poster.js';
import BrightcoveCaptionsHander from 'guxfoe/brightcove/component.brightcove.captionsHandler.js';
import mediaQuery from 'mediaQuery';
import isAuthorService from 'isAuthor';

const api = {};

function Brightcove($element) {
    const mediaType = mediaQuery.getMediaType();

    this.$element = $element;
    this.$videoEl = $element.find('video');
    this.isAuthor = isAuthorService.getAuthorStatus();
    this.isMobile = (mediaType === 'mobile') || (mediaType === 'tablet');
    this.videoRegistry = videoRegistry;
    this.withinBillboard = $element.hasClass('within-billboard');

    //If no Video then there is no point initializing
    if (!this.isVideoValid() || (this.withinBillboard && this.isMobile)) {
        return;
    }

    //Null for now, will be initialized as soon as BC is loaded
    this.videoObj = null;
    this.captionsHandler = null;
    this.currentProgressQuart = -1;
    this.withinCarousel = !!this.$element.closest('.genericCarousel').length;
    this.$isInitialized = $.Deferred();

    this.poster = new BrightcovePoster($element);
    this.brightcoveVideoEvents = analyticsEventLayer.getBrightcoveVideoEvents();

    this.attachVideoEvents();
    this.attachInteractionEvents();

    this.poster.initStartImage(this.triggerVideoStart.bind(this));

    if (this.withinBillboard) {
        this.$startingImage = $element.siblings('.billboard-image');
    }

    if (this.isAuthor) {
        this.showBillboardVideo();
    }

    if (this.shouldDefer()) {
        this.onPageLoad(this.preparePlayer.bind(this));
    } else {
        this.preparePlayer();
    }
}

Brightcove.prototype.shouldDefer = function() {
    if (this.isAuthor) {
        return false;
    } else {
        const search = window.location.search.substring(1);

        return !search.split('&').includes('no-defer');
    }
};

Brightcove.prototype.preparePlayer = function() {
    if (this.withinBillboard || this.isAuthor) {
        this.createPlayer();
    } else {
        // If there is no start-image, then auto start the player
        if (!this.poster.hasStartImage && !this.isAuthor) {
            this.triggerVideoStart();
        }
    }
};

Brightcove.prototype.onPageLoad = function(resolve) {
    const navData = window.performance.getEntriesByType('navigation');

    if (navData.length > 0 && navData[0].loadEventEnd > 0) {
        resolve();
    } else {
        $(window).on('load', resolve);
    }
};

Brightcove.prototype.showBillboardVideo = function() {
    if (this.withinBillboard) {
        this.$startingImage.addClass('hide');
        this.$element.removeClass('not-ready');
    }
};

//Main entry point to this whole thing, drives creating player & starting video
Brightcove.prototype.triggerVideoStart = function() {
    //Player start (in case it was already initialized before/init
    if (this.isPlayerInitialized()) {
        this.startVideo();
    } else {
        this.createPlayer();
        this.$isInitialized.promise()
            .then(this.fixTabIndex.bind(this));
    }
    this.poster.toggleStartImage(false);
    //Notify parents that Video has been revealed
    this.notifyVideoStarted();
};

Brightcove.prototype.createPlayer = function() {
    var self = this,
        configuration = self.$videoEl.data(),
        scriptUrl = self.buildBcScriptUrl(configuration.account, configuration.player);

    if (self.isBrightcoveLibraryLoaded()) {
        self.initPlayer();
    } else {
        $.getScript(scriptUrl, () => {
            self.initPlayer();
        });
    }
};

Brightcove.prototype.initPlayer = function() {
    this.initBrightcovePlayer();
    this.initGuxPlayer();
};

Brightcove.prototype.initBrightcovePlayer = function() {
    var options = this.withinBillboard ? { loop: true, autoplay: false } : {};
    this.videoObj = bc(this.$videoEl[0], options);

    this.setVideoOptions();
    //Those events can be attached only here since they require videoObj to be initialized
    this.attachBcVideoEvents();
};

Brightcove.prototype.initGuxPlayer = function() {
    //Sending a simple Start Video callback is enough since we're 100% that player was already initialized before
    this.poster.initEndImage(this.$videoEl, this.videoObj, this.startVideo.bind(this));
    this.captionsHandler = new BrightcoveCaptionsHander(this.$videoEl, this.videoObj);
};

Brightcove.prototype.disposePlayer = function() {
    if (this.isPlayerInitialized()) {
        this.videoObj = videojs(this.$element.find('video')[0]);
        this.videoObj.pause();
        this.videoObj.dispose();
        this.videoRegistry.remove(this);
    }
};

/*
 Events
 */
Brightcove.prototype.attachInteractionEvents = function() {
    var self = this;

    if (!this.isAuthor && this.withinCarousel) {
        this.$element.add(self.$videoEl).on('keydown', function(e) {
            if (e.which === 13) {
                self.startVideo();
            }
        });
        $.subscribe('carousel-slider:start', function($context) {
            this.handleBillboardVideoEvent($context, function(video) {
                video.videoObj.muted(true);
                video.videoObj.play();
            });
        }.bind(this));
        $.subscribe('carousel-slider:switch', function(context) {
            this.handleBillboardVideoEvent(context.$from, function(video) {
                video.videoObj.pause();
            });
            this.handleBillboardVideoEvent(context.$to, function(video) {
                video.videoObj.muted(true);
                video.videoObj.play();
            });
        }.bind(this));
    }
};

Brightcove.prototype.handleBillboardVideoEvent = function($context, handler) {
    var $brightcoveVideo = $context.find('.brightcove.within-billboard'),
        video = null;
    if ($brightcoveVideo.length) {
        video = videoRegistry.getBillboardVideoByContainer($brightcoveVideo);
        if (video && video === this) {
            video.$isInitialized.promise().then(function() {
                handler(video);
            });
        }
    }
};

Brightcove.prototype.attachBcVideoEvents = function() {
    var self = this;
    self.videoObj.on('loadedmetadata', self.onLoadedMetadata.bind(self));
    self.videoObj.on('loadeddata', function(e) {
        self.showBillboardVideo();
    });
    self.videoObj.on('fullscreenchange', function(e) {
        self.trackFullScreen(e);
    });
};

Brightcove.prototype.onLoadedMetadata = function() {
    this.$isInitialized.resolve();
    if (!this.isAuthor && !this.withinCarousel && this.withinBillboard && this.videoObj) {
        this.videoObj.muted(true);
        this.videoObj.play();
    }
    this.notifyPlayerReady.bind(this);
};

Brightcove.prototype.attachVideoEvents = function() {
    var self = this;

    if (!self.withinBillboard) {
        //Done once on play start
        self.$videoEl.one('timeupdate', function(e) {
            var data = {
                id: e.target.id,
                videoName: self.videoObj.mediainfo.name
            };
            self.brightcoveVideoEvents.trackPlay(data);
        });

        //On each time change track milestone
        self.$videoEl.on('timeupdate', function(e) {
            self.trackMilestone(e);
        });

        //TODO:This is probably not needed anymore (it's already nicely tracked through segment?
        self.$videoEl.on('seeked', function(e) {
            self.trackMilestone(e, true);
        });

        self.$videoEl.on('play', function(e) {
            self.videoRegistry.stopOtherVideos(self);
        });

        self.$videoEl.one('play', function(e) {
            self.captionsHandler.handle();
        });

        self.$videoEl.on('ended', function(e) {
            self.brightcoveVideoEvents.trackEnded({
                progress: '100',
                ts: e.target.currentTime,
                id: e.target.id,
                videoName: self.videoObj.mediainfo.name
            });
            self.currentProgressQuart = -1;
        });
    }
};

/*
 Analytics Tracking
 */
Brightcove.prototype.trackMilestone = function(e, forceTrack) {
    var progress = Math.floor(e.target.currentTime / e.target.duration * 100),
        progressQuart = Math.floor(progress / 25); //quart starts from 0

    if (progressQuart < this.currentProgressQuart) {
        this.currentProgressQuart = progressQuart;
    }

    // to overcome milestone tracking at initial video play event
    if (progress <= 1) {
        return;
    }

    if (progressQuart > this.currentProgressQuart && progressQuart < 4) {
        this.brightcoveVideoEvents.trackMilestone({
            progress: (progressQuart * 25),
            ts: e.target.currentTime,
            id: e.target.id,
            videoName: this.videoObj.mediainfo.name
        }, forceTrack);
        this.currentProgressQuart = progressQuart;
    }
};

Brightcove.prototype.trackFullScreen = function(e) {
    this.brightcoveVideoEvents.trackFullscreen({
        videoName: this.videoObj.mediainfo.name,
        id: e.target.id
    });
};
/*
 End Of Analytics Tracking
 */

/*
 Events for 3rd Parties (e.g. Gallery Trigger)
 */
Brightcove.prototype.notifyPlayerReady = function() {
    this.generateEvent('playerready', this.$element);
};

Brightcove.prototype.notifyVideoStarted = function() {
    this.generateEvent('videostarted', this.$element);
};
/*
 End of External Events
 */

/*
 Utils
 */
Brightcove.prototype.buildBcScriptUrl = function(account, player) {
    return '//players.brightcove.net/' + account + '/' + player + '_default/index.min.js';
};

Brightcove.prototype.fixTabIndex = function() {
    if (this.$element.attr('tabindex') !== '1') {
        this.$element.attr('tabindex', '1');
    }
};
Brightcove.prototype.generateEvent = function(eventName, $element) {
    if (eventName && $element) {
        const evt = $.Event(eventName);
        evt.$element = $element;
        $element.trigger(evt);
        return true;
    } else {
        return false;
    }
};

Brightcove.prototype.isBrightcoveLibraryLoaded = function() {
    return typeof videojs !== 'undefined';
};

Brightcove.prototype.isPlayerInitialized = function() {
    return this.videoObj && this.videoObj.isReady_;
};

Brightcove.prototype.isVideoValid = function() {
    return this.$videoEl.length > 0;
};

Brightcove.prototype.setVideoOptions = function() {
    this.videoObj.options_.inactivityTimeout = 0;
    this.videoObj.options_.techOrder = ['html5'];
    if (this.withinBillboard) {
        this.videoObj.autoplay(!this.withinCarousel);
    }
};

Brightcove.prototype.startVideo = function() {
    this.$videoEl.get(0).currentTime = 0;
    this.$videoEl.trigger('play');
};

/*
 End Of Utils
 */

/*
 Initialization Functions
 */
api.init = function() {
    $('.brightcove').each(function(index, element) {
        var brightcove = new Brightcove($(element));
        videoRegistry.addVideo(brightcove);
    });
};

api.initOne = function($element) {
    var brightcove = videoRegistry.getVideoByContainer($element);
    if (!brightcove) {
        brightcove = new Brightcove($element);
        videoRegistry.addVideo(brightcove);
    }
    return brightcove;
};

export default api;