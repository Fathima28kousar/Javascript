function updatePage(){
    
    // let cdate = new Date().toLocaleDateString();
    // document.getElementById('abc').innerHTML = cdate
    // document.getElementById('abc').innerHTML = 'good morning';
    // document.write('GN');
    // console.log('testCase 123');
    // let ref = document.getElementById('abc');
    // console.log(ref);
    // ref.innerHTML = 'HEllo how are you??';
}

function change_color(){
    document.getElementById('abc').style.backgroundColor = 'green';
}

function changeColor(){
    document.getElementById('xyz').style.backgroundColor ='yellow';
}

function onClick(){
    document.getElementById('onclick').style.backgroundColor = 'pink';
}

function onDouble(){
    document.getElementById('double').style.backgroundColor = 'blue';
}

function onFocus(){
    document.getElementById('onfocus').style.backgroundColor="yellow";
}

function change_Color_blur(){
    document.getElementById('blur').style.backgroundColor = "purple"
}

function change_Case(){
    let name = document.getElementById('Case').value
    document.getElementById('Case').value = name.toUpperCase()

}

function getData(){
        document.write('Good Morning!');
        alert('fathima');
}
getData();