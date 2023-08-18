import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

/**
 * Represents a simple DropdownMenu
 * React functional component using a plain html select tag under the hood
 *
 * @param {object} props - The props object containing the component's properties.
 * @param {string} props.listName - The name and id attribute of the select menu.
 * @param {Array.<string>} props.listItems - An array of items for the dropdown menu.
 * @param {string} props.selectedValue - The currently selected value of the dropdown.
 * @param {function} props.eventListener - The event listener function for the onChange event.
 * @param {className} props.className - Add the css class to the component for styling.
 * @param {function|object} [props.ref] - The ref for the select element if you are using react-hook-form library for validation, optional.
 * @returns {JSX.Element} The rendered DropdownMenu component.
 */

export default function DropDownMenu({
	listName,
	listItems,
	selectedValue,
	eventListener,
	className,
	ref,
}) {
	return (
		<select
			ref={ref}
			className={className}
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
	selectedValue: PropTypes.string,
	eventListener: PropTypes.func.isRequired,
	className: PropTypes.string,
	ref: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
};
