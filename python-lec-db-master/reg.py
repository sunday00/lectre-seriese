'''
reg practice
'''
import re

# with open('./poem.txt', 'r') as file:
#     for line in file:
#         # print(line)
#         matches = re.findall("^If", line, re.IGNORECASE)
#         print(matches)
poem = """
    The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!

Two and too and tow tww tweet together.
"""

m = re.findall("^if", poem, re.MULTILINE | re.IGNORECASE)
n = re.findall("t[wo]", poem, re.IGNORECASE | re.MULTILINE)
o = re.findall("t[^o]", poem, re.IGNORECASE | re.MULTILINE)

print( m, n, o )

print('\n=======================\n')

pat = re.compile('[A-z]{3,4}')
print(re.findall(pat, poem))

print('\n=======================\n')

for line in re.finditer(pat, poem) :
    print(line.group())
    
target = "abcdefg7890zxcvasdfqwer<hhh>lkj098</hhh>"
print( re.findall('<hhh>', target) )
print( re.findall('<(hhh)>', target) )
    # use (). find pattern betweens ' , return betweens ( and )

print( re.findall('<(.{3})>', target) ) # . means one word. if you didn't use (), make list like using split()

import os
os.system('clear')

print('\n=======================\n')

patt = re.compile('(.*) is.* better than (.*)', re.IGNORECASE)
for line in re.finditer(patt , poem):
    r = line.groups()
    # r = line.group().replace('.', '').split(' is better than ')
    # print(r[0] + ' > ' + r[1])
    print( "{} > {}".format(r[0].lower(), r[1].replace('.','')) )
