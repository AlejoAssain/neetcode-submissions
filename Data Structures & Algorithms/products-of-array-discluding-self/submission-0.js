class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      const products = []

      for (let i = 0; i < nums.length; i++) {
          const restOfNums = [ ...nums.slice(0, i), ...nums.slice(i + 1) ];
          const product = restOfNums.reduce((acc, currentValue) => acc * currentValue, 1);
          products.push(product);
      }

      return products
    }
}