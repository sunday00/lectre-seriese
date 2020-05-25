PRAGMA foreign_keys=ON;
BEGIN TRANSACTION;
CREATE TABLE students (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name TEXT NOT NULL DEFAULT 'John Doh',
modile TEXT NULL
);
INSERT INTO students VALUES(1,'Mr.J','010-0002-3304');
INSERT INTO students VALUES(2,'Holly Q',NULL);
CREATE TABLE clubs (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name TEXT NOT NULL,
leader_id INTEGER NOT NULL,
CONSTRAINT fk_club_leader FOREIGN KEY (leader_id) REFERENCES students (id)
);
INSERT INTO clubs VALUES(1,'Comics',1);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('students',2);
INSERT INTO sqlite_sequence VALUES('clubs',1);
COMMIT;
 Comics|Mr.J
Framodel|Holly Q
Comics|Mr.J
Framodel|Holly Q
1|1|
2020-04-30 15:22:39
2020-05-01 00:23:11
2020-05-01 00:23:20
