import sys
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube/helpers')

def function1 (arg1):
    return (arg1 + 1)

한글변수 = function1(7)
print(한글변수)

def 한글함수 (한글인자):
    return 한글인자 * 한글인자

print(한글함수(3))

# not like JS, it doesn't work if define function below the call.

def findVarParam (val, *optionalParam):
    print(val)
    print(optionalParam)

findVarParam(1,2,3,4,5)
findVarParam(1)

def simplecalc (a, b, op = '+'):
    if(op == '+' or op == ''): return int(a) + int(b)
    if(op == '-'): return int(a) - int(b)
    if(op == '*'): return int(a) * int(b)
    if(op == '/'): 
        if(b == '0'): return 'You can`t divide 0'
        return '{:.3f}'.format((int(a) / int(b)))


print( simplecalc(input(), input(), input()) )

def factorial (n):
    if n == 1: return 1
    else: return n * factorial(n - 1)

print( factorial(10) )