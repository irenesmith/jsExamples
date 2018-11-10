// Constant references to the list and text box
// Although the values can't change, the value of
// the objects' properties can.
const itemInput = document.getElementById("newItem");
const listCount = document.getElementById("listCount");
const myList = document.getElementById("myList");

// This is the list of strings
let listItems = [];

window.onload = function() {
  // Load the saved list, if there is one.
  listItems = loadList();

  // Display the existing list items.
  if(listItems.length > 0) {
    listCount.innerText = listItems.length.toString() + " items";
    fillMyList();
  }

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
    listCount.innerText = listItems.length.toString() + " items";
    saveList();

    // Clear the text box and set focus to it
    itemInput.value = '';
    itemInput.focus();
  }

}

function saveList() {
  if (!storageAvailable('localStorage')) {
    return;
  } else {
    if (listItems.length > 0) {
      window.localStorage.setItem('sampleList', JSON.stringify(listItems));
    }
  }
}

function loadList() {
  if (storageAvailable('localStorage')) {
    theList = JSON.parse(window.localStorage.getItem('sampleList'));
    return theList === null ? [] : theList;
  }
}

function fillMyList() {
  // Remove any existing items.
  while(myList.hasChildNodes()) {
    myList.removeChild(myList.firstChild);
  }

  for(let i = 0; i < listItems.length; i++) {
    insertItem(listItems[i]);
  }
}

function insertItem(newItem) {
    // Create a new list item
    let newListItem = document.createElement("li");
    newListItem.appendChild(document.createTextNode(newItem));

    // Append it to myList
    myList.appendChild(newListItem);
}

function storageAvailable(type) {
  try {
      let storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          storage.length !== 0;
  }
}
