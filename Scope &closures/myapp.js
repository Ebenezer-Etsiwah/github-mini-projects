var engine={
    maker:"Ford",
    headGasket:{
        pots:{
            "piston1",
            "piston2"
        }
    }
}


function runExpression()
{

    var a = 10;

    function add(b)
    {
        return a+b;
    }

    
console.log(
    add(90),
    add(20)
    );
}