function threeSum(arr, target) {
// write your code here

	arr.sort((a,b) =>{
		return a-b;
	})

	let ans = Number.MAX_VALUE;

	for(let i = 0;i<arr.length-2;i++){
		let j = i+1;
		let k = arr.length-1;
		while(j<k){
			let sum = arr[i]+arr[j]+arr[k];
			if(sum == target){
				return target;
			}
			if(sum<target){
				if(ans == Number.MAX_VALUE)
					ans = sum;
				if(Math.abs(ans-target)>Math.abs(sum-target))
					ans = sum;
				j++;
			}
			else{
				if(ans == Number.MAX_VALUE)
					ans = sum;
				if(Math.abs(ans-target)>Math.abs(sum-target))
					ans = sum;
				k--;
			}
		}
	}
  return ans;
}

module.exports = threeSum;
