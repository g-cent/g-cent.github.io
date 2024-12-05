#Gio Centofanti

#1
SELECT firstName, COUNT(*) AS numofstud
FROM student
GROUP BY firstName
ORDER BY numofstud DESC, firstName ASC;

#2
#Could not figure out how to exclude transfer atudents stuck on this till the end of class
SELECT s.major, COUNT(*) AS enroll_count
FROM enroll e
JOIN class c ON e.classCode = c.classCode
JOIN course cr ON c.courseCode = cr.courseCode
JOIN student s ON e.studentID = s.studentID
WHERE cr.courseCredit = 4
GROUP BY s.major
ORDER BY enroll_count DESC;

#3
SELECT s.firstName
FROM student s
JOIN enroll e ON s.studentID = e.studentID
WHERE e.enrollYear = 2018 AND e.enrollSemester = '1' AND e.enrollGrade = 'B'
GROUP BY s.firstName, s.studentID
HAVING COUNT(e.enrollGrade) = 1
ORDER BY s.firstName;

#4
#Cannot figure out how to get the last .3 percent for the GPA

SELECT ROUND(AVG(s.GPA), 2) AS average_GPA
FROM student s
JOIN enroll e ON s.studentID = e.studentID
JOIN class c ON e.classCode = c.classCode
WHERE c.classTime LIKE '%Th%';

#5
SELECT c.courseDescription, COUNT(e.studentID) AS studentc
FROM enroll e
JOIN class cl ON e.classCode = cl.classCode
JOIN course c ON cl.courseCode = c.courseCode
WHERE e.enrollSemester = '2'
GROUP BY c.courseDescription
ORDER BY studentc DESC;
