(function () {
    var cImage = document.querySelector(".image"),
        cName = document.getElementById("name"),
        cText = document.getElementById("review-text"),
        left = document.getElementById("left"),
        right = document.getElementById("right"),
        customers = [];

    // contructore for customers
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }


    function createCustomer(img, name, text) {
        var fullimage = `./image/${img}.jpg`,
            customer = new Customer(fullimage, name, text);
        customers.push(customer)
    }

    createCustomer('one', 'customer-one', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veniam. Ducimus fuga quod saepe quos dolorem inventore totam aliquam, quia doloremque, fugiat fugit cupiditate error rerum in a praesentium adipisci!');
    createCustomer('two', 'customer-two', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veniam. Ducimus fuga quod saepe quos dolorem inventore totam aliquam, quia doloremque, fugiat fugit');
    createCustomer('three', 'customer-three', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veniam.');
    createCustomer('four', 'customer-four', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veniam. Ducimus fuga quod saepe quos dolorem inventore totam aliquam.');
    //initial state 
    cImage.style.background = "url(" + customers[0].img + ") center";
    cImage.style.backgroundSize = "cover";
    cName.innerHTML = customers[0].name;
    cText.innerHTML = customers[0].text;

    //onclick ivents
    var index = 0;
    console.log();
    left.addEventListener("click", () => {
        if (index <= 0) {
            index = customers.length;
        }
        index--;
        //        console.log(index);
        //        console.log(customers[index].img)
        cImage.style.background = "url(" + customers[index].img + ") center";
        cImage.style.backgroundSize = "cover";
        cName.innerHTML = customers[index].name;
        cText.innerHTML = customers[index].text;

    })

    right.addEventListener("click", () => {
        index++;
        if (index === customers.length) {
            index = 0;
        }
        //
        //        console.log(index);
        //        console.log(customers[index].img)
        cImage.style.background = "url(" + customers[index].img + ") center";
        cImage.style.backgroundSize = "cover";
        cName.innerHTML = customers[index].name;
        cText.innerHTML = customers[index].text;
    })



})()
