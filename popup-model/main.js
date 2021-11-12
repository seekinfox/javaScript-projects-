(() => {
    //get all the dom elements needed
    var cards = document.querySelectorAll('.card'),
        images = document.querySelectorAll('.image'),
        //this is out popupmodel element
        model = document.querySelector('.model-container'),
        modelImage = document.querySelector('.img-container'),
        //close is a close button for our popup model
        close = document.getElementById("close"),
        right = document.getElementById("right"),
        left = document.getElementById("left"),
        index = 0,
        imgArray = []; // used for left/right buttons


    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            model.style.display = "block";
            //get src of img on which we have clicked
            var image = e.target.src;
            //set index to the index of image we gave clicked
            index = imgArray.indexOf(image);

            modelImage.style.background = "url(" + image + ")";
            modelImage.style.backgroundSize = "100% 100%";
        })
    })
    close.addEventListener('click', () => {
        model.style.display = "none";
    })

    //get all the images and push them in a array
    images.forEach((image) => {
        imgArray.push(image.src);
    })
    //left/right buttons setup
    left.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = imgArray.length - 1;
        }
        modelImage.style.background = 'url(' + imgArray[index] + ')';
        modelImage.style.backgroundSize = "100% 100%";
    })
    right.addEventListener('click', () => {
        index++;
        if (index > imgArray.length - 1) {
            index = 0;
        }
        modelImage.style.background = 'url(' + imgArray[index] + ')';
        modelImage.style.backgroundSize = "100% 100%";
    })

})()
