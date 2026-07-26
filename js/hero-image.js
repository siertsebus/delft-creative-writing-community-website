/**
 * hero-image.js
 *
 * Shows the hero image once it has actually loaded, and keeps a plain
 * placeholder box visible until then (or forever, if no image file exists yet).
 * Avoids the browser's broken-image icon while assets/hero.jpg is missing.
 *
 * Exposes the global `HeroImage`.
 */

var HeroImage = (function () {
  'use strict';

  /**
   * Reveal the image and remove the placeholder.
   *
   * @param {HTMLImageElement} image - The hero <img> element.
   * @param {HTMLElement|null} placeholder - The placeholder box, if present.
   * @returns {void}
   */
  function showImage(image, placeholder) {
    image.hidden = false;

    if (placeholder) {
      placeholder.remove();
    }
  }

  /**
   * Keep the placeholder and drop the image from the layout.
   *
   * @param {HTMLImageElement} image - The hero <img> element.
   * @returns {void}
   */
  function showPlaceholder(image) {
    image.remove();
  }

  /**
   * Decide whether an <img> already finished loading successfully.
   * `complete` is true for both loaded and failed images, so the natural
   * width is used to tell the two apart.
   *
   * @param {HTMLImageElement} image - The image to inspect.
   * @returns {boolean} True when the image has usable pixel data.
   */
  function hasLoaded(image) {
    return image.complete && image.naturalWidth > 0;
  }

  /**
   * Decide whether an <img> already finished loading and failed. Checked
   * separately because a cached failure fires `error` before this script
   * runs, so waiting on the event alone would never resolve.
   *
   * @param {HTMLImageElement} image - The image to inspect.
   * @returns {boolean} True when the image finished without pixel data.
   */
  function hasFailed(image) {
    return image.complete && image.naturalWidth === 0;
  }

  /**
   * Wire up a hero figure so that either the image or the placeholder is shown.
   * Safe to call when the figure is absent.
   *
   * @param {HTMLElement|null} figure - Container holding the image and placeholder.
   * @returns {void}
   */
  function init(figure) {
    if (!figure) {
      return;
    }

    var image = figure.querySelector('.hero__image');
    var placeholder = figure.querySelector('[data-placeholder]');

    if (!image) {
      return;
    }

    if (hasLoaded(image)) {
      showImage(image, placeholder);
      return;
    }

    if (hasFailed(image)) {
      showPlaceholder(image);
      return;
    }

    image.addEventListener('load', function () {
      showImage(image, placeholder);
    });

    image.addEventListener('error', function () {
      showPlaceholder(image);
    });
  }

  return { init: init };
})();
