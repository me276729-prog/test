// // 1. Student Class

// class Student {

//     #grade1;
//     #grade2;
//     #grade3;
//     #attendance;

//     constructor(name, grade1, grade2, grade3, attendance) {

//         this.name = name;

//         this.grade1 = grade1;
//         this.grade2 = grade2;
//         this.grade3 = grade3;
//         this.attendance = attendance;
//     }

//     // Setters

//     set grade1(value) {
//         if (value === "" || value < 0 || value > 100) {
//             throw new Error("درجة المادة الأولى يجب أن تكون من 0 إلى 100");
//         }
//         this.#grade1 = Number(value);
//     }

//     set grade2(value) {
//         if (value === "" || value < 0 || value > 100) {
//             throw new Error("درجة المادة الثانية يجب أن تكون من 0 إلى 100");
//         }
//         this.#grade2 = Number(value);
//     }

//     set grade3(value) {
//         if (value === "" || value < 0 || value > 100) {
//             throw new Error("درجة المادة الثالثة يجب أن تكون من 0 إلى 100");
//         }
//         this.#grade3 = Number(value);
//     }

//     set attendance(value) {
//         if (value === "" || value < 0 || value > 100) {
//             throw new Error("نسبة الحضور يجب أن تكون من 0 إلى 100");
//         }
//         this.#attendance = Number(value);
//     }

//     // Getters

//     get average() {
//         return (this.#grade1 + this.#grade2 + this.#grade3) / 3;
//     }

//     get attendance() {
//         return this.#attendance;
//     }
// }


// // 2. Students Array

// let studentsList = [];


// // 3. DOM Elements

// let studentName = document.getElementById("studentName");

// let grade1 = document.getElementById("grade1");
// let grade2 = document.getElementById("grade2");
// let grade3 = document.getElementById("grade3");

// let attendance = document.getElementById("attendance");

// let addStudent = document.getElementById("addStudent");

// let mercyCommittee = document.getElementById("mercyCommittee");

// let errorMessage = document.getElementById("errorMessage");

// let studentsDisplay = document.getElementById("studentsDisplay");

// let report = document.getElementById("report");


// // 4. Add Student

// addStudent.onclick = function () {

//     try {

//         errorMessage.innerHTML = "";

//         let student = new Student(
//             studentName.value,
//             grade1.value,
//             grade2.value,
//             grade3.value,
//             attendance.value
//         );

//         if (studentName.value.trim() === "") {
//             throw new Error("من فضلك أدخل اسم الطالب");
//         }

//         studentsList.push(student);

//         studentsDisplay.innerHTML += `
//             <div class="list-group-item">
//                 ${student.name} - المتوسط: ${student.average.toFixed(2)}
//             </div>
//         `;

//         studentName.value = "";
//         grade1.value = "";
//         grade2.value = "";
//         grade3.value = "";
//         attendance.value = "";

//     }

//     catch (error) {

//         errorMessage.innerHTML = error.message;

//     }

// };


// // 5. Mercy Committee

// mercyCommittee.onclick = function () {

//     let strugglingStudents = studentsList.filter(student => {

//         return student.average >= 40 && student.average <= 49;

//     });


//     let newAverages = strugglingStudents.map(student => {

//         return {
//             name: student.name,
//             average: student.average + 5
//         };

//     });


//     let total = newAverages.reduce((sum, student) => {

//         return sum + student.average;

//     }, 0);


//     let generalAverage = 0;

//     if (newAverages.length > 0) {

//         generalAverage = total / newAverages.length;

//     }


//     report.innerHTML = `

//         <h5>التقرير النهائي للجنة الرأفة</h5>

//         <p>
//             عدد الطلاب المتعثرين:
//             ${strugglingStudents.length}
//         </p>

//         <h6>أسماء الطلاب:</h6>

//         ${newAverages.map(student => `
//             <p>
//                 ${student.name} -
//                 المتوسط بعد الرأفة:
//                 ${student.average.toFixed(2)}
//             </p>
//         `).join("")}

//         <hr>

//         <h6>
//             المتوسط العام بعد الرأفة:
//             ${generalAverage.toFixed(2)}
//         </h6>

//     `;

// };

// 1. Student Class

class Student {

    #grade1;
    #grade2;
    #grade3;
    #attendance;

    constructor(name, grade1, grade2, grade3, attendance) {

        this.name = name;

        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
        this.attendance = attendance;

    }

    // Setters

    set grade1(value) {

        if (value === "" || !Number.isFinite(Number(value)) ||
            Number(value) < 0 || Number(value) > 100) {

            throw new Error("درجة المادة الأولى يجب أن تكون من 0 إلى 100");

        }

        this.#grade1 = Number(value);

    }

    set grade2(value) {

        if (value === "" || !Number.isFinite(Number(value)) ||
            Number(value) < 0 || Number(value) > 100) {

            throw new Error("درجة المادة الثانية يجب أن تكون من 0 إلى 100");

        }

        this.#grade2 = Number(value);

    }

    set grade3(value) {

        if (value === "" || !Number.isFinite(Number(value)) ||
            Number(value) < 0 || Number(value) > 100) {

            throw new Error("درجة المادة الثالثة يجب أن تكون من 0 إلى 100");

        }

        this.#grade3 = Number(value);

    }

    set attendance(value) {

        if (value === "" || !Number.isFinite(Number(value)) ||
            Number(value) < 0 || Number(value) > 100) {

            throw new Error("نسبة الحضور يجب أن تكون من 0 إلى 100");

        }

        this.#attendance = Number(value);

    }


    // Getters

    get grade1() {
        return this.#grade1;
    }

    get grade2() {
        return this.#grade2;
    }

    get grade3() {
        return this.#grade3;
    }

    get attendance() {
        return this.#attendance;
    }

    get average() {

        return (
            this.#grade1 +
            this.#grade2 +
            this.#grade3
        ) / 3;

    }

}


// 2. Students Array

let studentsList = [];


// 3. DOM Elements

let studentName = document.getElementById("studentName");

let grade1 = document.getElementById("grade1");

let grade2 = document.getElementById("grade2");

let grade3 = document.getElementById("grade3");

let attendance = document.getElementById("attendance");

let addStudent = document.getElementById("addStudent");

let mercyCommittee = document.getElementById("mercyCommittee");

let errorMessage = document.getElementById("errorMessage");

let studentsDisplay = document.getElementById("studentsDisplay");

let report = document.getElementById("report");

let totalStudents = document.getElementById("totalStudents");

let strugglingStudents = document.getElementById("strugglingStudents");

let successfulStudents = document.getElementById("successfulStudents");

let generalAverage = document.getElementById("generalAverage");


// 4. Escape HTML

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}


// 5. Display Students

function displayStudents() {

    studentsDisplay.innerHTML = "";

    studentsList.forEach((student, index) => {

        studentsDisplay.innerHTML += `

            <tr>

                <td>${index + 1}</td>

                <td>${escapeHTML(student.name)}</td>

                <td>${student.grade1}</td>

                <td>${student.grade2}</td>

                <td>${student.grade3}</td>

                <td>
                    <span class="success-badge">
                        ${student.average.toFixed(2)}
                    </span>
                </td>

                <td>${student.attendance}%</td>

            </tr>

        `;

    });

}


// 6. Update Statistics

function updateStatistics() {

    let struggling = studentsList.filter(student =>
        student.average >= 40 && student.average <= 49
    );

    let successful = studentsList.filter(student =>
        student.average >= 50
    );

    let total = studentsList.reduce((sum, student) =>
        sum + student.average, 0
    );

    totalStudents.innerText = studentsList.length;

    strugglingStudents.innerText = struggling.length;

    successfulStudents.innerText = successful.length;

    generalAverage.innerText = studentsList.length > 0
        ? (total / studentsList.length).toFixed(2)
        : "0";

}


// 7. Add Student

addStudent.onclick = function () {

    try {

        errorMessage.innerHTML = "";

        if (studentName.value.trim() === "") {

            throw new Error("من فضلك أدخل اسم الطالب");

        }


        let student = new Student(

            studentName.value.trim(),

            grade1.value,

            grade2.value,

            grade3.value,

            attendance.value

        );


        studentsList.push(student);


        displayStudents();

        updateStatistics();


        // Clear Inputs

        studentName.value = "";

        grade1.value = "";

        grade2.value = "";

        grade3.value = "";

        attendance.value = "";


        report.innerHTML = "تمت إضافة الطالب بنجاح.";

    }

    catch (error) {

        errorMessage.innerHTML = error.message;

    }

};


// 8. Mercy Committee

mercyCommittee.onclick = function () {


    // Filter

    let struggling = studentsList.filter(student => {

        return student.average >= 40 &&
               student.average <= 49;

    });


    // Map

    let newAverages = struggling.map(student => {

        return {

            name: student.name,

            average: student.average + 5

        };

    });


    // Reduce

    let total = newAverages.reduce((sum, student) => {

        return sum + student.average;

    }, 0);


    // Prevent Division By Zero

    let finalAverage = 0;

    if (newAverages.length > 0) {

        finalAverage = total / newAverages.length;

    }


    // Display Report

    if (newAverages.length === 0) {

        report.innerHTML = `

            <div class="alert alert-info">

                لا يوجد طلاب متعثرون بين متوسط 40 و49.

            </div>

            <p>عدد الطلاب المتعثرين: 0</p>

            <p>المتوسط العام بعد الرأفة: 0</p>

        `;

        return;

    }


    report.innerHTML = `

        <h6 class="mb-3">

            عدد الطلاب المتعثرين:

            ${newAverages.length}

        </h6>


        <h6 class="mb-3">أسماء الطلاب والمتوسط بعد الرأفة:</h6>


        ${newAverages.map(student => `

            <div class="report-item">

                <strong>${escapeHTML(student.name)}</strong>

                <br>

                المتوسط بعد إضافة 5 درجات:

                ${student.average.toFixed(2)}

            </div>

        `).join("")}


        <hr>


        <h5>

            المتوسط العام بعد الرأفة:

            ${finalAverage.toFixed(2)}

        </h5>

    `;

};


// 9. Initial Display

displayStudents();

updateStatistics();