//if statements
var carsLeft =1;
var carsRight=0;
var greenMan= "no"

//if statement,"==":eaqual to operator,"&&"" :AND operator,"||"" :OR operator
if(greenMan=="yes"){
	console.log('cross the road')
}
else if(carsLeft==0 || carsRight==0 ){
	console.log('All clear! cross the road')
}
else {
	console.log('Stay where you are!')
}