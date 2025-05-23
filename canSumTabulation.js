const canSum = (targetSum, numbers) => {
	const table = Array(targetSum + 1).fill(false);

	//base case
	table[0] = true;

	for (let i = 0; i <= targetSum; i++) {
		if (table[i] === true) {
			for (let num of numbers) {
				if (num + i <= targetSum) table[i + num] = true;
			}
		}
	}
	return table[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
