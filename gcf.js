let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let answer=document.getElementById("answer")
let button=document.getElementById("submit")

button.addEventListener("click",putanswer)

function putanswer(e){
    e.preventDefault()
    let val1=num1.value
    let val2=num2.value
    if(val1==""){
        val1="0"
    }else if(val2==""){
        val2="0"
    }
    val1=parseInt(val1)
    val2=parseInt(val2)
    answer.innerText=gcf(val1,val2)+""  
}

function gcf(val1,val2){

    let fact1=factorization(val1)
    let fact2=factorization(val2)
    let result=1
    let minvalue=Math.min(val1,val2)
    for(let i=1;i<=minvalue;i++){
        let val1count=char_count(fact1,(i)+"")
        let val2count=char_count(fact2,(i)+"")
        let mincount=Math.min(val1count,val2count)
        if(mincount!=0){
            result*=i**mincount
        }
    }
    return result

}
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) 
    {
        if (str[position] == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
}

function factorization(value){
    let result=[]
    if(value<2){
        result=value+""
        return result
    }
    let curValue=2
    while(true){

        while(value%(curValue)!=0){
            curValue+=1
        }

        value/=curValue
        result.push(curValue)
        if(value==1){
            break
            
        }
    }
    return result
}