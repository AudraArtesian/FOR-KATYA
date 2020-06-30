import React, { memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledAppContainer } from './app.styles';
import { Menu } from './main_menu/main_menu.component';

export const App = () => {
	return (
		<Router>
			<StyledAppContainer>
				<Menu />
			</StyledAppContainer>
		</Router>
	);
};

export default memo(App);
