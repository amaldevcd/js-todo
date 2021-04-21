
document.getElementById('forTodo').style.display= "none";

function show()

{   
   
    var x=document.getElementById("forTodo");
    if(x.style.display=== "none")
    {
        x.style.display= "block";
    }
    var t1=document.getElementById("txt-form").value ;
    var link=document.createElement("li");
    link.classList.add("list-group-item");
    link.innerHTML = t1;
    link.style.cursor = "pointer";
    document.getElementById("list").appendChild(link);
    link.addEventListener("click",function()
    {
        link.style.backgroundColor = "#6a757d";
    })
    console.log(t1);
    document.getElementById("txt-form").value='' ;
    
}
