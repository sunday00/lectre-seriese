for i in range(1,100):
    print(i)

for i in range(1,100, 10):
    print(i)

fruits = ('apple', 'banana', 'cherry', 'durian')
for i in range(3): #range with just one number is start with 0 to number
    print(fruits[i])

r = range(0,3)
print(r)

i, sum = 0, 0
while(i >= 0):
    i += 1
    if i > 10 and i < 20: #python is no need to condition ()
        continue
    
    sum += i
    if (i == 100): # but () is ok.
        print('finally...')
        break

tot = 0
for i in range(1,101):
    print(tot , '+', i, tot + i)
    tot += i

# tot2 = 0
# i2 = 0
tot2, i2 = 0, 0
while(i2 <= 100):
    print(tot2, '+', i2, tot2 + i2)
    tot2 += i2
    i2 += 1

tot4, i4 = 0, 0
while(i4 < 100):
    i4 += 1
    tot4 += i4
    print(tot4)
    
    

tot3 = 0
for i in range(101):
    if (i % 2):
        print(tot3 , '+', i, tot3 + i)
        tot3 += i

instructors = {
    'Jonas': {
        'name': 'Jonas',
        'lang': 'nodejs',
        'site': 'udemy',
        'sumint': 4
    },
    'WhiteShip': {
        'name': 'Baik',
        'lang': 'JAVA Spring',
        'site': 'inflean',
        'sumint': 4.5
    },
    'Jeffry': {
        'name': 'Jeffry way',
        'lang': 'PHP Laravel',
        'site': 'Laracast',
        'sumint': 5
    },
    'Pangyo': {
        'name': 'Jang',
        'lang': 'Front JS Vue',
        'site': 'inflearn',
        'sumint': 3.5
    },
    'egoing': {
        'name': 'egoing',
        'lang': 'mix',
        'site': 'opentutorial',
        'sumint': 5
    }
}

print("==========================")

for key in instructors:
    print(key)

print("==========================")

for i, value in enumerate( instructors ):
    print(i)
    print(value)

print("==========================")

for k, v in instructors.items():
    print(k, v)
    print(v['lang'])

print("==========================")

for i, v in enumerate(instructors):
    print('%d : %s' % (i, v))
    print('%s - %s' % (instructors[v]['site'], instructors[v]['lang']))

print("==========================")

print (  list(  enumerate( instructors )  )  )
print (  list(  enumerate( fruits )  )  )
    #enumerate make new list of tuple with index and value.

