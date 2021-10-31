alert("random color generator!")
var button = document.querySelector('button');
var body = document.getElementById('colors');
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'skyblue', 'white', 'black'];

body.style.background = 'linear-gradient(#eff235, #f29635, #f23835, #35a3f2, #3545f2, #35f2e2)';


button.addEventListener('click', () => {
    var index = parseInt(Math.random() * colors.length);
    body.style.background = colors[index];
});
