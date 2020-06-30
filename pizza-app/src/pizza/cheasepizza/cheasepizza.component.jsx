import React, { memo } from 'react';
import {
	StyledCheasePizza,
	StyledText1,
	StyledText2,
	StyledText3,
	StyledZagalovok,
	StyledBasket,
} from './cheasepizza.styles';

const CheasePizzaComponent = () => {
	return (
		<StyledCheasePizza>
			<StyledZagalovok>
				<div>4 сыра</div>
			</StyledZagalovok>
			<StyledText1>
				<div> Увеличенная порция моцареллы, смесь сыров чеддер и пармезан, сыр блю чиз, сливочный соус</div>
				<StyledBasket />
			</StyledText1>

			<StyledText2>
				<div> БЖУ - 9/10/24 </div>
				<div> кКал - </div>
			</StyledText2>
			<StyledText3>
				<div> ЦЕНА ₽ </div>
			</StyledText3>
		</StyledCheasePizza>
	);
};
export const CheasePizza = memo(CheasePizzaComponent);
