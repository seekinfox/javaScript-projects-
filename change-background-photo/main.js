var button = document.getElementById("button"),
    image = document.getElementById("image"),
    gallery = ['./images/one.jpg',
              './images/two.jpg',
              './images/three.jpg',
              './images/five.jpg',
              './images/six.jpg',
              './images/seven.jpg',
              './images/eight.jpg',
              './images/nine.jpg',
              './images/ten.jpg',
              './images/eleven.jpg'],
    memo = document.getElementById("memo");

image.style.background = "url('./images/main-hero.jpg')";
image.style.backgroundRepeat = "no-repeat";
image.style.backgroundSize = "cover";
memo.innerHTML = "We are a family";

button.addEventListener('click', () => {
    var index = parseInt(Math.random() * gallery.length)
    image.style.background = "url('" + gallery[index] + "')";
    image.style.backgroundSize = "cover";
    button.classList.toggle("toggle");
});
