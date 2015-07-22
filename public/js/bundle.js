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
			__webpack_require__(3)
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, $, HeaderBar, content, ScrollMagic){
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
				    		React.createElement("div", {id: "trigger"}), 
				    		/*
				    				    	<div id="header-bar">
				    				    		<ul className="header-tabs button-style-one">
				    				    			<li>Intro</li>
				    				    			<li>Tech</li>
				    				    			<li>Work</li>
				    				    			<li>Contact</li>
				    				    		</ul>
				    		 		    	</div>*/
				    		React.createElement("div", {id: "pageOne", className: "content"}, 
				    			React.createElement("br", null), " ", React.createElement("br", null), 
				    			React.createElement("img", {src: "public/images/ashwin.jpg", className: "profilePic"}), 
				    			content.firstPageParaOne, 
				    			content.firstPageParaTwo
		 		    		), 
		 		    		
		 		    		React.createElement("div", {id: "pageTwo"}
		 		    		), 

		 		    		React.createElement("div", {id: "pagethree"}
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
					var controller = new ScrollMagic.Controller();
					var scene = new ScrollMagic.Scene()
						.setPin("#header-bar")
						.addTo(controller);
				},
			  	render:function(){
			  		var that = this;
				    return (
				    	React.createElement("div", {id: "header-bar"}, 
				    		React.createElement("ul", {className: "header-tabs button-style-one"}, 
				    			React.createElement("li", null, "Intro"), 
				    			React.createElement("li", null, "Tech"), 
				    			React.createElement("li", null, "Work"), 
				    			React.createElement("li", null, "Contact")
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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			exports
		], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports){
			exports.firstPageParaOne = "Hello, I'm Ashwin. I make Websites and Web applications that are user-friendly, scalable and easy to maintain"
			exports.firstPageParaTwo = "\n Profile Page is under construction. Come back later!"
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
]);