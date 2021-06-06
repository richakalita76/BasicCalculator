function dis(val)
{
    document.getElementById("result").value+=val
    document.getElementById("result").inn
}
function solve()
{
    let x =document.getElementById("result").value
    console.log(x)
    let y = eval(x)
    document.getElementById("result").value=y
}

function clr()
{
    document.getElementById("result").value=" "
}