
function show()

{
    var t1=document.getElementById("txt-form").value ;
    var link=document.createElement("li");
    link.classList.add("list-group-item");
    link.innerHTML = t1;
    document.getElementById("list").appendChild(link);
    console.log(t1);

}