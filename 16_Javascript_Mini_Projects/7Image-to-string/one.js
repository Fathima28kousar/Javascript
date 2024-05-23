document.getElementById('file1').addEventListener('change', changeImage2String);

function changeImage2String() {
    let fileImage = document.getElementById('file1').files[0];
    
    if (fileImage) {
        let reader = new FileReader();
        reader.readAsDataURL(fileImage);
        reader.addEventListener("load", () => {
            document.getElementById("abc").innerText = reader.result;
        });
    }
}

function str2image() {
    let imgstr = document.getElementById('abc').innerText;
    let img2 = document.getElementById("img1");
    img2.src = imgstr;
}
