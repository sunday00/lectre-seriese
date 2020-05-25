print("hello python")

import random
a = random.randrange(1,7)
print(a)

for x in ['apple', 'banana', 'cherry', 'durian', 'egg']:
    print(x)

print("한글도 잘 될까?")
print(1 > 2)

if(1 > 2):
    print("OK")
else:
    print("NO")

print(2**3) #should be 8.

print(5 // 2) # divide and get rid of float number.
print(5 / 2)

print(1 > 2 or 2 < 3)
print(1 > 2 and 2 > 3)
print(not False)
# print(!False) this is not correctly python syntax

print(4/2 == 4//2)
# print(4/2 === 4//2) what?? python doesn't have ===.
print(type(4//2) == type(4/2))

b = "hello string"
print(b+' abracadabra')
print("hello"' something') 

print(b * 2) # string can calculate and repeat in multiply in py.

print(a, b)

print(b[3])
print(len(b))
print(b[3:7]) # py can easily slice string. ps.in JS b.substr(3,7). php substr(b,3,7)
print(b[:7]) # == b[0:7]
print(b[:-1]) # 
print(b[6:len(b)])
print((b+' ')[6:-1])

c = b.split(' ')
print( c )
print( type(c) ) # not array. this is list

d, e, f = 'php', 'Java', 'nodejs'
print(d, e, f)

g = "this is sentence"
h, i, j = g.split(" ")
print(h,i,j) 

print('a' < 'b')
print('a' > 'b') # can acknowledge alphabetical order. ref ascii 

k = "KIM"
l = "my first name is {}. please call kindly."
print(l.format(k)) #k is insert into {}

print("Can be fill zero {:d}".format(12))
print("Can be fill zero {:5d}".format(12)) #fill space reach 5 char
print("Can be fill zero {:05d}".format(12)) #fill zero reach 5 char
print("Can be fill zero {:05f}".format(12)) #fill zero with 5 floating
# try b, o, x, %
print(l.upper())
print(l.upper().lower())
print(l.capitalize())

print(l.find('f')) # return index
print(l.rfind('f')) # return index

m = "   fdsljflkdsjflkds   "
print(m.strip())
print(m.lstrip())
print(m.rstrip())
print(m.isalnum())
print(m.strip().isalnum())
# print(a.isdigit()) #NOTICE:: integer has no this method.
aa = '123'
print(aa.isdigit())

if(aa.isdigit()):
    print(type(int(aa)))

n = "if"
print(n.isidentifier()) #return if the word is keyword in programming lang.
print(dir(random)) #show class's all methods.

print("this is binary {:b}".format(7))
print("this is ? {:o}".format(7))
print("this is ? {:x}".format(7))
print("this is percentage {:.0%}".format(1/3))
print("this is percentage {:.1%}".format(1/3))

print("this is adding flag {:+f}".format(2 - 5))
print("this is adding flag {:.1f}".format(2 - 5))
print("this is adding flag {:.1f}".format(5 - 2))
print("this is adding flag {:+.1f}".format(5 - 2))

print("this is adding flag {:+020.11f}".format(5 - 2))
    # (+) add positive or negative flag
    # (0) fill remains with 0
    # (20) total inner number length is 20 
    # (.11) length of between zero and one char
    # (f) type of inner {} 
print("this is adding flag {:+020.11f}".format(1 / 3))
