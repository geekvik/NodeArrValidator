"use srict";

(function() {

  module.exports = function valArr(arr, len) {
    var valid = false;
    valid = Array.isArray(arr);
    if (typeof len === 'number') {
      valid = arr.length === len;
    } else if(valid) {
      valid = arr.length > 0;
    }
    return valid;
  }

}());
