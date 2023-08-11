import React from 'react';
import ReactDOM from 'react-dom/client';
import DropDownMenu from './DropDownMenu';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DropDownMenu
			listName={'test'}
			listItems={['test', 'is', 'a', 'success']}
		/>
	</React.StrictMode>
);
