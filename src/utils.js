// We consider a value to be result if it contains the equal sign
export const isResult = (output) => /=/.test(output)

export const isOperator = (val) => /^[+x/-]+$/.test(val)

export const containNumber = (val) => /\d+/.test(val)

// This is used to set a limit to the number of caracters entered at once. 
export const isOverLimit = (input, length=15) =>{
    return input.length >= length;
}

// This function returns the operation(value at the left of =) and result (value at the right of =).
const getResult = (operation) => {
    let match = operation.match(/(\S+)\s+=\s+(.*)/);
    return {operation: match[1], result: match[2]}
    }



// This returns the two values: last, which is the value after the last operator in the
// equation (if there is a result displayed last is the part after equal) and start which
// is all that precedes the last value in the equation (if there is a result displayed,
// it the part before the =).
export const getLast = (operation) => {
    const endsWithOperator = /(.*[\d.])((\+|-|x|\/)+)$/;
    const lastOperand = /(\d+e.\d+|[^+x/-]+)$/;
    let match;
    if (isResult(operation)){
      let {result:last, operation:start} = getResult(operation);
      return {last, start}
    }
    if (match = operation.match(endsWithOperator)){
      return {last: match[2], start: match[1]}
    }

    match = operation.match(lastOperand);
    if (match){
      return {last: match[0], start: operation.slice(0, match.index)}
    }

    return {last: '', start: operation}
    
  }
