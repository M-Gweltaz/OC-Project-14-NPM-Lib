# React functional DropDownMenu component

A simple component taking only 4 params as props to work

- @param {string} props.listName - The name and id attribute of the select menu, you can use it for styling.
  ex : myTitle = 'myComponentTitle'

- @param {Array.<string>} props.listItems - An array of items for the dropdown menu.
  ex : myVar = ['this', 'is', 'my', 'Array']

- @param {string} props.selectedValue - The currently selected value of the dropdown.
  ex: mySelectedVar = 'Array'

- @param {function} props.eventListener - The event listener function for the onChange event.
  ex: myEventListener = your custom event handler for this component

- @returns {JSX.Element} The rendered DropdownMenu component.
