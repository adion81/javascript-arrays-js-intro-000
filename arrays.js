var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arr,el){
  return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr,el){
  arr = [el, ...arr]
  return arr;
}