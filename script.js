
const marksForm = document.getElementById("marksForm");
const resultSection = document.getElementById("result");

marksForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    // Get marks from all five subject fields
    const marks = [
        Number(document.getElementById("mark1").value),
        Number(document.getElementById("mark2").value),
        Number(document.getElementById("mark3").value),
        Number(document.getElementById("mark4").value),
        Number(document.getElementById("mark5").value)
    ];

    // Validate student name
    if (name === "") {
        alert("Please enter the student name.");
        return;
    }

    // Validate marks
    for (let i = 0; i < marks.length; i++) {
        if (
            document.getElementById(`mark${i + 1}`).value.trim() === "" ||
            !Number.isFinite(marks[i]) ||
            marks[i] < 0 ||
            marks[i] > 100
        ) {
            alert(`Please enter a valid mark between 0 and 100 for Subject ${i + 1}.`);
            return;
        }
    }

    // Calculate total, average and percentage
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    const percentage = (total / 500) * 100;

    // Calculate grade
    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the result
    document.getElementById("resultName").textContent =
        "Student Name: " + name;

    document.getElementById("resultTotal").textContent =
        `Total Marks: ${Number(total.toFixed(2))} / 500`;

    document.getElementById("resultAverage").textContent =
        `Average: ${Number(average.toFixed(2))}`;

    document.getElementById("resultPercentage").textContent =
        `Percentage: ${Number(percentage.toFixed(2))}%`;

    document.getElementById("resultGrade").textContent =
        "Grade: " + grade;

    resultSection.hidden = false;

    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// Clear the form and hide the previous result
marksForm.addEventListener("reset", function () {
    resultSection.hidden = true;
});
