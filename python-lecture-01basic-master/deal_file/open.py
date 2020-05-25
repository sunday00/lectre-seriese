import os
cf = os.getcwd() + "/" + 'deal_file'
f = open(cf + '/hello.txt', 'w') # if file is not exist, file can be born.
# f = open(cf + '/hello.txt', 'w', encoding='utf8') # if charset is broken
f.write('this is john smith')
f.close()

f = open(cf + '/hello.txt', 'w') # file is 're'write. all of data blow, and new record is only be.
f.write('is the what line??');
f.writelines(['can', 'list', 'insert-line']); #writelines accept list and automatically add break line.
f.writelines('of course just string can be.');
f.close();

f = open(cf + '/hello.txt', 'a') # append line. if you need log some file, use this method.
f.write('\nadddd')
# f.close() # if file is not closed, the written line is skip

# fr = open(cf + '/hello.txt', 'r')
# print(fr)

with open(cf + '/hello.txt', 'r') as fr:
    for row in fr:
        print(row)

f.close()
fr.close()

print("=====================")

with open(cf + '/hello.txt', 'r') as fr: #with keyword can help automatically file stream close
    for row in fr:
        print(row)

print(fr, type(fr))
fr.close()

print("=====================")

fr2 = open(cf + '/hello.txt', 'r')
for row in fr2:
    print(row + "!")




