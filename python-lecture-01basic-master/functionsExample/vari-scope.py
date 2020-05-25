import sys, os

var1 = 'a'
print(var1)

def fun1 ():
    global var1
    print(var1)

fun1()

print( sys.argv )
print( sys.version )
print( sys.copyright )
print( sys.path )
print( sys.platform )
# print( sys.ps1 )

if len(sys.argv) < 2:
    sys.exit()

print(os.getcwd() + '/deal_file/' + sys.argv[1])

with open(os.getcwd() + '/deal_file/' + sys.argv[1], 'r', encoding='utf-8') as fff:
    for line in fff:
        print(line)
