/**
 * Checks if a loading state is true or undefined.
 *
 * @param {boolean} [loading] - The loading state. Defaults to `true` if `undefined`.
 * @returns {boolean} - Returns `true` if `loading` is `true` or `undefined`, otherwise `false`.
 */
const checkIsLoading = (loading?: boolean): boolean => {
  return loading === undefined || loading;
};

export default checkIsLoading;
