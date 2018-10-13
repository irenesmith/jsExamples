var listItems;
var inputNewItem;
var ulList;

window.onload = function() {
  // Load the saved list, if there is one.
  listItems = loadList();

  inputNewItem = document.getElementById("newItem");
  ulList = document.getElementById("myList");

  // Display the existing list items.
  if(listItems.length > 0) {
    fillListBox();
  }
};

function addItemClick() {
  if(inputNewItem.value.length > 0) {
    // Add new item to listBox and array.
    let newItem = inputNewItem.value;
    insertItem(newItem);
    listItems.push(newItem);
    saveList();

    // Clear the text box and set focus to it
    inputNewItem.value = '';
    inputNewItem.focus();
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
  if (!storageAvailable('localStorage')) {
    return;
  } else {
    theList = JSON.parse(window.localStorage.getItem('sampleList'));
    return theList === null ? [] : theList;
  }
}

function fillListBox() {
  // Remove any existing items.
  while(ulList.hasChildNodes()) {
    ulList.removeChild(ulList.firstChild);
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
    ulList.appendChild(newListItem);
}

function storageAvailable(type) {
  try {
      var storage = window[type],
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
