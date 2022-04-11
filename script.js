function buttonclick(val)
{

    document.getElementById("screen").value= document.getElementById("screen").value+val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var Result=eval(text)
    document.getElementById("screen").value=Result
}