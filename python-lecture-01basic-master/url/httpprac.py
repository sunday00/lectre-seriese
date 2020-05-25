from urllib import request
url = 'http://grayfield.net'
html = request.urlopen(url).read()
print( html )

import ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
url2 = 'https://google.com'
html2 = request.urlopen(url2).read()

print( html2 )

import os
print(os.name)
os.system('clear' if os.name == 'posix' else 'cls')

print('sjdklfs')
print('sjdklfs')
print('sjdklfs')

import sys
sys.path.append('/Users/sunday00/workspace/python/01basic-youtube')
from helpers.shortcut import clear

clear()

