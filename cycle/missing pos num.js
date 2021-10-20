// a=[1,2,0]
a=[3,4,-1,1]
findmiss(a)
console.log(a);

function findmiss(a){
	let i=0;
	while(i<a.length){
		correct=a[i]-1;
		if(a[i]>0 && a[i]<=a.length && a[i]!=a[correct]){
			swap(a,i,correct)
		}
		else{
			i++;
		}
	}
	for(let j=0;j<a.length;j++){
		if(a[j]!=j+1){
				console.log(j+1);
		}
	}


}
function swap(arr,i,correct){
	let temp=arr[i];
	arr[i]=a[correct];
	arr[correct]=temp
}