import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

/**
 * Represents a simple DropdownMenu
 * React functional component using a plain html select tag under the hood
 *
 * @param {object} props - The props object containing the component's properties.
 * @param {string} props.listName - The name and id attribute of the select menu, you can use it for styling.
 * @param {Array.<string>} props.listItems - An array of items for the dropdown menu.
 * @param {string} props.selectedValue - The currently selected value of the dropdown.
 * @param {function} props.eventListener - The event listener function for the onChange event.
 * @returns {JSX.Element} The rendered DropdownMenu component.
 */

export default function DropDownMenu({
	listName,
	listItems,
	selectedValue,
	eventListener,
}) {
	return (
		<select
			name={listName}
			id={listName}
			value={selectedValue}
			onChange={eventListener}
		>
			{listItems.map((item) => (
				<option key={uuidv4()} value={item}>
					{item}
				</option>
			))}
		</select>
	);
}

DropDownMenu.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	listName: PropTypes.string.isRequired,
	selectedValue: PropTypes.string.isRequired,
	eventListener: PropTypes.func.isRequired,
};
