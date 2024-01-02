let lens = document.getElementById('lens');
let first = document.getElementById('first');
let second = document.getElementById('second');

first.addEventListener('mousemove', function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    lens.style.display = 'block';
    lens.style.left = x + 'px';
    lens.style.top = y + 250 + 'px';

    second.style.display = 'block';  // Add this line to show the second image on mousemove
    second.style.backgroundPosition = (x - (500 / 2 / 6)) * -6 + 'px ' + (y - (500 / 2 / 6) + 250) * -6 + 'px';
});

first.addEventListener('mouseout', function(){
    lens.style.display = "none";
    second.style.display = "none";
});
