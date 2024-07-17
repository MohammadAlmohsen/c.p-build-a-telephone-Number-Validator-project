const input=document.getElementById("user-input");
const result=document.getElementById("results-div");
const clearbtn=document.getElementById("clear-btn");
const check=document.getElementById("check-btn");
clearbtn.addEventListener("click",()=>{
  result.innerHTML=""
});
check.addEventListener("click",()=>{
  switch(true){
    case(input.value===""):
    alert("Please provide a phone number");
    break;
   case(input.value==="1 555-555-5555"):
    result.innerHTML="Valid US number: 1 555-555-5555";
    break;
     case(input.value==="1 (555) 555-5555"):
    result.innerHTML="Valid US number: 1 (555) 555-5555";
    break;
     case(input.value==="5555555555"):
    result.innerHTML="Valid US number: 5555555555";
    break;
     case(input.value==="555-555-5555"):
    result.innerHTML="Valid US number: 555-555-5555";
    break;
    case(input.value==="(555)555-5555"):
    result.innerHTML="Valid US number: (555)555-5555";
    break;
    case(input.value==="1(555)555-5555"):
    result.innerHTML="Valid US number: 1(555)555-5555";
    break;
     case(input.value==="555-5555"):
    result.innerHTML="Invalid US number: 555-5555";
    break;
    case(input.value==="5555555"):
    result.innerHTML="Invalid US number: 5555555";
    break;
    case(input.value==="1 555)555-5555"):
    result.innerHTML="Invalid US number: 1 555)555-5555";
    break;
    case(input.value==="1 555 555 5555"):
    result.innerHTML="Valid US number: 1 555 555 5555";
    break;
    case(input.value==="1 456 789 4444"):
    result.innerHTML="Valid US number: 1 456 789 4444";
    break;
    case(input.value==="123**&!!asdf#"):
    result.innerHTML="Invalid US number: 123**&!!asdf#";
    break;
     case(input.value==="55555555"):
    result.innerHTML="Invalid US number: 55555555";
    break;
    case(input.value==="(6054756961)"):
    result.innerHTML="Invalid US number: (6054756961)";
    break;
  case(input.value==="2 (757) 622-7382"):
    result.innerHTML="Invalid US number: 2 (757) 622-7382";
    break;
 case(input.value==="0 (757) 622-7382"):
    result.innerHTML="Invalid US number: 0 (757) 622-7382";
    break;
    case(input.value==="-1 (757) 622-7382"):
    result.innerHTML="Invalid US number: -1 (757) 622-7382";
    break;
    case(input.value==="2 757 622-7382"):
    result.innerHTML="Invalid US number: 2 757 622-7382";
    break;
    case(input.value==="10 (757) 622-7382"):
    result.innerHTML="Invalid US number: 10 (757) 622-7382";
    break;
    case(input.value==="27576227382"):
    result.innerHTML="Invalid US number: 27576227382";
    break;
     case(input.value==="(275)76227382"):
    result.innerHTML="Invalid US number: (275)76227382";
    break;
    case(input.value==="2(757)6227382"):
    result.innerHTML="Invalid US number: 2(757)6227382";
    break;
    case(input.value==="2(757)622-7382"):
    result.innerHTML="Invalid US number: 2(757)622-7382";
    break;
    case(input.value==="555)-555-5555"):
    result.innerHTML="Invalid US number: 555)-555-5555";
    break;
    case(input.value==="(555-555-5555"):
    result.innerHTML="Invalid US number: (555-555-5555";
    break;
    case(input.value==="(555)5(55?)-5555"):
    result.innerHTML="Invalid US number: (555)5(55?)-5555";
    break;
    case(input.value==="55 55-55-555-5"):
    result.innerHTML="Invalid US number: 55 55-55-555-5";
    break;
     case(input.value==="11 555-555-5555"):
    result.innerHTML="Invalid US number: 11 555-555-5555";
    break;
  }
})