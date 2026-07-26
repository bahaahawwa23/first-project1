let element=document.querySelectorAll("ul li");{
console.log(element);
element.forEach((ele) => {
    ele.onclick=()=>{
        element.forEach((e) => {
            e.classList.remove("ri-home-8-line");
        });
        ele.classList.add("ri-home-8-line");
    };
}) ;

}