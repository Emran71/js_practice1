console.clear();
// let button = document.querySelector("#visit-button");
// button.addEventListener("click", function(){
//     location.assign("https://www.linkedin.com/");
// });
let val = document.getElementById("pid");


function deletefun()
{
    let value= confirm("Are Your Sure?"); 
    if(value)
    {
       val.textContent ="Deleted ";
       ;
    }
    else{
        val.textContent ="Not Deleted "
    }
}
deletefun();
