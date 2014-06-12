function testComputer() {
	
	(function () {
		console.log('calculateThrees_onlyContainsValuesDivisibleBy3:');
		try {
			// Act
			computer.calculateThrees();

			// Assert
			for (var i = 0; i < computer.threes.length; i++) {
				console.log()
				if ((computer.threes[i] / 3).toString().indexOf('.') > -1) {
					throw 'Array contains value not divisible by 3: ' + computer.threes[i];
				}
			}
			console.log('	Succeeded. :)');
		}
		catch (ex) {
			console.log('	Failed -', ex + '.');
		}
		console.log('	Done.');
	}());
	
	(function () {
		console.log('set_setsNumeroUnoToSumOfAllNumbersBeforeAndIncludingArgumentProvided:');
		try {
			computer.numeroUno = 0;

			// Act
			computer.set(5);

			// Assert
			if (computer.numeroUno === 15) {
				console.log('	Succeeded. :)');
			}
			else {
				throw 'numeroUno does not contain the sum of all numbers up to and including the argument: 5';
			}
		}
		catch (ex) {
			console.log('	Failed -', ex + '.');
		}
		console.log('	Done.');
	}());
	
	(function () {
		console.log('set_withNegativeArgument_doesNotSetAndThrowsException:');
		try {
			computer.numeroUno = 0;

			// Act
			try {
				computer.set(-1);
			}
			catch (ex) {
				// Assert
				if (ex === 'Argument is of an incorrect type or value.') {
					if (computer.numeroUno === 0) {
						console.log('	Succeeded. :)');
						return;
					} else {
						throw 'Did not stop when negative argument was passed.';
					}
				}
				else {
					throw ex;
				}
			}
			throw 'Did not stop when negative argument was passed.';
		}
		catch (ex) {
			console.log('	Failed -', ex + '.');
		}
		console.log('	Done.');
	}());
}