var main=document.querySelector('main');
var btn=document.querySelector('button');

btn.addEventListener('click',function(){
    var box=document.createElement('div');
    var x=Math.random()*100;
    var y=Math.random()*100;
    var r=Math.random()*360;
    var c1=Math.floor(Math.random()*100);
    var c2=Math.floor(Math.random()*100);
    var c3=Math.floor(Math.random()*100);

    box.style.height='100px';
    box.style.width='100px';
    box.style.backgroundColor='red';
    box.style.position='absolute';
    box.style.left=x+'%';
    box.style.rotate=r+'deg';
    box.style.top=y+'%';
    box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    main.appendChild(box);
})