function clearScreen()
{
    document.getElementById("display").value = "";
}
function inputElement(value)
{
    document.getElementById("display").value +=value;
}

function equalFunc() 
{
    var dis=document.getElementById("display").value;
    var ans=eval(dis);
    document.getElementById("display").value=ans;    
}

function deleteFunc()
{
    var elem = document.getElementById("display").value;
    var elem1 = elem.slice(0,-1);
    document.getElementById("display").value= elem1;
}

function enterKey()
{
    if(event.key === enterKey)
    {
        //event.preventDefault();
        equalFunc();
    }
}

// new commont