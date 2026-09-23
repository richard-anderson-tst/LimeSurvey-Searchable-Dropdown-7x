
/*****
	JS for the Searchable Dropdown question theme (LimeSurvey 7)
    Copyright (C) 2023 - Tony Partner (http://partnersurveys.com)
    Licensed MIT, GPL
	Version - 2.0.0
    Create date - 20/01/2023
*****/

(function($) {
	'use strict';

	var selectSelector = 'select.searchable-dropdown-select';

	function initSearchableDropdowns() {
		$(selectSelector).each(function() {
			var $select = $(this);

			if ($select.hasClass('select2-hidden-accessible')) {
				return;
			}

			$select.select2({
				theme: 'bootstrap-5'
			});
		});
	}

	$(initSearchableDropdowns);

	$(document)
		.off('pjax:scriptcomplete.searchableDropdown')
		.on('pjax:scriptcomplete.searchableDropdown', initSearchableDropdowns)
		.off('select2:open.searchableDropdown', selectSelector)
		.on('select2:open.searchableDropdown', selectSelector, function() {
			var searchField = document.querySelector(
				'.select2-container--open .select2-search__field'
			);

			if (searchField) {
				searchField.focus();
			}
		});
})(jQuery);