let val=document.getElementById("value")
let submit=document.getElementById("button")
submit.addEventListener("click",getValue)


function getValue(e){
    e.preventDefault()
    console.log(val.value)
    let factor=calculate(val.value)
    let answerPlace=document.getElementById("answer")
    answerPlace.innerText="Prime factors:"+factor
}
function calculate(value){
    let result=" "
    if(value<2){
        result=value+""
        return result
    }
    let curValue=2
    while(true){
        console.log(curValue+" "+value+"curvalue and value")
        while(value%(curValue)!=0){
            curValue+=1
        }

        value/=curValue
        if(value!=1){
            result+=curValue+"*"
        }else{
            result+=curValue
            break
        }
    }
    return result
}