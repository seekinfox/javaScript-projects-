(function () {
    var body = document.querySelector(".container"),
        left = document.getElementById("left"),
        right = document.getElementById("right"),
        images = ['./image/one.jpg',
                 './image/two.jpg', './image/three.jpg',
                  './image/four.jpg', './image/five.jpg',
                  './image/six.jpg', './image/seven.jpg',
                  './image/eight.jpg', './image/nine.jpg',
                  './image/ten.jpg', './image/eleven.jpg', './image/twelve.jpg', './image/therteen.jpg',
                  './image/fourteen.jpg', './image/fifteen.jpg', './image/sixteen.jpg'],
        count = 0;
    body.style.background = "url('" + images[count] + "')";
    left.addEventListener("click", () => {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        body.style.background = "url('" + images[count] + "') center ";
        body.style.backgroundSize = "cover";
    })
    right.addEventListener("click", () => {
        count++;
        if (count > images.length - 1) {
            count = 0;
        }
        body.style.background = "url('" + images[count] + "') center ";
        body.style.backgroundSize = "cover";
    })

})()
