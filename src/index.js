
exports.min = function min(array) {
    let objIsArray = Array.isArray(array);
    if (array.length == 0 || objIsArray == false || undefined) {
        return 0;
    } else {
        return Math.min.apply( Math, array );
    }
}

exports.max = function max(array) {
    let objIsArray = Array.isArray(array);
    if (objIsArray == false || undefined || array.length == 0) {
        return 0;
    } else {
        return Math.max.apply( Math, array );
    }
}

exports.avg = function avg(array) {
    let objIsArray = Array.isArray(array);
    if (objIsArray == false || undefined || array.length == 0) {
        return 0;
    } else {
      let sum=0;
      for(let i=1;i<array.length;i++){
        sum  += array[i];
      }
      return sum / array.length;
    }
}
