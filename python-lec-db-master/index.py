'''
python with sqlite example
'''
import sqlite3
conn = sqlite3.connect('schoolinfo.db')

# cur = conn.cursor()

# cur.execute('select * from students')

# rows = cur.fetchall()
# for row in rows:
#     print(row)

# conn.close()

with conn:
    cur = conn.cursor()

    cur.execute('select * from students where id=? AND name=?', (1, 'MR.J'))

    rows = cur.fetchall()
    for row in rows:
        print(row)

with conn:
    cur = conn.cursor()
    sql = "INSERT INTO students (name, modile) VALUES (?,?)"
    cur.execute(sql, ('Bruce W', '032-234-0000'))
    conn.commit()

with conn:
    cur = conn.cursor()
    data = (
        ('happy','809-234-6432'),
        ('crying Nut',None)
    )

    sql = 'INSERT INTO students (name, modile) VALUES (?,?)'
    cur.executemany(sql, data)
    conn.commit()

