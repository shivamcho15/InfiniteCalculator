//console.log('hello')
let submit=document.getElementById("submitCalc")
submit.addEventListener("click",this.onSubmit)
function onSubmit(e){
    e.preventDefault()
    val1=document.getElementById("number1").value
    val2=document.getElementById("number2").value
    symbol=document.getElementById("symbol").value
    answer
    if(val1==""){
        val1="0"
    }
    if(val2==""){
        val2="0"
    }
    val1=parseInt(val1)
    val2=parseInt(val2)
    if(symbol=="+"){
        answer=val1+val2
    }else if(symbol=="-"){
        answer=val1-val2
    }else if(symbol=="x"){
        answer=val1*val2
    }else if(symbol=="/"){
        answer=val1/val2
    }else{
        answer=val1**val2
    }
    document.getElementById('answer').innerText=round(answer)
}
function round(answer){
    return Math.round(answer*100)/100
}