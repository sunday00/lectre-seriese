import sys
import random
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers/classes')
from _Student import Student

students = [Student('k', random.randrange(100)), Student('l', random.randrange(100)), Student('p', random.randrange(100))]
print(students[0])
print(students[1])
print(students[2])

print("=====================")

students2 = sorted(students, key = lambda stu: stu.score)
print(students2[0])
print(students2[1])
print(students2[2])

print("=====================")

students3 = sorted(students, key = lambda stu: stu.name)
print(students3[0])
print(students3[1])
print(students3[2])
