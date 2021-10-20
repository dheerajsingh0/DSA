let a=[2,3,4,6,20,20,1,2,2];
cycle(a)
console.log(a);
function cycle(a){
let i=0;
	while(i<a.length){
		
		correct=a[i]-1;
		if(a[i]<a.length && a[i]!=a[correct]){
		swap(a,i,correct);
		}
		else{
		i++
		}



	}
	let ans=[];
	for(let j=0;j<a.length;j++){
		if(a[j]!=j+1 && !ans.includes(a[j])){

			ans.push(a[j]);

			console.log("duplicate",a[j]);
		}
	}
}
function swap(a,i,second){
	let temp=a[i]
	a[i]=a[second]
	a[second]=temp
}