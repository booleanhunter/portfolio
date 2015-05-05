webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React){
		
		console.log('Loaded the Home Page');
		var usernameHeader = document.getElementById('usernameHeader').getAttribute('data-request');
		if(usernameHeader === ''){
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function(HomePage){
				React.render(React.createElement(HomePage, null), document.getElementById('componentContainer'));
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			
		}else{
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(TodoApp){
				React.render(React.createElement(TodoApp, {username: usernameHeader}), document.getElementById('componentContainer'));
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));		
		}
		//console.log($('#usernameHeader'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	//webpack --progress --colors --watch (for development)
	//webpack -p (for production)

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
		var HomePage = React.createClass({displayName: "HomePage",
			signup:{
				usernameStatus:'false'
			},
			verifyLogin:function(){
				console.log('Login clicked');
				var username = document.getElementById('loginNameInput').value,
					password = document.getElementById('loginPwInput').value,
					postData = {
						username: username,
						password: password 
					};
				//this code needs to be changed as the authentication technique is not secure.
				$.ajax({
				    type:'POST',
				    url:'/authenticate',
				    data:postData,
				    datatype:'json',
				    success: function(data){
				    	if(data.status === 'authenticated'){
				    		window.location.replace('/');
				    	}else if(data.status === 'authentication failure'){
				    		document.getElementById('loginErrMsg').innerHTML = "The username does not exist!"
				    	}else if(data.status === 'password failure'){
				    		document.getElementById('loginErrMsg').innerHTML = "It looks like you entered a wrong password. Please try again.";
				    	}                
				    }.bind(this),
				    error: function(httpRequest,status,error){
				    	window.location.replace('/');
				    }
				});
			},
			checkForUsername:function(){
				var username = document.getElementById('signupNameInput');
				if(username.value !== ''){
					var postData = {
						username:username.value
					};
					$.ajax({
					    type:'POST',
					    url:'/checkforuser',
					    data:postData,
					    datatype:'json',
					    success: function(data){
					  		if(data.status === 'exists'){
					  			document.getElementById('signupNameMsg').innerHTML = 'Username not available';
					  			this.signup.usernameStatus = 'false';

					  		}else if(data.status === 'available'){
					  			document.getElementById('signupNameMsg').innerHTML = 'Username available';
					  			this.signup.usernameStatus = 'ok';
					  		}
					    }.bind(this),
					    error: function(httpRequest,status,error){
					    	window.location.replace('/');
					    }
					});
				}else{
					this.signup.usernameStatus = 'false';
				}
			},
			signup:function(){
				var userName = document.getElementById('signupNameInput').value,
					pwOne = document.getElementById('signupPwInputOne').value,
					pwTwo = document.getElementById('signupPwInputTwo').value,
					that = this;
				if(pwOne !== pwTwo){
					document.getElementById('signupPwMsg').innerHTML = 'Passwords do not match';
				}else if(that.signup.usernameStatus === 'ok' && pwOne !== ''){
					var postData = {
						username: userName,
						password: pwOne 
					};
					$.ajax({
					    type:'POST',
					    url:'/signup',
					    data:postData,
					    datatype:'json',
					    success: function(data){
					    	window.location.replace('/');             
					    }.bind(this),
					    error: function(httpRequest,status,error){
					    	window.location.replace('/');
					    }
					});
				}else{
					console.log('username exists');
				}
			},
		  	render:function(){
		  		var that = this;
			    return (
			    	React.createElement("div", {id: "homePage"}, 
			     		React.createElement("div", {id: "loginSection", className: "pure-form"}, 
				    		React.createElement("div", null, 
				     			"User-name", 
				     			React.createElement("input", {type: "text", id: "loginNameInput"})
				     		), 
				     		React.createElement("div", null, 
				     			"Password", 
				     			React.createElement("input", {type: "password", id: "loginPwInput"})
				     		), 
				     		React.createElement("input", {type: "submit", onClick: that.verifyLogin, id: "loginButton", value: "Login", className: "pure-button"}), 		
				     		React.createElement("div", {id: "loginErrMsg"})
				     	), 

			     		React.createElement("div", {id: "signupSection", className: "pure-form"}, 
			     			"Are you a new user? Sign Up!", 
			     			React.createElement("div", null, 
			     				React.createElement("input", {type: "text", id: "signupNameInput", placeholder: "Choose a username", onBlur: that.checkForUsername}), 
			     				React.createElement("div", {id: "signupNameMsg"})
			     			), 
			     			React.createElement("div", null, 
			     				React.createElement("input", {type: "password", id: "signupPwInputOne", placeholder: "Choose a password"}), React.createElement("br", null), 
			     				React.createElement("input", {type: "password", id: "signupPwInputTwo", placeholder: "Re-enter your password"}), 
			   					React.createElement("div", {id: "signupPwMsg"})
			     			), 
			     			React.createElement("input", {type: "submit", onClick: that.signup, id: "signupButton", value: "Sign Up", className: "pure-button"})
			     		)
	 		    	)
			    );
		  	}
		});
		return HomePage;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4),__webpack_require__(2),__webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$,TodoList){
		var TodoApp = React.createClass({displayName: "TodoApp",
			componentDidMount: function(){
				this.fetchNotifications();	
			},
			fetchNotifications: function(){
				$.ajax({
					type:'GET',
					url:'/fetchnotifications',
					datatype:'json',
					success:function(data){
						console.log(data);
					},
					error:function(httpRequest,status,error){
						console.log(error);
					}
				});
			},
			createNewTodo: function(e){
				var inputTodo = document.getElementById('inputTodo'),
					that = this;
				if(inputTodo.value !== ''){
					var postData = {
						todoContent : inputTodo.value
					};
					$.ajax({
					    type:'POST',
					    url:'/createnewtodo',
					    datatype:'json',
					    data:postData,
					    success: function(data){
					    	inputTodo.value = '';
					    	that.refs.TodoList.fetchAllTodos();          
					    },
					    error: function(httpRequest,status,error){
					    	console.log(error)
					    }
					});
				}			
				e.preventDefault();
			},		
			assignTodo: function(){
				var assigneeInput = document.getElementById('assigneeInput'),
					assignTodoInput = document.getElementById('assignTodoInput'),
					that = this;

				if(assigneeInput.value !== '' && assignTodoInput.value !== ''){
					var postData = {
						assignTo: assigneeInput.value,
						todoContent: assignTodoInput.value
					};
					$.ajax({
						type:'POST',
						url:'/assigntodo',
						datatype:'json',
						data:postData,
						success: function(data){
							if(data.status === 'invalid'){
								assigneeInput.setAttribute('placeholder','The username does not belong to any account');
								assigneeInput.className = 'error';
							}else{
								assigneeInput.setAttribute('placeholder','Assign a todo to another user. Enter the username');
								assigneeInput.className = '';
							}
						},
						error: function(httpRequest,status,error){
							console.log(error);
						}
					});
				}else{
					if(assigneeInput.value === ''){
						assigneeInput.setAttribute('placeholder','You must enter a valid username');
						assigneeInput.className = 'error';
					}
					if(assignTodoInput.value === ''){
						assignTodoInput.setAttribute('placeholder','Please enter the content');
						assignTodoInput.className = 'error';
					}
				}			
				console.log(assigneeInput);
				console.log(assignTodoInput);
			},
			render:function(){
				return (
					React.createElement("div", {id: "todoApp"}, 
						React.createElement("h3", {id: "username"}, "Welcome, ", this.props.username, " "), 
						React.createElement("div", {id: "logoutButton"}, 
							React.createElement("a", {href: "/logout", className: "pure-button"}, " Logout ")
						), 	
						
						React.createElement("form", {onSubmit: this.createNewTodo, className: "pure-form"}, 
			  				React.createElement("input", {type: "text", id: "inputTodo", placeholder: "Enter a todo"})
					    ), 

					    React.createElement("div", {className: "assignTodoSection pure-form"}, 
					        React.createElement("input", {type: "text", id: "assigneeInput", placeholder: "Assign a todo to another user. Enter the username"}), 
					        React.createElement("div", {id: "assigneeInputErr"}), 
					        React.createElement("input", {type: "text", id: "assignTodoInput", placeholder: "Enter the todo to assign to a user"}), 
					        React.createElement("div", {id: "assignTodoErr"}), 
					        React.createElement("input", {type: "button", id: "assignTodoSubmit", className: "pure-button", onClick: this.assignTodo, value: "Assign"})
					    ), 
						React.createElement(TodoList, {ref: "TodoList"})
						
					)
				)	
			}
		});
		return TodoApp;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));		

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4),__webpack_require__(2),__webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$,SingleTodo){ 
		var TodoList = React.createClass({displayName: "TodoList",
			getInitialState:function(){
				return {
					allTodos:[],
					activeTodos:[],
					completedTodos:[],
					todoContentStyle:{
						display:'none'
					}
				}
			},
			componentDidMount:function(){
				this.fetchAllTodos();	
			},		
			fetchAllTodos:function(){
				$.ajax({
				    type:'GET',
				    url:'/fetchalltodos',
				    datatype:'json',
				    success: function(data){
				    	var allTodos = [], activeTodos = [], completedTodos = [], archivedTodos = [];
				    	for (var i=0; i < data.allTodos.length; i++){
			    			allTodos.push(data.allTodos[i]);
			    			if(data.allTodos[i].finishStatus === false) {
			    			    activeTodos.push(data.allTodos[i]);
			    			}else if(data.allTodos[i].finishStatus === true){
			    				completedTodos.push(data.allTodos[i]);
			    			}			    	    
				    	}
				    	this.setState({allTodos:allTodos,activeTodos:activeTodos,completedTodos:completedTodos});            
				    }.bind(this),
				    error: function(httpRequest,status,error){
				    	console.log(error)
				    }
				});
			},	
			saveTodo:function(todoId,todoContent){
				var postData = {
					todoId: todoId,
					todoContent: todoContent
				},
				that = this;
				$.ajax({
				    type:'POST',
				    url:'/savetodo',
				    datatype:'json',
				    data:postData,
				    success: function(data){
				    	that.fetchAllTodos();           
				    },
				    error: function(httpRequest,status,error){
				    	console.log(error)
				    }
				});
			},
			deleteTodo:function(todoId){
				var postData = {
					todoId: todoId
				},
				that = this;
				$.ajax({
				    type:'POST',
				    url:'/deletetodo',
				    datatype:'json',
				    data:postData,
				    success: function(data){
				    	that.fetchAllTodos();           
				    },
				    error: function(httpRequest,status,error){
				    	console.log(error)
				    }
				});
			},
			markAsFinished: function(todoId){
				var postData = {
					todoId: todoId
				},
				that = this;
				$.ajax({
				    type:'POST',
				    url:'/markasfinished',
				    datatype:'json',
				    data:postData,
				    success: function(data){
				    	that.fetchAllTodos();           
				    },
				    error: function(httpRequest,status,error){
				    	console.log(error)
				    }
				});
			},
			markAsActive: function(todoId){
				var postData = {
					todoId: todoId
				},
				that = this;
				$.ajax({
				    type:'POST',
				    url:'/markasactive',
				    datatype:'json',
				    data:postData,
				    success: function(data){
				    	that.fetchAllTodos();           
				    },
				    error: function(httpRequest,status,error){
				    	console.log(error)
				    }
				});
			},
			
			showAllTodos:function(){
				document.getElementById('allTodos').style.display = 'block';
				document.getElementById('activeTodos').style.display = 'none';
				document.getElementById('completedTodos').style.display = 'none';
			},
			showActiveTodos:function(){
				document.getElementById('allTodos').style.display = 'none';
				document.getElementById('activeTodos').style.display = 'block';
				document.getElementById('completedTodos').style.display = 'none';
			},
			showCompletedTodos:function(){
				document.getElementById('allTodos').style.display = 'none';
				document.getElementById('activeTodos').style.display = 'none';
				document.getElementById('completedTodos').style.display = 'block';
			},
			render:function(){
				var that = this;
				var allTodos = this.state.allTodos.map(function(todo){
					return (
						React.createElement(SingleTodo, {
							key: "all"+todo._id, 
							todoId: todo._id, 
							content: todo.content, 
							finishStatus: todo.finishStatus, 
							archived: todo.archived, 
							date: todo.date, 
							deleteTodo: that.deleteTodo, 
							saveTodo: that.saveTodo, 
							markAsFinished: that.markAsFinished, 
							markAsActive: that.markAsActive})
					)	
				});
				var activeTodos = this.state.activeTodos.map(function(todo){
					return (
						React.createElement(SingleTodo, {
							key: todo._id, 
							todoId: todo._id, 
							content: todo.content, 
							finishStatus: todo.finishStatus, 
							archived: todo.archived, 
							date: todo.date, 
							deleteTodo: that.deleteTodo, 
							saveTodo: that.saveTodo, 
							markAsFinished: that.markAsFinished, 
							markAsActive: that.markAsActive})
					)	
				});

				var completedTodos = this.state.completedTodos.map(function(todo){
					return (
						React.createElement(SingleTodo, {
							key: todo._id, 
							todoId: todo._id, 
							content: todo.content, 
							finishStatus: todo.finishStatus, 
							archived: todo.archived, 
							date: todo.date, 
							deleteTodo: that.deleteTodo, 
							saveTodo: that.saveTodo, 
							markAsFinished: that.markAsFinished, 
							markAsActive: that.markAsActive})
					)	
				});
				/*Implicit form submission is being perfomed here. If there is no submit button, then the form gets submitted but only if there
					is one input field. Else, you must have a submit button.
				*/
				return (
					React.createElement("div", {id: "todoList"}, 
						React.createElement("div", {className: "tabs pure-menu pure-menu-horizontal"}, 
						    React.createElement("ul", {className: "pure-menu-list"}, 
						        React.createElement("li", {id: "allTodosHeader", className: "pure-menu-item", onClick: this.showAllTodos}, 
						        	React.createElement("a", {href: "#", className: "pure-menu-link"}, "All Todos")
						        ), 
						        React.createElement("li", {id: "activeTodosHeader", className: "pure-menu-item", onClick: this.showActiveTodos}, 
						        	React.createElement("a", {href: "#", className: "pure-menu-link"}, "Active")
						        ), 
						        React.createElement("li", {id: "completedTodosHeader", className: "pure-menu-item", onClick: this.showCompletedTodos}, 
						        	React.createElement("a", {href: "#", className: "pure-menu-link"}, "Completed")
						        )
						    )
						), 	

						React.createElement("div", {id: "tabsContent"}, 
							React.createElement("div", {id: "allTodos"}, allTodos), 
							React.createElement("div", {id: "activeTodos", style: this.state.todoContentStyle}, " ", activeTodos), 
							React.createElement("div", {id: "completedTodos", style: this.state.todoContentStyle}, " ", completedTodos)						
						)	

					)				
				)
			}
		});
		return TodoList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React,$){
		var SingleTodo = React.createClass({displayName: "SingleTodo",
			getInitialState:function(){
				return {
					deleteButtonStyle:{
						display:'none',
						float:'right'
					},
					content:this.props.content		
				}			
			},
			myVar:{
				formSubmitted:false
			},
			componentWillReceiveProps:function(nextProps){
				this.setState({content:nextProps.content});
			},			
			saveTodoOnSubmit:function(e){
				e.target.children[0].readOnly = true;
				e.preventDefault();
				this.myVar.formSubmitted = true;
				this.props.saveTodo(this.props.todoId,e.target.children[0].value);
			},
			saveTodoOnBlur:function(e){
				if(this.myVar.formSubmitted){
					this.myVar.formSubmitted = false;
				}else{
					e.target.readOnly = true;
					this.props.saveTodo(this.props.todoId,e.target.value);
				}
				e.preventDefault();
			},
			deleteTodo:function(){
				this.props.deleteTodo(this.props.todoId);
			},
			changeFinishStatus:function(event){
				if(event.target.checked){
					this.props.markAsFinished(this.props.todoId);
				}else{
					this.props.markAsActive(this.props.todoId);
				}
			},
			updateInputField: function(event) {
			    this.setState({content: event.target.value});
			},
			editTodo:function(event){
				event.target.readOnly = false;
			},
			showDeleteButton:function(event){
				event.currentTarget.children[2].style.display = 'block';
			},
			hideDeleteButton:function(event){
				event.currentTarget.children[2].style.display = 'none';
			},
			render:function(){
				var that = this;
				return (
					React.createElement("div", {className: "todos", onMouseEnter: that.showDeleteButton, onMouseLeave: that.hideDeleteButton}, 
						React.createElement("input", {type: "checkbox", className: "checkBox", checked: this.props.finishStatus, onChange: this.changeFinishStatus}), 

						React.createElement("form", {onSubmit: this.saveTodoOnSubmit}, 
							React.createElement("input", {type: "text", onChange: this.updateInputField, className: "todoContent", value: this.state.content, readOnly: true, onDoubleClick: that.editTodo, onBlur: that.saveTodoOnBlur})						
						), 
						React.createElement("div", {style: this.state.deleteButtonStyle, onClick: that.deleteTodo}, "X"), 
						React.createElement("div", null, 
							this.props.date
						)
					)
				)			
			}
		});

		return SingleTodo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);