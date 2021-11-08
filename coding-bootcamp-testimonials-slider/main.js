(() => {
    // declaring domElements into variables 
    var cImage = document.getElementById('image'),
        imgBox = document.querySelector(".image-hero"),
        cText = document.querySelector('#text'),
        cName = document.querySelector('#name'),
        cRole = document.querySelector('#role'),
        left = document.querySelector('#left'),
        right = document.querySelector('#right'),
        file = []; //empty array for storing objects

    //object constuctore 
    function Review(img, text, name, role) {
        this.img = img
        this.text = text
        this.name = name
        this.role = role
    }
    //set intial state img.. could be done in html as well
    cImage.src = './images/one.jpg'

    //function for creating new review obj and storing the review object into the file array
    function createReviwe(img, text, name, role) {
        var customer = new Review(img, text, name, role);
        file.push(customer);
    }

    createReviwe('two', '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”', 'Tanya Sinclair', 'UX Engineer')
    createReviwe('one', '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”', 'John Tarkpor', 'Junior Front-end Developer')
    //    console.log(file.length)

    var index = 0;

    left.addEventListener("click", () => {
        index--;
        if (index < 0) {
            index = file.length - 1;
        }
        cImage.src = './images/' + file[index].img + '.jpg';
        cText.innerHTML = file[index].text;
        cText.classList.add("animation-fade");
        imgBox.classList.add("image-animation")
        //remove animation class after .5s
        setTimeout(() => {
            cText.classList.remove("animation-fade");
            imgBox.classList.remove("image-animation");
        }, 500)
        cName.innerHTML = file[index].name;
        cRole.innerHTML = file[index].role;
    })
    right.addEventListener("click", () => {
        index++;
        if (index > file.length - 1) {
            index = 0;
        }
        cImage.src = './images/' + file[index].img + '.jpg';
        cText.innerHTML = file[index].text;
        cName.innerHTML = file[index].name;
        cRole.innerHTML = file[index].role;
        cText.classList.add("animation-fade");
        imgBox.classList.add("image-animation")
        setTimeout(() => {
            cText.classList.remove("animation-fade");
            imgBox.classList.remove("image-animation");
        }, 500)
    })

})()
