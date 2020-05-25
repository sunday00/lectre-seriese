a = 1
# print(a++) #surprisingly python can't support ++ or --... disapointing...
a+=1
print(a) 

n, s, f, s2 = 1, 'app', 2.3, '3'
print(type(n), type(s), type(f), type(s2))
print(type(str(n)), type(s), type(int(f)), type(int(s2)), type(float(n)))

# LIST - like just array
fruit = ['apple', 'banana', 'cherry', 'durian', 'egg', 'fork', 'grape', 'hotdog']
print(fruit[0:2], fruit[3:5], fruit[5:-1])
mixedThings = [1, 2, 3, 'kor', 'usa', 'hon']
print([fruit, mixedThings])

mulLineArr = [
    ['is', 'can', 'mul', 'line', '?'],
    [100, 200, 300, 400]
]

print(mulLineArr)
print(mulLineArr[1][3])

pushedArr = fruit + mixedThings
print(pushedArr) # amazing... 
    # php : $pushedArr = array_merge(fruit, mixedThings);
    # js : const pushedArr = fruit.concat(mixedThings)
    # JAVA : ArrayList<Object> pushedArr = new ArrayList<Object>(); fruit.addAll(mixedThings);
        # and JAVA is even not type safety, not recommended.

print(len(pushedArr))

pushedArr.insert(3, 'THIS IS 새치기')
print(pushedArr)
    # other progaraming should be cut array first, and push, and concat.

del pushedArr[0] # rid by order
print(pushedArr)
del pushedArr[1:3] #rid by order and amount
print(pushedArr)
poped = pushedArr.pop() #rid lastone and store as new value
print(pushedArr, poped)
poped2 = pushedArr.pop(2) #rid order and store as new value
print(pushedArr, poped2)
pushedArr.remove('fork') #rid by value
print(pushedArr)
pushedArr.clear()
print(pushedArr) # rid all

print(fruit)
print('cherry' in fruit)
print('mongoDB' in fruit)
    # php in_array('cherry', fruit)
    # js fruit.includes('cherry') || fruit.indexOf('cherry')
    # java fruit.contains('cherry')
print('hell in a cell' not in fruit)

tuple1 = ('kim', 'lee', 'song') #this is tuple.
print(tuple1)
print(dir(tuple1)) #there's no able to modify methods.
print(tuple1[2])
print(tuple1[0:2]) # tuple1.append(1) # tuple is like const array.
curious = fruit[0],fruit[1]
print(type(curious)) # some values with just comma is tuple.

dic1 = {
    'name': 'kim',
    'age': 35,
    'tall': 171
}
print(dic1) # dictionary is k:v array.
    #php : ['a' => 'b', 'c' => 2]
    #js : just like jason
    #JAVA: Map<String, Integer> map = new HashMap<String, Integer>; map.put("a", 1);

print(dic1.keys(), dic1.values())
print(dic1['name'])
print('kim' in dic1)
print('name' in dic1)

def findKeyByValue(dic, val):
    return list(dic.keys())[ list(dic.values()).index(val) ]

print( findKeyByValue(dic1, 35) )

cost = {'apple':100, 'banana':200, 'cherry':140}
print(cost['apple'] * 3 + cost['banana'] * 2 + cost['cherry'] * 6)