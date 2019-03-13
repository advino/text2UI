export class Search {

  constructor() {

  }

  attach(ui, uiData) {
    //Create elements
    let searchBarDiv = document.createElement('div');
    let searchBar = document.createElement('input');
    if (uiData[0]) {
      searchBar.placeholder = uiData[0];
    } else {
      searchBar.placeholder = "Placeholder";
    }

    //Give class names
    searchBarDiv.className = 'search-bar-bg';
    searchBar.className = 'search-bar';

    //Append children
    searchBarDiv.appendChild(searchBar);
    ui.appendChild(searchBarDiv);
  }
}

export class Header {

  constructor() {

  }

  attach(ui, uiData) {
    //Create element and attach text
    let header = document.createElement('h3');
    if (uiData[0]) {
      header.innerHTML = uiData[0];
    } else {
      header.innerHTML = "Header";
    }

    //Give class name
    header.className = 'header';

    //Append child
    ui.appendChild(header);
  }
}

export class Item {

  constructor() {

  }

  attach(ui, uiData) {
    //Create elements
    let itemDiv = document.createElement('div');
    let itemImage = document.createElement('img');
    let itemHeader = document.createElement('h3');
    let itemButton = document.createElement('button');
    if (uiData[0]) {
      itemHeader.innerHTML = uiData[0];
    } else {
      itemHeader.innerHTML = "Title";
    }
    if (uiData[1]) {
      itemButton.innerHTML = uiData[1];
    } else {
      itemButton.innerHTML = "Button";
    }

    //Give class name
    itemDiv.className = 'item-bg';
    itemImage.className = 'item-img';
    itemHeader.className = 'item-header';
    itemButton.className = 'item-button';

    //Append children
    itemDiv.appendChild(itemImage);
    itemDiv.appendChild(itemHeader);
    itemDiv.appendChild(itemButton);
    ui.appendChild(itemDiv);
  }
}

export class Button {

  constructor() {

  }

  attach(ui, uiData) {

    let button = document.createElement('button');
    if (uiData[0]) {
      button.innerHTML = uiData[0];
    } else {
      button.innerHTML = "Header";
    }

    button.className = 'button';

    ui.appendChild(button);
  }
}
