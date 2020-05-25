# get along with sqlite like mysql
- SELECT type, name, tbl_name, sql from sqlite_master;
    - check briefly  whole data sequence.
    - don't forget semicolon __;__
- .tables
    - show tables;
- .schema students
    - show students table ddl.
    - table name is optional. default is showing all schemas.

# functions
- ifnull(column, 'val')
    - if column is null, return value.
    - select id, ifnull(name, 'anonymous') from users;
- instr(column, 'val')
    - find value's index position in column data.
    - like strpos, strstr, indexOf ... start with 1 not 0
    - select name, instr(name, 'berg') from user;
        - goldberg | 5
        - iceberg | 4 ...
- group_concat(column)
    - make result (..., ..., ...)

# backup
- .dump
    - show whole ddl, dml
- .output /path/to/file.sql  &&  .dump
    - already U know...
- .read
    - restore to database.
    - NOT SUPPORT EVERY sql, like from mysql dump.


# session config
- .show
    - show configuration in current session
- .mode column
    - display data divided wide column
    - default is list
    - mode list :
        - column : wide column list
        - insert : make insert query for other db
        - html : make xml,html structure
- .headers on
    - show columns name
- .width 15 20 20
    - means text len
- .nullvalue null
    - make null data shows null
    - default is empty string ""
    - when you confused if data has space string "  " , this will help you.

# deal cli
- .shell clear
    - exec shell command like clear display
- .exit
    - don't forget dot.
- VACUUM;
    - clear memory