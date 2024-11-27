document.querySelector("#btn").addEventListener("click", function(){
 let  input = document.querySelector("#text").value ;
  try {
    if(input<5)
    {
        throw new Error("Input must be greater than 5");
    }
    else if(input>10){
        throw new Error("Input must be less than 10");
    }
    else{
        console.log(input);
        document.querySelector("#text").value = "" ;
    }
} catch(err){
    document.getElementById("error_message").textContent = err.message;
    document.querySelector("#text").value = "" ;
    return;
}
});
