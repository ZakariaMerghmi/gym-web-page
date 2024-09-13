function scrollapperar(){
    var title = document.querySelector('.images');
    var titleposition = title.getBoundingClientRect().top;
    var currentposition1 = window.innerHeight/1.2 ;
    if (titleposition < currentposition1){
       title.classList.add('images-appear');
    }
    
}
window.addEventListener('scroll' , scrollapperar);

function scrollapperar1(){
    
    var weightlifting = document.querySelector('.weightlifting');
    var wightposition = weightlifting.getBoundingClientRect().top;
    var kettlebels = document.querySelector('.kettlebels');
    var abs = document.querySelector('.abs');
    var gymnastic = document.querySelector('.gymnastic');
    var gymnasticposition = gymnastic.getBoundingClientRect().top;
    var strength = document.querySelector('.strength');
    var currentposition2 =  window.innerHeight/2;
    var standard = document.querySelector('.standard');
    var advanced = document.querySelector('.advanced');
    var premuim = document.querySelector('.premuim');
    var priceposition = standard.getBoundingClientRect().top
    console.log(priceposition);
    console.log(currentposition2);
    if (wightposition < currentposition2){
       weightlifting.classList.add('weightlifting-appear');
       kettlebels.classList.add('kettlebels-appear');
       abs.classList.add('abs-appear');
    }
    if (gymnasticposition < currentposition2){
        gymnastic.classList.add('gymnastic-appear');
        strength.classList.add('strength-appear');
     }
    if (priceposition < currentposition2) { 
        standard.classList.add('appear');
        advanced.classList.add('appear');
        premuim.classList.add('appear');
     }
    
}
window.addEventListener('scroll' , scrollapperar1);


function appear(){
    var title = document.querySelector('.title');
    var navbar = document.querySelector('nav');
    title.classList.add('title-appear');
    navbar.classList.add('title-appear');
}
appear()