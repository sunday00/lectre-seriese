-- SQLite
-- SELECT c.name, s.name as student
--     FROM students s 
--     INNER JOIN clubs c 
--     ON c.leader_id = s.id
-- ;

-- CREATE VIEW clubs_leadername as SELECT c.name as club, s.name FROM students s INNER JOIN clubs c ON c.leader_id = s.id;

-- select * FROM clubs_leadername;

-- CREATE table history (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     student_id INTEGER NOT NULL,
--     date TIMESTAMP CURRENT_TIMESTAMP
-- );

CREATE TRIGGER tr_students_delete
    BEFORE DELETE ON students
    BEGIN 
        INSERT INTO history (student_id, date) VALUES (OLD.id, datetime('now','localtime'));
    END;

DELETE FROM students where id = 1;

select * from history;    