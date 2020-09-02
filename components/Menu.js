// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(itemsArr) {
    // Create a div with 'menu' as its class
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Create a list element then append it to the menu.
    const list = document.createElement('ul');
    menu.appendChild(list);

    // Iterate through data and create a li for each item then append it to our list
    itemsArr.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    let menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('menu--open');
    });

    return menu;
}

// Finding our div.header. Creating a new div.menu element from the menuItems data provided
const header = document.querySelector('div.header');
const newMenu = menuMaker(menuItems);

// Appending the div.menu we created to the div.header
header.appendChild(newMenu);