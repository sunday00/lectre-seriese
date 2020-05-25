'''
practice builtin function
'''
import os
os.system('clear')

print(abs(-1))
print(divmod(5, 2)) #return diveide result and rest
print(bin(100), oct(100), hex(100))
print(bool(1 < 2), 1 < 2, bool(1), bool(0))
print(0o10 + 0o10)
print(hex(0o10 + 0o10))
print(bin(0o10 + 0o10))
print(pow(2,3))

help(min)
help(max)

print("=====================")

os.system('clear')

print(round(1.5))
print(round(3.4894739857439))
print(round(2.5))
print(round(3.5))
print(round(4.5))
print(round(5.5)) #round return always couple number. not just 5up 4under.

print(round(3.2256, 2))
