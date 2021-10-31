alert("click anywhere to change background!");
var body = document.querySelector("body"),
    line = document.getElementById("info1"),
    color = ['#F8AD6B', '#B14DA5', '#6949DE', '#66ABB5', '#DD35D4', '#CC239C', '#B6E04B', '#66BD00', '#4CE693', '#1611E4', '#F7BDEF', '#A38079', '#0DA9AD', '#898ED7', '#FFFFFF'];

body.addEventListener('click', () => {
    var index = parseInt(Math.random() * color.length);
    console.log(index);
    body.style.background = color[index];
    line.innerHTML = color[index];
});
