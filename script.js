btn=document.querySelector('button')
h2=document.querySelector('h2')
inner=document.querySelector('#inner')
box=document.querySelector('#box')
var grow=0;
num=50+Math.floor(Math.random()*50)
console.log(num)


btn.addEventListener('click',function(){
    btn.style.pointerEvents='none';
    console.log("hello");
    var int =setInterval(function(){
        grow++;
        h2.innerHTML=grow+'%';
        inner.style.width=grow+'%';

    },num)
    setTimeout(() => {
       clearInterval(int); 
       btn.innerHTML="Downloaded";
       btn.style.opacity=0.5;
       h3=document.createElement('h3');
        h3.innerHTML="Downloaded in "+(num%10)+" seconds";
        h3.style.fontSize='20px'
        h3.style.textAlign='center';
        box.appendChild(h3);
    }, num*100);
    
})