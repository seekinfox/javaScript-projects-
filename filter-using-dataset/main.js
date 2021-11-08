(() => {
    var all = document.getElementById("all"),
        card = document.querySelectorAll(".card");


    var milk = document.getElementById("m")
    milk.addEventListener('click', (e) => {
        console.log(e.target.dataset.filter)
        var filter = e.target.dataset.filter
        card.forEach((item) => {
            if (item.classList.contains(filter)) {
                console.log(item)
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })
    var vegetable = document.getElementById("v")
    vegetable.addEventListener('click', (e) => {
        console.log(e.target.dataset.filter)
        var filter = e.target.dataset.filter
        card.forEach((item) => {
            if (item.classList.contains(filter)) {
                console.log(item)
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        })
    })

    all.addEventListener('click', (e) => {
        console.log(e.target.dataset.filter)
        var filter = e.target.dataset.filter
        card.forEach((item) => {
            item.style.display = "block";
        })
    })
})()
