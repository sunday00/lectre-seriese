'''
example test
'''
import sqlite3
from Student import Student

conn = sqlite3.connect('student_score.sqlite')
with conn:
    cur = conn.cursor()
    cur.execute('DELETE FROM students')
    conn.commit()

students = []
with open('./info.csv', 'r', encoding='utf-8') as file:
    for idx, line in enumerate(file):
        if idx == 0: continue
        student = Student(line)
        students.append((
            student.protectedName, student.ageBrief, student.engGender, student.grade, student.addrBrief
        ))

with conn:
    cur = conn.cursor()
    sql = """INSERT INTO students (
        name, age, gender, grade, addr
    ) VALUES (?,?,?,?,?)"""
    cur.executemany(sql, students)
    conn.commit()

with conn:
    cur = conn.cursor()
    sql = "SELECT * FROM students ORDER BY substr(grade, 1, 1), grade desc"
    cur.execute(sql)
    for row in cur.fetchall():
        print(row)

exit()