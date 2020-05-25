import sys
import random
import names
from functools import reduce
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers/classes')
from _Student2 import Student

data = [
    Student(names.get_full_name(), 'M', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'M', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'M', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'M', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'M', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'F', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'F', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'F', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'F', random.randrange(15, 40), random.randrange(100)),
    Student(names.get_full_name(), 'F', random.randrange(15, 40), random.randrange(100)),
]

scores = map(lambda x: x.score, data)
total = reduce(lambda x, y: (x if type(x) == int else x.score) + y.score, data)
avg = total / len(data)
print(list(scores), total, avg)

# python style 3 side operating condition
    # other A > B ? C : D
    # python C if A > B else D
        # for remember note
            # just keep in mind whole ( 'if ~~ else' ) itself as operator.
            # so now, you feel like just C vs D

