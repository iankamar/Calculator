const LightTheme = {
	bgContainer: '#e4e5f1',
	display: {
		bg: '#FFF',
		color: '#000',
		prevColor: '#4C8BF5',
	},
	bgOperator: '#4C8BF5',
	bgNumber: '#fdfdfd',
	bgOtherButtons: '#fdfdfd',
	fontColor: '#000',
	buttonGeneralStyles: {
		borderColor: '#eaeaea',
		fontColor: '#000',
		hover: {
			bg:'linear-gradient(0deg, rgba(255,240,223,1) 0%, rgba(255,216,117,1) 50%, rgba(255,240,223,1) 100%)'
		}	
	},
	equalsButton: {
		fontColor: '#000',
		bg: '#4C8BF5'
	},
	history: {
		bg: '#f5f5f5',
		fontColor: '#000',
		clearBtn: '#4C8BF5',
		hover: {
			item: '#dbdbdb',
			clear: '#3488a6'
		}
	}
};


const DarkTheme = {
	bgContainer: '#2d2d2d',
	display: {
		bg: '#071415',
		color: '#fff',
		prevColor: '#4C8BF5',
	},
	bgOperator: '#4C8BF5',
	bgNumber: '#08151a',
	bgOtherButtons: '#071415',
	fontColor: '#FFF',
	buttonGeneralStyles: {
		borderColor: '#040d0f',
		fontColor: '#FFF',
		hover: {
			bg:'linear-gradient(0deg, rgba(26,68,84,1) 0%, rgba(14,37,45,1) 50%, rgba(26,68,84,1) 100%)'
		}
	},
	equalsButton: {
		fontColor: '#fff',
		bg: '#4C8BF5'
	},	
	history: {
		bg: '#071415',
		fontColor: '#FFF',
		clearBtn: '#4C8BF5',
		hover: {
			item: '#063a52',
			clear: '#646d99'
		}
	}
};

const Themes = {
	light: LightTheme,
	dark: DarkTheme
};

export default Themes;
