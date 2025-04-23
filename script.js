function stringChop(str, size) {
  // your code here
	let arr = []
	while(str.length != 0){
		let result = str.slice(0,size);  
		arr.push(result);
		str = str.slice(size)
	} 
	return arr 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
