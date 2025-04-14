function sample() {
  console.log(arguments)

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
}

sample(1, 2, 3, 4, 5)



function earnings(wage, hours) {
  wage = wage || 8590
  hours = hours || 52

  return wage * hours;
}

console.log(earnings(8590, 52)) // 446680
console.log(earnings(8590)) // 446680
console.log(earnings()) // 446680
console.log(earnings(10000, 40)) // 400000


function multiply(a, b) {
  let result = 1;
  for (let i = a; i <= b; i++) {
    result *= i;
  }

  return result;
}


function callThreeTimes(callback) {
  for(let i = 0; i < 3; i++) {
    callback(i)
  }
}

function printNumber(num) {
  console.log(num)
}

callThreeTimes(printNumber)

