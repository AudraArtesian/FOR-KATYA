import styled from 'styled-components';
import { KalconePizza, Basket } from '../images';

export const StyledKalconePizza = styled.div`
	background-image: url(${KalconePizza});
	width: 436px;
	height: 378px;
`;
export const StyledZagalovok = styled.div`
	font-size: 36px;
	color: #820300;
	font-weight: bold;
	margin-left: 55%;
	width: 177px;
	height: 53px;
`;

export const StyledText1 = styled.div`
	font-size: 23px;
	color: #000000;
	flex-direction: column;
	text-align: right;

	margin-left: 53%;
	width: 187px;
	height: 143px;
`;
export const StyledBasket = styled.img`
	width: 75px;
	height: 75px;
	background-image: url(${Basket});
`;

export const StyledText2 = styled.div`
	font-size: 15px;
	color: #000000;
	margin-top: 20%;
	margin-left: 30%;
`;

export const StyledText3 = styled.div`
	font-size: 15px;
	color: #000000;
	font-weight: bold;
	margin-left: 30%;
`;
