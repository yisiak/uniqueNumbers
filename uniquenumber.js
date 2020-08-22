const arr = [1, 2, 3, 4, 7, 5, 3, 2, 1, 4, 7,9];

function uniqueNumber(arr) {
  var a = arr.length;
    var output = '';
    
            for (let i=0; i < a; i++) {
        
          for (var j=0; j < a; j++)
          
            if (i!= j && arr[i] == arr[j]) {
              output = arr[i];
              
              break;
            
            }
            
            if (j == a)
            return arr[i];
        }
        return output;
     }
      console.log(uniqueNumber(arr));
      