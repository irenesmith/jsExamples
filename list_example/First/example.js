// Constant references to the list and text box
// Although the values can't change, the value of
// the objects' properties can.
const itemInput = document.getElementById("newItem");
const myList = document.getElementById("myList");

// This is the list of strings
let listItems = [];

window.onload = function() {
  // Set up the event listener for the
  // text input to handle the <Enter> key.
  itemInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("addItem").click();
    }
  });
};

function addItemClick() {
  if(itemInput.value.length > 0) {
    // Add new item to listBox and array.
    let newItem = itemInput.value;
    insertItem(newItem);
    listItems.push(newItem);

    // Clear the text box and set focus to it
    itemInput.value = '';
    itemInput.focus();
  }

}

function insertItem(newItem) {
    // Create a new list item
    let newListItem = document.createElement("li");
    newListItem.appendChild(document.createTextNode(newItem));

    // Append it to myList
    myList.appendChild(newListItem);
}
