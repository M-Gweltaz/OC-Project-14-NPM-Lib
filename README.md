# React functional DropDownMenu component

A simple component taking only 4 params as props to work

- @param {string} props.listName - The name and id attribute of the select menu, you can use it for styling.

  - ex : myTitle = 'myComponentTitle'

- @param {Array.<string>} props.listItems - An array of items for the dropdown menu.

  - ex : myVar = ['this', 'is', 'my', 'Array']

- @param {string} props.selectedValue - The currently selected value of the dropdown.

  - ex: mySelectedVar = 'Array'

- @param {function} props.eventListener - The event listener function for the onChange event.

  - ex: myEventListener = your custom event handler for this component

- @returns {JSX.Element} The rendered DropdownMenu component.

To run it inside your project first add this library inside your own repo by using your favorite package manager and installing/adding this npm package:

- 'react-dropdownmenu-lib'

  Then you need to import the dropdownmenu component where you need it:

- import DropDownMenu from 'react-dropdownmenu-lib';

Finaly you can use it by calling it with the props your own props:

- <DropDownMenu listItems={yourListItemsVar} listName={yourListNameVar} selectedValue={yourSelectedValueVar}    eventListener={yourEventHandlingFunc}/>

Hope you enjoy it and feel free to send feedback, this is the project Git-Hub repo : https://github.com/M-Gweltaz/OC-Project-14-NPM-Lib
