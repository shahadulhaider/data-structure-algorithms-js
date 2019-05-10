const Stack = require('./Stack');

function checkBalancedparentheses(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
      stack.push(str[i]);
    }

    if (str[i] === '}' || str[i] === ')' || str[i] === ']') {
      if (stack.isEmpty()) {
        return false;
      }

      let temp = stack.pop();
      if (temp === '{' && str[i] !== '}') {
        return false;
      } else if (temp === '(' && str[i] !== ')') {
        return false;
      } else if (temp === '[' && str[i] !== ']') {
        return false;
      }
    }
  }

  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

console.log(checkBalancedparentheses('[{}]'));
console.log(checkBalancedparentheses('[{}}]'));
console.log(checkBalancedparentheses('[{}{}]'));
console.log(checkBalancedparentheses('[{{}}]'));
console.log(checkBalancedparentheses('[{(()}]'));
console.log(checkBalancedparentheses('[{}[]]'));
console.log(checkBalancedparentheses('[{}]]'));