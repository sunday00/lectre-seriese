import os
import sys
import datetime
import time

dirr = os.getcwd() + '/deal_file'
print( os.getcwd() )

if os.path.isdir( dirr + '/newfolder' ) == False:
    os.mkdir( dirr + '/newfolder' )

os.system('dir')
os.system('ls')

os.system('clear')

now = datetime.datetime.now()
print( now )

print(now.year, now.month, now.date, now.day, now.second, now.hour, now.minute, now.microsecond)
print( now.strftime('%Y/%m/%d %H:%M:%S') )
print( now.strftime( '%Y{} %m{} %d{} %H{} %M{} %S{}'.format(*'ymdhms') ) )

nextweek = now + datetime.timedelta(weeks=1)
print(nextweek)
nextYear = now.replace(year=(now.year + 1))
print(nextYear)

print("=====================")

print('a')
# time.sleep(2)
print('b')
print( time.timezone / 360 )

print(  time.time()  )
print( sys.version_info )

print( time.time_ns() )
