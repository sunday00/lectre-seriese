import sys
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers/classes')
from _Dog import Dog, Jindo

a = Dog('Komo')
print(a.get_name())
a.bark()

b = Jindo('Noo')
print(b.get_name())
b.bark()
print(b.home)

b.set_status('normal')
print( b.get_status() )


print("=====================")


# a.__cap1()
# b.__cap1()
# b.__cap2()

a.call__cap1()
# b.call__cap1()
b.call__cap2()

b.not_need_to_instance()
Jindo.not_need_to_instance()

Jindo.not_need_to_instance2('static2')
Jindo.not_need_to_instance2('static2')



print('bye system.')