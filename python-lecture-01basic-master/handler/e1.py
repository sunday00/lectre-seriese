try:
    print( 1 / 0 )
    print(a)
except ZeroDivisionError as ze:
    print("do not divide 0", ze.with_traceback)
except NameError:
    print("name err... maybe undefined")
except Exception as inst:
    print(type(inst))
else:
    print("??")
finally:
    exit()