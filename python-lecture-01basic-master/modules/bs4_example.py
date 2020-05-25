'''
this is for test
'''
import sys
import os
import requests
from bs4 import BeautifulSoup

# res = requests.get('https://jsonplaceholder.typicode.com/posts', timeout=(3, 7))
# print(res.text, res.status_code)

coo = {'jwt': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjOGExZDViMDE5MGIyMTQzNjBkYzA1NyIsImlhdCI6MTU4NzkwMzMzMiwiZXhwIjoxNTk1Njc5MzMyfQ.Oy5x-zxbNtxn5uE1ng862kq0zk66H3LBvVKAG2R_XI0'}
res = requests.get('http://localhost:8000/api/v1/user/5e91a886bcafd670596a65d4', cookies=coo)
print(res.text, res.status_code)

hea = {'_method' : 'PATCH'}
res2 = requests.post('http://localhost:8000/api/v1/user/5e91a886bcafd670596a65d4', headers=hea)

img = requests.get("http://localhost:8000/img/logo-white.png", stream=True) # down streamable file
f = open('down-load-white.png', 'wb')   # create blank file, write will be binary buffer
for chunk in img.iter_content(chunk_size=256): # get file contents by 250b step by step
    if chunk: f.write(chunk) # insert file content into opened blank file.

imgU = "http://localhost:8000/img/logo-white.png"
img = requests.get(imgU, stream=True)
print( img.raw )

mainUrl = 'https://play.google.com/store/apps/collection/cluster?clp=0g4cChoKFHRvcHNlbGxpbmdfZnJlZV9HQU1FEAcYAw%3D%3D:S:ANO1ljJ_Y5U&gsr=Ch_SDhwKGgoUdG9wc2VsbGluZ19mcmVlX0dBTUUQBxgD:S:ANO1ljL4b8c'
res = requests.get(mainUrl)
soup = BeautifulSoup(res.text, 'html.parser')
target = soup.select('div.ZmHEEd')
cList = target[0].select('div.ImZGtf')
for c in cList:
    n = c.select('div.WsMG1c.nnK0zc')
    print(n[0].get('title'))
    print(n[0].text)
                
    # get request and receive whole html.
    # make bs4 object.
    # select lists sector. eg ul.
        # this is should be [ ~ ]  list, even you select just one. So, next should be [0]
    # select iterable child element. eg li.

            
            

