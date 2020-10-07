//Final Project
let elements =
	 document.getElementsByName('cssProperty');//to enhance code execution performance 'document.getElementsByName' is brought ot of the function.
	  let div= document.getElementById('modify')//to enhance code execution performance 'document.getElementsById' is brought ot of the function.
function set()
{


	for(let index =0; index<elements.length; index++
		){
		let cssProperty = elements [index].getAttribute('id');

		let cssValue = elements [index].value;
		//console.log(cssProperty,cssValue);logging out the cssPropery and value to the console
    
     div.style[cssProperty] = cssValue;
	}
}
document.getElementById('set').addEventListener('click',set);