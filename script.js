const body = document.querySelector('body');
const container = document.querySelector('.container');
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const result = document.querySelector('.result-text');
const mainresult = document.querySelector('.result');
const checkbox1 = document.querySelector('.check-rgb');
const checkbox2 = document.querySelector('.check-hsl');
const checkbox3 = document.querySelector('.check-hex');
const checkbox1Text = document.querySelector('.rgb-span');
const checkbox2Text = document.querySelector('.hsl-span');
const checkbox3Text = document.querySelector('.hex-span');
const rPercentage = document.querySelector('.r-percentage');
const gPercentage = document.querySelector('.g-percentage');
const bPercentage = document.querySelector('.b-percentage');
const teller = document.querySelector('.teller');
const copyIcon = document.querySelector('.copy-img');
const setBackgroundcolorInput = document.querySelector('.set-background-color-input');
const childcontainer = document.querySelector('.result');





// default values
let r = 234;
let g = 230;
let b = 242;
rPercentage.innerHTML = `${Math.floor((234/255)*100)}%`
gPercentage.innerHTML = `${Math.floor((230/255)*100)}`
bPercentage.innerHTML = `${Math.floor((242/255)*100)}%`

// chekcing checkboxes availabilty

if (checkbox2.disabled) {
	checkbox2Text.style.opacity = '0.5';
	checkbox2Text.style.cursor = 'not-allowed';
	checkbox2.style.cursor = 'not-allowed';
} else {
	checkbox2Text.style.opacity = '1';
}

if (checkbox1.disabled) {
	checkbox1Text.style.opacity = '0.5';
	checkbox1Text.style.cursor = 'not-allowed';
	checkbox1.style.cursor = 'not-allowed';
} else {
	checkbox3Text.style.opacity = '1';
}

if (checkbox3.disabled) {
	checkbox3Text.style.opacity = '0.5';
	checkbox3Text.style.cursor = 'not-allowed';
	checkbox3.style.cursor = 'not-allowed';
} else {
	checkbox3Text.style.opacity = '1';
}


// main function

container1.addEventListener('mousemove', event => {
	red.style.width = `${event.offsetX}px`
	if (innerWidth>420) {
		r = event.offsetX;
	} else {
		r = ((event.offsetX)*(255/200)).toFixed(0);
	}
	if (checkbox1.checked){
		result.innerHTML = `rgb(${r},${g},${b})`;

	} else {
		result.innerHTML = `$${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	result.style.color = `rgb(${255-r},${255-g},${255-b})`;
	childcontainer.style.background = `rgb(${r},${g},${b})`;
	rPercentage.innerHTML = `${(r/2.55).toFixed(1)}%`;
})
container2.addEventListener('mousemove', event => {
	green.style.width = `${event.offsetX}px`
	if (innerWidth>420) {
		g = event.offsetX;
	} else {
		g = ((event.offsetX)*(255/200)).toFixed(0);
	}
	if (checkbox1.checked){
		result.innerHTML = `rgb(${r},${g},${b})`;

	} else {
		result.innerHTML = `$${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	result.style.color = `rgb(${255-r},${255-g},${255-b})`;
	childcontainer.style.background = `rgb(${r},${g},${b})`;
	gPercentage.innerHTML = `${(g/2.55).toFixed(1)}%`;
})
container3.addEventListener('mousemove', event => {
	blue.style.width = `${event.offsetX}px`
	if (innerWidth>420) {
		b = event.offsetX;
	} else {
		b = ((event.offsetX)*(255/200)).toFixed(0);
	}
	if (checkbox1.checked){
		result.innerHTML = `rgb(${r},${g},${b})`;

	} else {
		result.innerHTML = `$${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	result.style.color = `rgb(${255-r},${255-g},${255-b})`;
	childcontainer.style.background = `rgb(${r},${g},${b})`;
	bPercentage.innerHTML = `${(b/2.55).toFixed(1)}%`;
})


// checking checkboxes
checkbox1.addEventListener('click', event => {
	if (checkbox1.checked){
		if (checkbox2.checked || checkbox3.checked) {
			checkbox2.checked = false;
			checkbox3.checked = false;
		}
	}
	result.innerHTML = `rgb(${r},${g},${b})`;
})
checkbox2.addEventListener('click', event => {
	if (checkbox2.checked){
		if (checkbox1.checked || checkbox3.checked) {
			checkbox1.checked = false;
			checkbox3.checked = false;
		}
	}
})
checkbox3.addEventListener('click', event => {
	if (checkbox3.checked){
		if (checkbox2.checked || checkbox1.checked) {
			checkbox2.checked = false;
			checkbox1.checked = false;
		}
	}
	result.innerHTML = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
})

// copy
copyIcon.addEventListener('click',event => {
	navigator.clipboard.writeText(result.innerHTML)
	teller.innerHTML = `${result.innerHTML} Copied to clipboard`;
	if (setBackgroundcolorInput.checked == false){
		teller.style.color = `rgb(${r},${g},${b})`;
	} else {
		teller.style.color = `rgb(${255-r},${255-g},${255-b})`;
	}
})



// set colors
setBackgroundcolorInput.addEventListener('click', event => {
	if (setBackgroundcolorInput.checked) {
		body.style.background = `rgb(${r},${g},${b})`;
		teller.style.color = `rgb(${255-r},${255-g},${255-b})`;
	} else {
		body.style.background = `white`;
		teller.style.color = 'rgb(70,70,70)';
	}
})



// functions
function toHex(number) {
	str = '';
	while (number >= 16) {
		p = number%16;
		number = parseInt(number/16)
		if (p<=9){
			str = `${p}`+str
		} else if (9<=p<16) {
			switch (p) {
			case 10: 
				str = 'a'+str;
				break
			case 11: 
				str = 'b'+str;
				break
			case 12: 
				str = 'c'+str;
				break
			case 13: 
				str = 'd'+str;
				break
			case 14:
				str = 'e'+str;
				break
			case 15:
				str = 'f'+str;
				break
			default:
				str = '0'+str;
			}
		}
	} 
	if(number < 16) {
		if (number<=9){
			str = `${number}`+str
		} else if (9<number<16) {
			switch (number) {
			case 10: 
				str = 'a'+str;
				break
			case 11: 
				str = 'b'+str;
				break
			case 12: 
				str = 'c'+str;
				break
			case 13: 
				str = 'd'+str;
				break
			case 14:
				str = 'e'+str;
				break
			case 15:
				str = 'f'+str;
				break
			default:
				str = '0'+str;
			}
		}
	}


	if (str.length == 1) {
		return '0'+str
	} else {
		return str
	}
}
