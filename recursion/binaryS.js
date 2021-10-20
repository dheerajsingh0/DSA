a=[1,3,2,4,5,66,6]
bs(a,4)

function bs(a,s){
    m=a.length/2;
    if(s==m){
        console.log("found",s);
        
    }
    if(s<m){
        for(i=0;i<m;i++){
            if(s==a[i]){
                console("mil gaya");
            }
        }
    }
    else{
        for(i=m;i<a.length;i++){
            if(s=a[i]){
                console.log("ho gaya")
                
            }
        }
    }

}