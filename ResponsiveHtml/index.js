function Check(pic){
    let value=document.getElementById('imgdisplay');
    value.src=pic;
    document.getElementById("Imghover").style.display="block";
    console.log(value);
}
let remove=()=>{
    document.getElementById("Imghover").style.display="none";
}