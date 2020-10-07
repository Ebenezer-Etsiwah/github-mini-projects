//constructor
function Apple(color,weight)
{

this.color = color;
this.weight = weight;
}
//protoype of apple created.Protoype uses a shared object and its linked to a callable object.
Apple.prototype ={
	eat :function(){return "eat the apple";}
	throw :function(){return "throw the apple";}
}
//creat a variable in order to creat instances of the function
var apple1=new Apple("red",99);
var apple2=new Apple("green",109);
var apple3=new Apple("pink",200);