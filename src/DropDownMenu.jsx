import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const DropDownMenu = React.forwardRef(function DropDownMenu(
	{ listName, listItems, selectedValue, eventListener, className },
	ref
) {
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
});

DropDownMenu.displayName = 'DropDownMenu';

DropDownMenu.propTypes = {
	listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	listName: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
		.isRequired,
	selectedValue: PropTypes.string,
	eventListener: PropTypes.func.isRequired,
	className: PropTypes.string,
};

export default DropDownMenu;
