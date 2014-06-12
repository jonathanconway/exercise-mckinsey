function testCountSubsequences() {
	
	//   A visual representation of the occurrances of the indexes of the letters of 'tat'
	//   within the larger string, 'the cat sat on the mat'.

	//   t  h  e     c  a  t     s  a  t     o  n     t  h  e     m  a  t  
	//                                                1              2  3 
	//                                 1                             2  3 
	//                     1                                         2  3 
	//   1                                                           2  3 
	//                     1        2                                   3 
	//   1                          2                                   3 
	//   1              2                                               3 
	//                     1        2                 3                   
	//   1                          2                 3                   
	//   2              2                             3                   
	//                     1        2  3                                  
	//   1                          2  3                                  
	//   1              2              3                                  
	//   1              2  3                                              

	(function () {
		console.log('countSubsequences_correctlyCalculatesMultipleSubsequences:');
		try {
			// Act
			var result = countSubsequences('the cat sat on the mat', 'tat');
			
			// Assert
			if (result === 14) {
				console.log('	Succeeded. :)');
			}
			else {
				throw 'Incorrect result. Expected: 13. Actual: ' + result;
			}
		}
		catch (ex) {
			console.log('	Failed -', ex + '.');
		}
		console.log('	Done.');
	}());

	//   A visual representation of the occurrances of the indexes of the letters of 'the'
	//   within the larger string, 'the cat sat on the mat'.
	
	//   t  h  e     c  a  t     s  a  t     o  n     t  h  e     m  a  t  
	//                                                1  2  3            
	//                                 1                 2  3            
	//                     1                             2  3            
	//   1                                               2  3            
	//   1  2                                               3            
	//   1  2  3                                                         

	(function () {
		console.log('countSubsequences_correctlyCalculatesMultipleSubsequences2:');
		try {
			// Act
			var result = countSubsequences('the cat sat on the mat', 'the');
			
			// Assert
			if (result === 6) {
				console.log('	Succeeded. :)');
			}
			else {
				throw 'Incorrect result. Expected: 13. Actual: ' + result;
			}
		}
		catch (ex) {
			console.log('	Failed -', ex + '.');
		}
		console.log('	Done.');
	}());

}