var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length;
}

function createListElements() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener("click", function() {
        //creates a boolearn that toggles the done class on li:
        // if the list item is clicked this toggles the done class
        var finsihed = this.classList.toggle("done");
        //creates a remove button for the finished item:
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        // if the list item is clicked (li add event listener) then
        // finished is true
        }
    }
}