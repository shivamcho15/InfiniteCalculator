console.log(45/53)
let num=document.getElementById("num")
let den=document.getElementById("den")
let places=document.getElementById("places")
let button=document.getElementById("submit")
let answer=document.getElementById("answer")

button.addEventListener("click",onSubmit)

function onSubmit(e){
    e.preventDefault()
    let numv=num.value
    let denv=den.value
    let placesv=places.value
    if(numv==""){
        numv="1"
    }
    if(denv==""){
        denv="10"
    }
    if(placesv==""){
        placesv="5"
    }
    let final_answer=getDecimal(num.value,den.value,places.value)
    answer.innerText=final_answer+""
    
}

function times_in(num,whole){
    return Math.floor(whole/num)
}
function getDecimal(n,d,places){
    if(n<d){
        result="0"
    }
    else{
        val=times_in(d,n)
        result=val+""
        n-=val*d
    }
    result+="."
    remainder=n

    for(let i=0;i<places;i++){
        newnumber=remainder*10
        times_in_amount=times_in(d,newnumber)

        remainder=newnumber-d*times_in_amount
        if(remainder<0){
            remainder=0
        }
        result+=times_in_amount+""
    }
    return result


}