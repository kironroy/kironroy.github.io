(function($, document) {

      // get tallest tab__content element
      let height = -1;

		$('.tab__content').each(function() {
			height = height > $(this).outerHeight() ? height : $(this).outerHeight();
		});

      // set height of tabs + top offset
		$('[data-tabs]').css('min-height', height + 20 + 'px');

}(jQuery, document));
