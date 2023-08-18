import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function DropDownMenu({
	listName,
	listItems,
	selectedValue,
	eventListener,
	className,
}) {
	return (
		<select
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
	listName: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
		.isRequired,
	selectedValue: PropTypes.string,
	eventListener: PropTypes.func.isRequired,
	className: PropTypes.string,
};
