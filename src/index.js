
exports.min = function min (array) {
    let objIsArray = Array.isarray(array);
    if (array.length == 0 || objIsArray == false) {
        return 0;
    }
    else {
        return Math.min(array);
    }
}

exports.max = function max (array) {
    if (array.length == 0 || objIsArray == false) {
        return 0;
    }
    else {    
      return Math.max(array);
    }
}

exports.avg = function avg (array) {
  if (array.length == 0 || objIsArray == false) {
        return 0;
    }
    else {
      let sum=0;
      for(int i=1;i<array.length;i++){
        sum  += array[i];
        }
      return sum / array.length;
    }
}
