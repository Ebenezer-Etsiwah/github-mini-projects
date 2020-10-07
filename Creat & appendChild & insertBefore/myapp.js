//Creat and appendChild & insertBefore methods
var element = document.createElement('div');

element.style.cssText ="width=200px;height:200px;background:blue;";

element.onclick= function(){alert('hello');};

//document.body.appendChild( element);

//insertBefore
var target = document.getElementById('yellow');
document.body.insertBefore(element , target);