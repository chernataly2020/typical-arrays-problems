
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
    if (array.length == 0 || objIsArray == false || undefined) {
        return 0;
    } else {
        return Math.max.apply( Math, array );
    }
}

exports.avg = function avg(array) {
    let objIsArray = Array.isArray(array);
    console.log(array.length);
    console.log(objIsArray);
    if (array.length == 0 || objIsArray == false || undefined) {
        console.log(0);
        return 0;
    } else {
      let sum=0;
      for(let i=1;i<array.length;i++){
        sum  += array[i];
      }
      console.log(sum);
      console.log(sum / array.length);
      return sum / array.length;
    //  return Math.max.apply( Math, array );
    }
}
