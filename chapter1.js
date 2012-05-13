

	var sol = new Array(6);

	for(i = 0; i <= 10; i++) {
		for(j = 0; j <= 10; j++) {
			// 1. The product of the first two digits is 24.
			if(i*j == 24) {
				sol[1] = i;
				sol[2] = j;
				sol[3] = "";
				// 2. The fourth digit is half of the second digit.
				sol[4] = j/2;
				sol[5] = "";
				
				for(k = 0; k <= 10; k++) {
					for(l = 0; l <= 10; l++) {
						sol[3] = k;
						sol[5] = l;
						
						// 4. The sum of all the digits is 26.
						if(sol[1] + sol[2] + sol[3] + sol[4] + sol[5] == 26) {
							// 3. The sum of the last two digits is the same as the sum of the first and third digits.
							if(sol[1] + sol[3] == sol[4] + sol[5]) {
								// 5. The second digit is greater than the last digit.
								if(sol[2] > sol[5]) {
									console.log(sol);	
								}
							}
						}	
					}
				}
			}	
		}
	}