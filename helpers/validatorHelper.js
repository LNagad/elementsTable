const validator = (value, compare, compare2) => {
    return value === compare
}
const validatorInverse = (value, num1, num2, num3, num4, num5, num6, num7, num8) => {
    const compareList = [num1, num2, num3, num4, num5, num6, num7, num8]
  

    let isValid = true
    console.log(compareList);

    compareList.forEach(element => {
        if (value !== element) {
            if (!isValid) {
                isValid = false;
            } else {
                isValid = true
            }
        } else {
            isValid = false
        }
    });

    return isValid
}

exports.validator = validator
exports.validatorInverse = validatorInverse