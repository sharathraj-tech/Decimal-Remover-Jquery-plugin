/*
Author: Sharath Raj
Use Case: Remove the decimal values as required
*/

(function ($) {
  $.fn.extend({
    DecimalRounder: function (options) {
      var defaults = {
        DecimalCount: 2,
        displayEle: "",
      };

      options = $.extend(defaults, options);

      var $this = $(this);
      var value = $this.val();
      if (options.displayEle == "") {
        $this.val(
          Number(
            Math.round(value + "e" + options.DecimalCount) +
              "e-" +
              options.DecimalCount
          ).toFixed(options.DecimalCount)
        );
      } else {
        $(options.displayEle).val(
          Number(
            Math.round(value + "e" + options.DecimalCount) +
              "e-" +
              options.DecimalCount
          ).toFixed(options.DecimalCount)
        );
      }
    },
  });
})(jQuery);
