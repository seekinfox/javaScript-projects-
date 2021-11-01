var change = document.querySelector("section"),
    line = document.getElementById('quote'),
    quotes = ['Be yourself; everyone else is already taken.<br/><span>― Oscar Wilde</span>',
              "I have not failed. I've just found 10,000 ways that won't work. <br/><span>― Thomas A. Edison</span>",
             "It is never too late to be what you might have been<span>― George Eliot <br/></span>",
              "Life isn't about finding yourself. Life is about creating yourself.<br/><span>― George Bernard Shaw </span>",
              "Do what you can, with what you have, where you are.<br/><span>― Theodore Roosevelt </span>",
              "Success is not final, failure is not fatal: it is the courage to continue that counts.<br/><span>― Winston S. Churchill</span>",
              "And, when you want something, all the universe conspires in helping you to achieve it.<br/><span>― Paulo Coelho, The Alchemist</span>",
              "Do one thing every day that scares you.<br/><span>― Eleanor Roosevelt </span>",
              "What's meant to be will always find a way<br/><span>― Trisha Yearwood </span>",
              "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.<br/><span>― Maya Angelou </span>",
              "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.<br/><span>― Roy T. Bennett, The Light in the Heart </span>"
             ],
    color = ['#F0F8FF', '#FAEBD7', '#00FFFF', '#7FFFD4', '#F0FFFF', '#F5F5DC', '#DEB887', '#5F9EA0', '#FF7F50', '#6495ED'];
change.addEventListener("click", () => {
    var qIndex = parseInt(Math.random() * quotes.length);
    console.log(qIndex),
        cIndex = parseInt(Math.random() * color.length);
    line.innerHTML = quotes[qIndex];
    change.style.background = color[cIndex];
});
