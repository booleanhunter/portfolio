webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(4),
			__webpack_require__(5)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, HomePage){	
			console.log('Loaded the Home Page');
			React.render(React.createElement(HomePage, null), document.getElementById('componentContainer'));
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//webpack --progress --colors --watch (for development)
	//webpack -p (for production)

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//This willhave all the other components under it. The main parent

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(4),
			__webpack_require__(2),
			__webpack_require__(6),
			__webpack_require__(7),
			__webpack_require__(8),
			__webpack_require__(3)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, $, HeaderBar, TimelineWidget, content, ScrollMagic){
			var HomePage = React.createClass({displayName: "HomePage",
				getInitialState: function(){
					return {
						stateVariable:'hi'
					}			
				},
				componentDidMount:function(){
					console.log('triggered once after initial render');
					// var controller = new ScrollMagic.Controller();
					// var scene = new ScrollMagic.Scene({triggerElement: "#header-bar"})
					// 	.setPin("#header-bar")
					// 	.addTo(controller);
				},
			  	render:function(){
			  		var that = this;
				    return (
				    	React.createElement("div", {id: "homePage"}, 
				    		React.createElement(HeaderBar, null), 
				    		React.createElement("div", {className: "content"}, 
					    		React.createElement("div", {id: "pageOne"}, 
					    			React.createElement("br", null), " ", React.createElement("br", null), 
					    			React.createElement("img", {src: "public/images/ashwin.jpg", className: "profilePic"}), 
					    			content.firstPageParaOne, 
					    			content.firstPageParaTwo
			 		    		), 
			 		    		
			 		    		React.createElement("div", {id: "pageTwo"}, 
			 		    			React.createElement(TimelineWidget, null)
			 		    		), 

			 		    		React.createElement("div", {id: "pageThree"}
			 		    		)
			 		    	)	
		 		    	)
				    );
			  	}
			});

			return HomePage;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(4),
			__webpack_require__(2),
			__webpack_require__(3)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, $, ScrollMagic){
			var HeaderBar = React.createClass({displayName: "HeaderBar",
				getInitialState: function(){
					return {
						stateVariable:'hi'
					}			
				},
				componentDidMount:function(){
					console.log('triggered once after initial render');
				},
				scrollToOne: function(){
					$('body').animate({
						scrollTop: $('#pageOne').offset().top
					});
				},
				scrollToTwo: function(){
					$('body').animate({
						scrollTop: $('#pageTwo').offset().top
					});
				},
				scrollToThree: function(){
					$('body').animate({
						scrollTop: $('#pageThree').offset().top
					});
				},
			  	render:function(){
			  		var that = this;
				    return (
				    	React.createElement("div", {id: "header-bar", className: "header"}, 
				    		React.createElement("div", {className: "header-tabs"}, 
				    			React.createElement("div", {className: "buttonClassOne", onClick: this.scrollToOne}, "Intro"), 
				    			React.createElement("div", {className: "buttonClassOne", onClick: this.scrollToTwo}, "Tech"), 
				    			React.createElement("div", {className: "buttonClassOne", onClick: this.scrollToThree}, "Work"), 
				    			React.createElement("div", {className: "buttonClassOne"}, "Contact")
				    		)
		 		    	)
				    );
			  	}
			});

			return HeaderBar;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Copyright Toorq Media Services 
	 * @author Ashwin Hariharan
	 * @Details Renders the view for the timeline-widget and operations using the timeline feature and calendar
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(4),
	        __webpack_require__(2),
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
	    	var TimelineWidget = React.createClass({displayName: "TimelineWidget",
	            shouldComponentUpdate:function(){
	                return false;
	            },
	    		render: function(){
	    			return (
	    				React.createElement("div", {className: "timelineWidget"}, 
	    					React.createElement("div", {className: "triangle"}), 
	    					React.createElement("div", {className: "timelineBar"}), 

	    					React.createElement("div", {className: "timelineHeader"}, 
								React.createElement("div", {id: "timelineHeader"}, 
									"2016"
								)
	    					), 	

	    					React.createElement("div", {className: "timelineSections"}, 						
								React.createElement("div", {className: "timelineCurrentSection"}, 
									"Jan"
								)

	    					), 

	    					React.createElement("div", {className: "timelineFooter"}, 
	    						
								React.createElement("div", {id: "timelineFooter"}, 
									"2014"
								)
	    					)
	    				)

	    			)
	    		}
	    	})
		
			return TimelineWidget;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))     

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			exports
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
			exports.firstPageParaOne = "Hello, I'm Ashwin. I make Websites and Web applications that are user-friendly, scalable and easy to maintain"
			exports.firstPageParaTwo = "\n Profile Page is under construction. Come back later!"
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
]);