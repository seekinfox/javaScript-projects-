(function () {
    alert("Pass the message  project");
    var newMessage = document.createElement("p");
    var form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var input = document.getElementById('input'),
            warning = document.querySelector('.warning');

        if (input.value === '') {
            warning.classList.add('show');
            setTimeout(function () {
                warning.classList.remove('show');
            }, 2000);
        } else {
            var tag = document.createElement("p"),
                text = document.createTextNode(input.value),
                section = document.getElementById("message-box");
            tag.appendChild(text);
            section.appendChild(tag);
            input.value = '';
        }


    });

})()
