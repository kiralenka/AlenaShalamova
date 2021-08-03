var timeVar='';

let button = document.querySelector('#click');

let my_blok = document.querySelector('#text');


button.onclick = function(){
    if(my_blok.style.display == "block"){
        my_blok.style = "display: none";
    } else {
    my_blok.style = "display: block"; timeVar = 1;
    }
}







/*    document.getElementById('click').onclick = function() {
        document.getElementById('text').hidden = true;
        
    }
    */

