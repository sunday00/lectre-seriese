a = {1,2,3,4}
b = {2,4,6,8}

print(a & b) # intersection
print(a | b) # union
print(a ^ b) # difference
print(a - b) # complementary set

print("=====================")

c = a.union(b)
a.update(b)
print(c)
print(a)

a.update({10, 11})
print(a)