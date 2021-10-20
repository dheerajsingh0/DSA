let a=[2,1,8,3,6,4,5];
cycle(a)
console.log(a)
function cycle(a){
  let i=0;
  while(i<a.length){
    correct=a[i]-1;
   if(a[i]<a.length && a[i]!=a[correct]){
     swap(a,i,correct);
   }
   else{
    i++;
   }}
   if(a[i]!=i){
     console.log(i);
   }
   }
function swap(a,i,correct){
  let temp=a[i];
  a[i]=a[correct];
  a[correct]=temp;
  
}