export function addToArray(arr, item) {
  return arr.concat(item).sort();
}

export function firstInArrayNot(arr, not) {
  const item = arr[0] === not ? arr[1] : arr[0];
  return item || '';
}

export function removeFromArray(arr, item) {
  return arr.filter(anItem => anItem !== item);
}
