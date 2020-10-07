//changing Element's content's
var pHello = document.getElementById('Hello')

  pHello.innerText="new world";

  pHello.innerHTML+="order <span>Hello World</span>";

  pHello.outerHTML ='<p id="Hello">new world order<span>Hello World</span></p>'

  var spanHI= document.querySelectorAll('Hi span')[0];

  spanH1.innerHTML ="new text here!!"