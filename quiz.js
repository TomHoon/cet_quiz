const func1 = (left, right) => {
	let arr = [];
	while(left <= right) {
		arr.push(left);
		left ++;
	}

	return arr.reduce((acc, cur) => {
		let temp = [];
		for (let i = cur; i >= 1; i --) {
			if(cur % i == 0) {
				temp.push(i);
			}
		}

		if(temp.length % 2 == 0) {
			return acc + cur;
		}
		if(temp.length % 2 != 0) {
			return acc - cur;
		}
	}, 0);
}

console.log(func1(24, 27))