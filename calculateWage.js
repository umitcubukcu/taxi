
function rangeInput(){
    var x  = document.getElementById("rangeInput").value;
    var price = 10 + x*6;
    if(x==0){
        price = 0;
        document.getElementById("value").innerHTML = price + " TL";
        document.getElementById("km").innerHTML = "Mesafe: 0" +" km";
    } 
    else{
        document.getElementById("value").innerHTML = price + " TL";
        document.getElementById("km").innerHTML = "Mesafe: "+ x + " km";
        /*kaç dk'da giderim*/
        var timing = ((x*60)/70);
        document.getElementById("timing").innerHTML = "Yaklaşık olarak " + timing.toFixed(0)+ " Dakika";

    }
}

const element = document.getElementById("rangeInput");
element.addEventListener("mousemove",function(){
    const element = document.getElementById("rangeInput");
    const count = element.value;
    const rgb = 'linear-gradient(90deg, rgb(128, 253, 45) '+count+'%'+', rgb(168, 168, 168) '+count+'%)';
    element.style.background = rgb;
});
