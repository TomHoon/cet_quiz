let param = [11, 7];
let result = 13;

const func = (param) => {
	let max1 = param.sort((a,b) => a-b)[1]
	let start1 = max1 - param[0];
	let result1 = [];
	for(let i = start1 + 1; i <= max1; i ++){
		result1.push(i);
	}

	let start2 = param.reduce((acc, cur) => acc + cur) - 1;
	let result2 = []
	for (let j = start2; j > max1; j --) {
		result2.push(j);
	}
	return result1.length + result2.length;
}

console.log(func(param));