(() => {
    //lots of things are pending in this project but the main wiring is complete and calculator is working so it passes for me.

    //get all things we'll need
    var tipPerPerson = document.getElementById("tpp"),
        amountPerPerson = document.getElementById("tapp"),
        totalAmount = document.querySelector(".bill-amt"),
        numberOfPeople = document.querySelector(".bill-share"),
        tip = document.querySelectorAll(".btn"),
        customTip = document.querySelector(".custom"),
        result = document.querySelector(".calculate"),
        clear = document.getElementById("clear"),
        value;
    //    console.log(totalAmount)
    //    console.log(tip)

    tip.forEach((button) => {
        //loop through out tip buttons and get the data-* from from each button and return the data-* string
        button.addEventListener('click', (e) => {
            e.target.style.background = "gray";
            return value = e.target.dataset.tip;
        })

    })
    //onkeyup return the .value of target
    customTip.addEventListener("keyup", (e) => {
        return value = e.target.value;
    })

    result.addEventListener('click', () => {
        //error up wiring
        if (totalAmount.value === '') {
            tipPerPerson.innerHTML = "Bill Is Empty";
        } else {
            //if number of people is not provided set it's .value to default 1
            if (numberOfPeople.value === '') {
                numberOfPeople.value = 1;
            }

            //i don't yet understand risks of using eval but its not recomended , you can use Function instead,look it up on google
            //our e.target.dataset.tip returns an string, so calculations cannot be done, eaval let's us perform calculations on a string, look it up on google
            var val = eval(value),
                totalTip = val / 100 * totalAmount.value,
                tpp = totalTip / numberOfPeople.value,
                app = totalAmount.value / numberOfPeople.value + tpp;

            tipPerPerson.innerHTML = "Tip/Person:<br/>$" + Number.parseFloat(tpp).toFixed(2);
            amountPerPerson.innerHTML = "Amount/Person:<br/>$" + Number.parseFloat(app).toFixed(2);
            console.log(app)
        }
    })
    //light/dark theame toggle wire--up
    var light = document.getElementById("h1"),
        body = document.querySelector('.calculator-body');
    light.addEventListener('click', () => {
        body.classList.toggle('light');
    })

    //reset button wire-up
    clear.addEventListener('click', () => {
        amountPerPerson.innerHTML = '';
        tipPerPerson.innerHTML = '';
        numberOfPeople.value = null;
        totalAmount.value = null;
        customTip.value = null;
        tip.forEach((button) => {
            button.style.background = 'white';
        })
    })
})()
