/**
 * @Method: Checks Turkish Identification Number is true or false
 * @Param {string}
 * @Return {boolean}
 */

export function isTCKimlik(TurkishID: number): boolean {
  // Convert to string for for loops etc.
  const StringifiedTurkishID = TurkishID.toString();

  // Check For Start With Zero because Turkish Identification Number cant start with zero
  const checkIfStartWithZero = 0 !== Number(StringifiedTurkishID.substr(0, 1));

  // Check For NumberCount of Turkish Identification Number. Count Must Be 11
  const checkCountEvelen = /^[0-9]{11}$/.test(StringifiedTurkishID);

  let totalSum: number = 0;
  let totalPartialSum1: number = 0;
  let totalPartialSum2: number = 0;

  for (let i = 0; i < 10; i++) {
    totalSum += Number(StringifiedTurkishID.substr(i, 1));
  }

  // Check if mod(10) gives 11th number of Turkish Identification Number
  const checkModTenForEleven = totalSum % 10 === Number(StringifiedTurkishID.substr(10, 1));

  for (let i = 0; i < 10; i += 2) {
    totalPartialSum1 += Number(StringifiedTurkishID.substr(i, 1));
  }

  for (let i = 1; i < 10; i += 2) {
    totalPartialSum2 += Number(StringifiedTurkishID.substr(i, 1));
  }

  // Check if mod(10) of these two variables math gives 10th number of Turkish Identification Number
  const checkModTenForTen =
    (totalPartialSum1 * 7 - totalPartialSum2) % 10 === Number(StringifiedTurkishID.substr(9, 0));

  // If everything is ok you will get an true for return. If there is a problem, script gives false for every error.
  return checkIfStartWithZero && checkCountEvelen && checkModTenForEleven && checkModTenForTen;
}
