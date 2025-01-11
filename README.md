# Title

School management system

# Tech stack

## React, React Router, Axios, Node.js, Express.js, PostgreSQL

# Description 

This is a full stack application that describes a system used in schools. THe system has functionalities as:

1. Students with their accounts can see all their grades and statistics for their success in the school
2. Teachers can see grades of every student in the school
3. Teachers can see grades of all students in specialty where the teacher teaches
4. Administrators can make statistics with every grade in the school

The idea of the system is to give web based interface, which is intuitive for work. It gives always and immediately information and students and teachers can always access the information they desire. <br>
The application uses PostgreSQL as database. In it there are tables for all three rows - student, teacher, administrator. All three tables have different fields that describe every row. There are tables for student grades, all specialties and all subject in the school or university. <br>
The architecture: <br>
<br>
![UML Diagram][def]

The structure of the database is

## Students

| Fak. Number | first_name | last_name | born_date  | sign\_ date | credits | spec_ID |
| ----------- | ---------- | --------- | ---------- | ----------- | ------- | ------- |
| 1001        | John       | Johnson   | 2002-07-18 | 2022-09-18  | 57      | 3       |

## Specialties

| ID  | name                              |
| --- | --------------------------------- |
| 3   | Software and computer engineering |

## Subjects

| ID     | spec_ID | name                        | hours | credits | teacher_name |
| ------ | ------- | --------------------------- | ----- | ------- | ------------ |
| 100123 | 3       | Object Oriented Programming | 30    | 12      | Peter Peter  |

## Grade

| ID      | student_ID | subject_ID | grade | passed |
| ------- | ---------- | ---------- | ----- | ------ |
| 1007416 | 1001       | 100123     | 5.34  | true   |

[def]: /DB_UML_Diagram_School_System.jpeg
