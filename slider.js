var imgs = [
    "imgs/1.jpeg",
    "imgs/2.jpeg",
    "imgs/3.jpeg",
    "imgs/4.jpeg",
    "imgs/5.jpeg",
    "imgs/6.jpeg",
    "imgs/7.jpeg",
    "imgs/8.jpeg",
    "imgs/9.jpeg",
    "imgs/10.jpeg",
    "imgs/11.jpeg",
    "imgs/12.jpeg",
    "imgs/13.jpeg",
    "imgs/14.jpeg",
    "imgs/15.jpeg",
    "imgs/16.jpeg",
    "imgs/17.jpeg",
    "imgs/18.jpeg",
    "imgs/19.jpeg",
    "imgs/20.jpeg",
    "imgs/21.jpeg",
    "imgs/22.jpeg",
    "imgs/23.jpeg",
    "imgs/24.jpeg",
    "imgs/25.jpeg",
    "imgs/26.jpeg",
    "imgs/27.jpeg",
    "imgs/28.jpeg",
    "imgs/29.jpeg",
    "imgs/30.jpeg"
]

var index = 0;

function indexAlter (n){
    index +=n;
    showimages(index);
}

function showimages (n){
    if (index<0) {index = imgs.length-1};
    if (index>=imgs.length) {index=0};
    document.getElementById("img").src= imgs[index];
}

showimages(index);

