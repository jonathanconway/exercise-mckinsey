
var computer = {};

var input = document.getElementsByTagName('INPUT')[0],
	button = document.getElementsByTagName('BUTTON')[0],
	output = document.getElementsByTagName('PRE')[0];

function log (text) {
	output.innerHTML += text + '\n';
}

computer = {
	threes: [],

	calculateThrees: function () {
		for (var i = 1; i <= 1000; i++) {
			if (i % 3 === 0) {
				this.threes.push(i);
			}
		}
	},

	numeroUno: {},

	get: function () {
		return this.numeroUno;
	},

	set: function (value) {
		value = parseInt(value, 10);
		try {
			if (value < 0) {
				throw 'Argument is of an incorrect type or value.';
				return;
			}
			var sum = 0;
			for (var i = 0; i <= value; i++) {
				sum += i;
			}
			this.numeroUno = sum;
		}
		catch (ex) {
			log(ex);
			throw ex;
		}
	},

	buttonFunction: function () {
		this.set(input.value);
		log(this.numeroUno);
	}
};

button.addEventListener('click', function () {
	computer.buttonFunction();
});