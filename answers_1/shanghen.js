//1、给定一个数，从以下数组中找出离他最近的10个数。 
// 看来我还是太嫩了

var arr = [],
	i = 5000;

while(i--) {
	arr.push(Math.ceil(Math.random()*1000000));
}

function looping(arr, num, len) {
	var i = 0,
		arrLen = arr.length,
		diffs = [],
		temp = {},
		result = [],
		diff;

	console.time("b");
	for(; i < arrLen; i++) {
		diff = Math.abs(arr[i]-num);
		temp[diff] ? temp[diff].push(arr[i]) : (temp[diff] = [arr[i]]);
		diffs.push(diff);
	}
	console.timeEnd("b");

	console.time("c");
	i = 0;
	for (; i < len; i++) {
		var min = Math.min.apply(null, diffs),
			minLen;

		result = result.concat(temp[min]);
		if (result.length < len) {
			minLen = temp[min].length;
			while(minLen--) {
				diffs.splice(diffs.indexOf(min), 1);
			}
		} else {
			console.log(result);
			console.timeEnd("c");
			return result;
		}
	}

	console.log(result);
	return result;
}

console.time("a");
looping(arr, 50000, 10);
console.timeEnd("a");