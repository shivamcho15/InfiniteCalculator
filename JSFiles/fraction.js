let num1=document.getElementById("num1")
let num2=document.getElementById("num2")

let symbol=document.getElementById("symbol")

let den1=document.getElementById("den1")
let den2=document.getElementById("den2")
let submit=document.getElementById("submit")
let answer=document.getElementById("answer")

submit.addEventListener("click",onSubmit)

function onSubmit(e){
    e.preventDefault()
    let symbval=symbol.value
    let num1val=num1.value
    let den1val=den1.value
    let num2val=num2.value
    let den2val=den2.value
    let arr_answer;
    if(symbval=="+" || symbval=="-"){
        arr_answer=plusminus(num1val,den1val,num2val,den2val,symbval)
    }else if(symbval=="x"){
        arr_answer=multiply(num1val,den1val,num2val,den2val)
    }else{
        arr_answer=multiply(num1val,den1val,den2val,num2val)
    }
    let num=arr_answer[0]
    let den=arr_answer[1]
    arr_answer=simplify(num,den)
    num=arr_answer[0]
    den=arr_answer[1]
    answer.innerText=num+"/"+den

}
function plusminus(num1,den1,num2,den2,symbol){
    let lcm_val=lcm(den1,den2)
    let multiply1=lcm_val/den1
    let multiply2=lcm_val/den2
    num1*=multiply1
    num2*=multiply2
    let newnum=0
    if(symbol=="+"){
        newnum=num1+num2
    }else if(symbol=="-"){
        newnum=num1-num2
    }
    return [newnum,lcm_val]

}
function multiply(num1,den1,num2,den2){
    return [num1*num2,den1*den2]
}

function simplify(num,den){
    let gcfFraction=gcf(num,den)
    num=num/gcfFraction
    den=den/gcfFraction
    return [num,den]
}

function lcm(val1,val2){

    let fact1=factorization(val1)
    let fact2=factorization(val2)
    let result=1
    let maxvalue=Math.max(val1,val2)
    for(let i=1;i<=maxvalue;i++){
        let val1count=char_count(fact1,(i)+"")
        let val2count=char_count(fact2,(i)+"")
        let maxcount=Math.max(val1count,val2count)
        if(maxcount!=0){
            result*=i**maxcount
        }
    }
    return result

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