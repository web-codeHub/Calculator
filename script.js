let inp =document.getElementById('display');
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        if(inp.value==404){
            window.open("https://www.instagram.com/http_s_404/", "_blank");
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}



let margin = document.getElementById('text');



setTimeout(() => {
    console.log("set tiemout haha");
    margin.style.marginRight="10vh";
}, 4000);