define(['react','jquery'],function(React,$){
	var HomePage = React.createClass({
		getInitialState: function(){
			return {
				stateVariable:'hi'
			}			
		},
		componentDidMount:function(){
			console.log('triggered once after initial render');
		},
	  	render:function(){
	  		var that = this;
		    return (
		    	<div id="homePage">
		    		{this.state.stateVariable}
 		    	</div>
		    );
	  	}
	});

	return HomePage;
});
