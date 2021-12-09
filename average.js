
function average(numbers) {
  let filtered = numbers.filter(function (value) {
    return !Number.isNaN(value);
  });
  if(filtered.length == 0)
    return NaN;
  else
    return filtered.reduce((p, c)=> p + c, 0) / filtered.length;
}

module.exports = {average};
