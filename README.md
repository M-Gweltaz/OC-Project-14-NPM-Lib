# React functional DropDownMenu component

A simple component taking up to 5 params as props to work

- @param {(string|object)} props.listName - The name and id attribute of the select menu.

  - ex : myTitle = 'myComponentTitle' || {name: myComponentTitle, ...}

- @param {Array.<string>} props.listItems - An array of items for the dropdown menu.

  - ex : myVar = ['this', 'is', 'my', 'Array']

- @param {string} props.selectedValue - The currently selected value of the dropdown.

  - ex: mySelectedVar = 'Array'

- @param {function} props.eventListener - The event listener function for the onChange event.

  - ex: myEventListener = your custom event handler for this component

- @param {string} props.className - Add the string passed as the className of the select component, use it for styling.
  This is optional.

  - ex: myClassNameVar = 'myCustomClassName'

- @returns {JSX.Element} The rendered DropdownMenu component.

## How to Use

First you need to have Node installed version 18.17.0 or higher.
This component use react library under the hood.

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
	listItems={department}
	listName='department'
	selectedValue={inputValues.department}
	eventListener={handleChange}
	className='createEmployeesInput'
/>
```

Make sure to replace yourListItemsVar, yourListNameVar, yourSelectedValueVar, and yourEventHandlingFunc with your actual variable names and event handler.
You can add an optional className to the component by adding the className prop for styling purpose.

For more information, you can visit the project's [GitHub repository](https://github.com/M-Gweltaz/OC-Project-14-NPM-Lib) and feel free to provide feedback or contribute!

## Keywords

- JavaScript
- React
- Simple DropDown Component
