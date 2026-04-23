class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        occ = {}
        for index, num in enumerate(nums):
            occ[num] = occ.get(num, []) + [index]

        for index, num in enumerate(nums):
            complement = target - num
            complement_indexes = occ.get(complement)

            if complement_indexes:
                for complement_i in complement_indexes:
                    if complement_i != index:
                        return [index, complement_i]


            