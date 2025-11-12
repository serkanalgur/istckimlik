/**
 * Validates a Turkish Identification Number (TC Kimlik).
 *
 * A valid Turkish ID must:
 * - Not start with 0
 * - Be exactly 11 digits
 * - Pass the checksum validation (mod 10 checks)
 *
 * @param turkishId - The Turkish ID number to validate
 * @returns true if the ID is valid, false otherwise
 */
export function isTCKimlik(turkishId: number): boolean {
  const idString = turkishId.toString();

  // Check if not starting with zero and has exactly 11 digits
  const checkIfStartWithZero = 0 !== Number(idString[0]);
  const checkCountEvelen = /^[0-9]{11}$/.test(idString);

  if (!checkIfStartWithZero || !checkCountEvelen) {
    return false;
  }

  // Calculate sum of first 10 digits
  let totalSum = 0;
  for (let i = 0; i < 10; i++) {
    totalSum += Number(idString[i]);
  }

  // Check if mod(10) gives 11th digit
  const checkModTenForEleven = totalSum % 10 === Number(idString[10]);

  // Calculate odd and even position sums
  let totalPartialSum1 = 0;
  let totalPartialSum2 = 0;

  for (let i = 0; i < 10; i += 2) {
    totalPartialSum1 += Number(idString[i]);
  }

  for (let i = 1; i < 10; i += 2) {
    totalPartialSum2 += Number(idString[i]);
  }

  // Check if mod(10) of formula matches 10th digit
  const checkModTenForTen = (totalPartialSum1 * 7 - totalPartialSum2) % 10 === Number(idString[9]);

  return checkModTenForEleven && checkModTenForTen;
}
