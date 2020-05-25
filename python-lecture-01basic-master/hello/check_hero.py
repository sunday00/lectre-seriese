import os
import sys
import random
import builtins
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers')
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers/classes')
os.system('clear')
from customrand import getRandNumbers
from _Hero import Hero, DcHero, MarvelHero

print(dir(builtins))

print(dir( random ))

print( eval('getRandNumbers(10, 20, 7)') )

l = getRandNumbers()
print( l )
random.shuffle( l )
print( l )

print("=====================")

batman = DcHero('Batman')
ironman = MarvelHero('IronMan')

print( callable(batman.fly) )

print( batman.fly() )

print( hasattr(batman, 'fly') )

print( getattr(batman, 'name') )
print( getattr(batman, 'fly')() )

print(hash(batman), id(batman), hex(id(batman)), batman)
print(hash(ironman), id(ironman), hex(id(ironman)), ironman)
    # id () === variable's memory address

print(isinstance(batman, DcHero))
print(issubclass(DcHero, Hero))

# print(ironman.color())
print(ironman.color)

print(Hero.takeCape())
print(batman.takeSpan())




