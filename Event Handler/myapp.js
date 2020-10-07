//Event Handler
var select = document.getElementByName('cars')[0]

select.onclick =function(event){
	console.log(event);
};

select.addEventListener('click', function(event){
	console.log('click by add event listener')
});

select.addEventListener('click', function(event){
	console.log('click by add event listener 2')
});
select.removeEventListener('click',symbolNmae);