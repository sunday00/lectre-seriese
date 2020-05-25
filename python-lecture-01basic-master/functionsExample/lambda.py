import sys
from functools import reduce
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers')

from customrand import getRandNumbers

arr = getRandNumbers(1, 30, 10)

print(arr)

arr2 = filter(lambda x: x%2==0, arr)
print(arr2)

def isSingleNumber(arg):
    return arg%2 == 1

arr3 = filter(isSingleNumber, arr)
print(arr3)

print(map(isSingleNumber, arr))
arr4 = map(lambda x: x-1, arr)
print(arr4)

# filter : new iterable made of 'original elements' that passed through callback and result is 'true'.
# map : new iterable made of 'new elements' that 'results itselves' from callback.

num = reduce(lambda x,y: x+y, arr)
print(num)
    # reduce means reduce code ? I think.
    # rid of unnecessary iterating code.
    # insert elements into callback, reinsert the result as first arg, and repeat callback until last elements.

num2 = reduce(lambda x,y: x+y, arr, 10000) # 3rd arg is first arg eg. first x
print(num2)

arr5 = sorted(arr)
print(arr5)
arr6 = reversed(arr5)
print(list(arr6))
print( arr.sort(), arr )
print( arr.sort(reverse=True), arr )

    # warning!! However, this is not same basically.
    # sort() is not break original arr, and returns sorted new arr.
    # [].sort() is change itself, and at that time, returns none(=null).

