import 'jquery';
import _ from 'lodash';
import isAuthor from 'isAuthor';
import analyticsEventLayer from 'analytics/analyticsEventLayer.js';
import fordjs from 'fordjs';

var module,
    selectors = {
        contentSubTypeAttribute: {
            attr: 'data-analytics-content-sub-type',
            selector: '[data-analytics-content-sub-type]'
        }
    };

function Cta(elements) {
    this.initOne(elements);
}

function getBillboardAssetName($cta) {
    var $img = $cta.closest('.billboard-content').find('img[data-meta-title]');
    return $img ? $img.attr('data-meta-title') : null;
}

function getGalleryAssetName($cta) {
    var $img = $cta.find('img'),
        $metaTitle = $img ? $img.attr('data-meta-title') : null;
    return $img && !_.isUndefined($metaTitle) ? $metaTitle : null;
}

function getSecondaryNavAssetName($cta) {
    return null; //this is based on original assetName value from ctaEvents.js
}

function getFormRichtextAssetName($cta) {
    var $img = $cta.closest('.richtext').find('img');
    return $img ? $img.attr('data-meta-title') : null;
}

function getSplitterAssetName($cta) {
    var $img = $cta.closest('.splitter-column').find('img');
    return $img ? $img.first().attr('data-meta-title') : null;
}

function getSingleFeatureAssetName($cta) {
    var $img = $cta.closest(selectors.contentSubTypeAttribute.selector).find('img');
    return $img ? $img.first().attr('data-meta-title') : null;
}

Cta.prototype.assetName = function($cta, contentSubType) {
    var assetName = '';
    if (contentSubType === 'billboard' || contentSubType === 'features trigger') {
        assetName = getBillboardAssetName($cta);
    } else if (contentSubType === 'brand gallery') {
        assetName = getGalleryAssetName($cta);
    } else if (contentSubType === 'gallery trigger') {
        assetName = getGalleryAssetName($cta);
    } else if (contentSubType === 'secondary nav next steps') {
        assetName = getSecondaryNavAssetName($cta);
    } else if (contentSubType === 'form') {
        assetName = getFormRichtextAssetName($cta);
    } else if (contentSubType === 'vehicle attributes' || contentSubType === 'kba next steps') {
        assetName = getSplitterAssetName($cta);
    } else if (contentSubType === 'single feature') {
        assetName = getSingleFeatureAssetName($cta);
    }

    return assetName;
};

Cta.prototype.initOne = function(elements) {
    var $elements = $(elements);

    $elements.each(function(index, item) {
        var $elem = $(item);

        $elem.off('click.analyticsTracking').on('click.analyticsTracking', function(event) {
            var $cta = $(event.currentTarget),
                ctaName = $cta.attr('data-cta-name'),
                contentSubType = $cta.closest(selectors.contentSubTypeAttribute.selector).attr(selectors.contentSubTypeAttribute.attr);

            analyticsEventLayer.getCtaEvents().trackCTA({
                ctaName: ctaName,
                contentSubType: contentSubType,
                assetName: this.assetName($cta, contentSubType),
                $elem: $cta
            });
        }.bind(this));
    }.bind(this));

    $elements.addClass('initialized');
};

module = {
    'name': 'cta',
    'selector': 'a[data-cta-name]',
    'initElements': function(elements) {
        var cta = new Cta(elements);
    }
};

fordjs.registerComponent(module);

export default module;