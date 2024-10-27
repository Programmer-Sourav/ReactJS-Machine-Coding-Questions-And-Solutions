function pow(x,n){
    let result  = 1; 

    for(let i =0; i<n; i++){  //0,1
        result = result * x;
    }
    return result;
}

alert(pow(2,3));

//2*1 = 2  2*1 (x*n)
//2*2 = 4  2*2
//2*3 = 8  2*2*2
//2*4 = 16 2*2*2*2
//2*5 = 32 2*2*2*2*2

function powrec(x, n){
    if(n===1)
        return x;
    else 
    return x * powrec(x, n-1)
}

alert(pow(2,3))