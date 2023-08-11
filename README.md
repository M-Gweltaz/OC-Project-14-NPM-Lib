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

## How to Use

1. To run it inside your project first add this library inside your own repo by using your favorite package manager and installing/adding this npm package:

```bash
 npm install react-dropdownmenu-lib
```

2. Then you need to import the dropdownmenu component where you need it:

```js
import DropDownMenu from 'react-dropdownmenu-lib';
```

3. Finaly you can use it by calling it with the props your own props:

```jsx
<DropDownMenu
	listItems={yourListItemsVar}
	listName={yourListNameVar}
	selectedValue={yourSelectedValueVar}
	eventListener={yourEventHandlingFunc}
/>
```

Make sure to replace yourListItemsVar, yourListNameVar, yourSelectedValueVar, and yourEventHandlingFunc with your actual variable names and event handler.

For more information, you can visit the project's [GitHub repository](https://github.com/M-Gweltaz/OC-Project-14-NPM-Lib) and feel free to provide feedback or contribute!
