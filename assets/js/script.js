$("#datePick").datepicker({dateFormat:'dd-mm-yy'});

$("document").ready(function(){
    let category=$("#second");
    console.log(category);
    console.log(category.textContent);
    // if(category.textContent=="home")
    // {
    //     category.style.color="magenta";
    // }
    // if(category.textContent=="school"){
    //     category.style.color="yellow";    
    // }
    document.getElementById("second").style.backgroundColor = "green";
});
