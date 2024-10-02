if(!Array.prototype.map){
    Array.prototype.map = function(callback, thisArg){
        if(this==null)
            throw new TypeError("Array.prototype.map called on null or undefined")

        if(typeof callback!== 'function')
            throw new TypeError(callback +"is not a function")

         var o = Object(this);
         var length = o.length;
         var arr = new Array(length);

         for(var i = 0; i<arr.length; i++){
            if(k in o){
                var kvalue = o[k];
                arr[k] = callback.call(thisArg, kvalue, k, o)
            }
         }
         return arr;
    }
}


if(!Array.prototype.filter){
    Array.prototype.filter = function(callback, thisArg){
        if(this== null)
            throw new TypeError("Array.prototype.filter called on null or undefined")

        if(typeof callback !== 'function')
            throw new TypeError(callback +" is not a function")

        var o = Object(this);
        var length = o.length;
        var res = [];

        for(var k =0; k<length; k++){
              if(k in o){
                var kvalue = o[k];

                if(callback.call(thisArg, kvalue, k, o)){
                    res.push(kvalue);
                }
              }
        }
        return res;
    }
}