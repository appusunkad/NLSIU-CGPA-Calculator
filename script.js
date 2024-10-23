// Grade mapping object for grade-based CGPA calculation
const gradeValues = {
  "O": 7,
  "A+": 6,
  "A": 5,
  "B+": 4,
  "B": 3,
  "C+": 2,
  "C": 1,
  "F": 0
};

// Add a new course input row for grade
function addCourse() {
  const coursesDiv = document.getElementById("courses");
  
  const newCourse = document.createElement("div");
  newCourse.className = "course";
  newCourse.innerHTML = `
    <label for="grade">Grade:</label>
    <select class="grade" required>
      <option value="O">O</option>
      <option value="A+">A+</option>
      <option value="A">A</option>
      <option value="B+">B+</option>
      <option value="B">B</option>
      <option value="C+">C+</option>
      <option value="C">C</option>
      <option value="F">F</option>
    </select>
  `;
  
  coursesDiv.appendChild(newCourse);
}

// Calculate CGPA based on grades
function calculateCGPA() {
  const grades = document.getElementsByClassName("grade");
  
  let totalGradePoints = 0;
  
  // Loop through each course and compute total grade points
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i].value;
    const gradePoint = gradeValues[grade];  // Get the grade value from the mapping
    
    totalGradePoints += gradePoint;
  }
  
  // Compute CGPA (sum of grade values / number of grades)
  const cgpa = totalGradePoints / grades.length;
  
  // Display the result with 4 decimal places
  document.getElementById("result").innerText = `Your CGPA (from grades) is: ${cgpa.toFixed(4)}`;
}

// Add a new input row for SGPA
function addSGPA() {
  const sgpasDiv = document.getElementById("sgpas");
  
  const newSGPA = document.createElement("div");
  newSGPA.className = "sgpa";
  newSGPA.innerHTML = `
    <label for="sgpa">SGPA:</label>
    <input type="number" step="0.01" min="0" max="10" class="sgpa-input" required>
  `;
  
  sgpasDiv.appendChild(newSGPA);
}

// Calculate CGPA based on SGPAs
function calculateCGPAFromSGPA() {
  const sgpas = document.getElementsByClassName("sgpa-input");
  
  let totalSGPA = 0;
  
  // Loop through each SGPA input and compute total SGPA
  for (let i = 0; i < sgpas.length; i++) {
    const sgpa = parseFloat(sgpas[i].value);
    totalSGPA += sgpa;
  }
  
  // Compute CGPA (sum of SGPAs / number of trimesters)
  const cgpaFromSGPA = totalSGPA / sgpas.length;
  
  // Display the result with 4 decimal places
  document.getElementById("result").innerText = `Your CGPA (from SGPAs) is: ${cgpaFromSGPA.toFixed(4)}`;
}
