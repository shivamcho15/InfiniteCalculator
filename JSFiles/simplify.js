let num=document.getElementById("num")
let den=document.getElementById("den")
let submit=document.getElementById("submit")
let answer=document.getElementById("answer")

submit.addEventListener("click",onSubmit)



function onSubmit(e){
    e.preventDefault()

    let val1=parseInt(num.value)
    let val2=parseInt(den.value)
    let simplified=simplify(val1,val2)
    let final=simplified[0]+"/"+simplified[1]
    console.log(final)
    answer.innerText=final

}

function simplify(num,den){
    let gcfFraction=gcf(num,den)
    num=num/gcfFraction
    den=den/gcfFraction
    return [num,den]
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