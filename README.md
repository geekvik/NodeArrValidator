# val-arr
A simple tool to validate an array.
It accpets two params (first is required and the second is optional).
If the first param is an array it would return true.
The second param is to validate the length, if not passed would validate against at least one element of the array.

Below are some use cases

valArr([]) // false

valArr([], 0) // true

valArr([1]) // true

valArr({}) // false

valArr() // false

valArr(null) // false

valArr(undefined) // false

valArr(NaN) // false

valArr('') // false

valArr('fhdhfjfg') // false

valArr(true) // false
