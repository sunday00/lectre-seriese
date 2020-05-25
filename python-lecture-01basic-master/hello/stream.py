'''
2020.04.18.
just practice
'''

CMD = input()
print(CMD)

print("=====================")

CMD2 = input("input some int >> ")
print(CMD2 * 2, 'surprize?') # be careful. input data is always string.
print(int(CMD2) * 2, 'surprize?')

print("=====================")

err = 0
while('n2' not in globals()):
    CMD3 = input("input numbers with space>> ")
    if ( ' ' not in CMD3):
        print('no. that is not correct input.')
        print('input like below.')
        print('6 13')
        err += 1
        if err >= 5:
            print('You really don`t understand')
            print('The system terminate')
            exit()
        continue
    n1, n2 = CMD3.split(' ')

print(int(n1) + int(n2))

print("=====================")

template = "the numbers {} plus {} equals {}"
print(template.format(n1, n2, int(n1) + int(n2)))

print("=====================")

print('some string is this hello'.find('hello')) # 20
print('some string is this hello'.find('kukudas')) #  -1
    #seems like strpos()

