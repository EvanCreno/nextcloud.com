define(["jquery", "underscore", "enquire", "velocity", "velocityUI", "scrollMagic"],
function ($, _, enquire, velocity, velocityUI, ScrollMagic) {
	$(document).ready(function() {
	    'use strict';
	    var enterprisePage = {
	        init: function() {

				this.animationOnLoadPage();

				enquire.register('screen and (max-width: 480px)', {
					//match: _.bind(this.resultsBindMobile, this) 
				});

				enquire.register('screen and (min-width: 481px)', {
					//match: _.bind(this.enterpriseBindDesktop, this) 
				});
			},

			variables : {
				topHeaderSelector: ".topheader",
				heroSectionBackgroundSelector: ".background",
				menuAnchorSelector: "#menuAnchor"
			},

			animationOnLoadPage: function() {
				$(this.variables.topHeaderSelector).velocity('transition.slideUpBigIn');
				$(this.variables.heroSectionBackgroundSelector).velocity('transition.fadeIn', 1000);
			},
	    }
	    enterprisePage.init();
	});
});