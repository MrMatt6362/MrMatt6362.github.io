// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submitButton = document.getElementById("submit-button");

submitButton.onclick = function() {

    const elmnt = document.getElementById("contact-page");
    /*elmnt.remove();*/

    
    
    const paragraph = document.createElement("p");
    const textnode = document.createTextNode("Thank you for your message");
    paragraph.appendChild(textnode);
    
    paragraph.classList.add("replacementText");

    elmnt.replaceWith(paragraph);
}