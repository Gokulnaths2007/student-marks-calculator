
print("================================")
print("    STUDENT MARKS CALCULATOR")
print("================================")

name = input("Enter student name: ")

marks = []

for i in range(1, 6):
    while True:
        try:
            mark = float(input(f"Enter mark for Subject {i} (0-100): "))

            if 0 <= mark <= 100:
                marks.append(mark)
                break
            else:
                print("Invalid mark! Enter a value from 0 to 100.")

        except ValueError:
            print("Invalid input! Please enter a number.")

total = sum(marks)
average = total / len(marks)
percentage = (total / 500) * 100

if percentage >= 90:
    grade = "A+"
elif percentage >= 80:
    grade = "A"
elif percentage >= 70:
    grade = "B"
elif percentage >= 60:
    grade = "C"
elif percentage >= 50:
    grade = "D"
else:
    grade = "F"

print("\n========== RESULT ==========")
print("Student Name:", name)
print("Total Marks:", total, "/ 500")
print("Average:", average)
print("Percentage:", percentage, "%")
print("Grade:", grade)
print("============================")
