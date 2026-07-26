/**
 * main.js
 *
 * Entry point. Wires the page's few dynamic bits together once the DOM is ready.
 */

(function () {
  'use strict';

  /**
   * Write the current year into every element marked with `data-current-year`.
   *
   * @param {Date} [now] - Reference date; defaults to the current time.
   * @returns {void}
   */
  function renderCurrentYear(now) {
    var date = now || new Date();
    var slots = document.querySelectorAll('[data-current-year]');

    Array.prototype.forEach.call(slots, function (slot) {
      slot.textContent = String(date.getFullYear());
    });
  }

  /**
   * Run all page setup.
   *
   * @returns {void}
   */
  function init() {
    renderCurrentYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
