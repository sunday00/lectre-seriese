import sys
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers')
import customrand

multi2 = []
for i in range(0, 10, 2):
    i = i ** 2
    multi2.append(i)

print(multi2)

print('============================')

multi22 = list( i ** 2 for i in range(0, 10, 2) )
print(multi22)

print('============================')

strings = list( 'The next discount fruit is %s' %s for s in ['apple', 'banana']  )
print(strings)

print('============================')

numbers = [93, 15, 83, 4, 38, 31, 73, 19, 95, 96]
print(min(numbers), max(numbers))
numbers.reverse()
print( numbers )
numbers.sort()
print( numbers )
numbers.sort(reverse=True)
print( numbers )

print('============================')

arr = customrand.getRandNumbers()
newArr = [ n for n in arr if n % 2 == 0 ] 
    # == for n in arr: if n%2 == 0: newArr.append(n)
    # == list( n for n in arr if n % 2 == 0 )
print( arr )
print( newArr )

print('============================')

print(sum([1,2,3,4]))
s = set([1,2,3,4])
print(s)

print( sum([ 1.1, 1.334, 532.645, 314.654 ]) )

import math
print( math.fsum([123.423, 54352.323, 34.123]) )

print("=====================")

alltrue = [True, True, True]
allfalse = [False, False, False]
sometrue = [True, True, False]
print(all(alltrue), any(alltrue))
print(all(allfalse), any(allfalse))
print(all(sometrue), any(sometrue))

print("=====================")

somearr = ['foo', 'bar', 'baz', 'qux', 'que']
iterate = iter(somearr)
print( next(iterate) )
print( next(iterate) )
print( next(iterate) )
print( next(iterate) )
# print( next(iterate) )
# print( next(iterate) )
print( next(iterate, 'finish') )
print( next(iterate, 'finish') )
print( next(iterate, 'finish') )
print( next(iterate, False) )

iterate = iter(somearr)
row = True
while( row ):
    row = next(iterate, False)
    # print(list(iterate))
    print("====>", row)


print( next(iter(['foo', 'bar', 'baz', 'qux', 'que'])) )
print( next(iter(['foo', 'bar', 'baz', 'qux', 'que'])) )
print( next(iter(['foo', 'bar', 'baz', 'qux', 'que'])) )
print( next(iter(['foo', 'bar', 'baz', 'qux', 'que'])) ) # this is not work as you think.
    # iter is always make new iterate. so always return index 0th.
    # when you want to make list returning step by step next value, 
        # make some variable first.
    
print("=====================")

l1 = [1,2,3,4]
l2 = ['a','b','c','d']
print(list(zip(l1,l2))) #blending mix

print("=====================")

l3 = [1,2,3,4]
l4 = ['a','b','c','d','e','f']
print(list(zip(l4,l3))) #blending mix
