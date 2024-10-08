let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let magyver = document.querySelector('.magyver');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    magyver.style.fontSize = value + 'px';
    if(scrollY >= 140){
        magyver.style.fontSize = 140 + 'px';
        magyver.style.position = 'fixed';
        if(scrollY >= 492){
            magyver.style.display = 'none';
        }else{
            magyver.style.display = 'block';
        }
        if(scrollY >= 177){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
        }

    }
}

