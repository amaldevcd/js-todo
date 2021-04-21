
function show()

{   var x=document.getElementById("forTodo");
    if(x.style.display=== "none")
    {
        x.style.display= "block";
    }
    // else
    // {
    //     x.style.display= "none";
    // }
    var t1=document.getElementById("txt-form").value ;
    var link=document.createElement("li");
    link.classList.add("list-group-item");
    link.innerHTML = t1;
    document.getElementById("list").appendChild(link);
    console.log(t1);

}