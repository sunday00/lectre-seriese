# -*- coding: utf-8 -*- 
kor = '한글'
eng = 'en'

# kor2 = bytes(kor, 'euc-kr')

print(len(kor))
# print(len(kor2))
# print(kor2)
print(len(eng))

# print(bytearray(kor, 'utf8'))
# == bytearray(b'\xed\x95\x9c\xea\xb8\x80')

print(chr(97), chr(98), chr(104), chr(123), chr(124), chr(125))
print(ord('a'), ord('!'), ord('^'), ord(';'), ord('&'))
# ord('ㄱ')

print(list('fjkfksflksdnlknls'))
print("--".join(list('fjkfksflksdnlknls')))
    # "-".join(array)   # php : implode("-", array)
                        # js : join
                        # JAVA : String[] arr = new String[] {"a","b","c","d","e"}; String.join("-", arr);

