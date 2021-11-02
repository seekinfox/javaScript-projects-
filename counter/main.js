(function () {
    var body = document.querySelector("body"),
        min = document.getElementById("minus"),
        plus = document.getElementById("plus"),
        text = document.getElementById("counter"),
        count = 0,
        warningText = "",
        opacity,
        warning = document.getElementById("warning"),
        displayBlock = document.querySelector(".warning"),
        color = "";
    text.innerHTML = count;
    min.addEventListener('click', () => {
        count--;
        text.innerHTML = count;
        if (count < 0) {
            warningText = "Number Is Negative"
            opacity = "block";
            color = "red";
        }
        warning.innerHTML = warningText;
        displayBlock.style.display = opacity;
        text.style.color = color;
    })
    plus.addEventListener('click', () => {
        count++;
        text.innerHTML = count;
        if (count >= 0) {
            opacity = "none"
            color = "darkslategray"
        }
        displayBlock.style.display = opacity;
        text.style.color = color;
    })

    var reset = document.getElementById("reset");
    reset.addEventListener('click', () => {
        count = 0;
        text.innerHTML = count;
        text.style.color = 'darkslategray';
        displayBlock.style.display = "none";
    })
    var invert = document.getElementById("invert");
    invert.addEventListener("click", () => {
        body.classList.toggle("invert");
        body.classList.toggle("one");
    })

})();
