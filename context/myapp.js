//console.log( this)
var object = {
	pop: this,
	//creating an object and call
	embed :
	{
		embed :true,
	method : function(){return this;}	
	}


};
 var array = [ 
 this,
 function(){return this;}
 ]


function global(){ 
	//embedded subroutine
	console.log('from global', this)
	function sub(){console.log('from global', this)

	}
	sub();//global scope
	return this;
}
global.call( object );

new global()