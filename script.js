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
  const sgpaInputs = document.getElementsByClassName("sgpa-input");
  
  let totalSGPAs = 0;
  
  // Loop through each SGPA and compute total SGPAs
  for (let i = 0; i < sgpaInputs.length; i++) {
    const sgpa = parseFloat(sgpaInputs[i].value);
    totalSGPAs += sgpa;
  }
  
  // Compute CGPA (sum of SGPAs / number of SGPAs)
  const cgpaFromSGPA = totalSGPAs / sgpaInputs.length;
  
  // Display the result with 4 decimal places
  document.getElementById("result").innerText = `Your CGPA (from SGPAs) is: ${cgpaFromSGPA.toFixed(4)}`;
}

// Calculate required SGPA to reach target CGPA
function calculateRequiredSGPA() {
  const currentCgpa = parseFloat(document.getElementById("currentCgpa").value);
  const completedTrimesters = parseInt(document.getElementById("completedTrimesters").value);
  const targetCgpa = parseFloat(document.getElementById("targetCgpa").value);
  const remainingTrimesters = parseInt(document.getElementById("remainingTrimesters").value);

  // Total number of trimesters will be the sum of completed and remaining trimesters
  const totalTrimesters = completedTrimesters + remainingTrimesters;

  // Calculate total grade points needed to reach target CGPA
  const totalGradePointsRequired = targetCgpa * totalTrimesters;

  // Calculate the grade points accumulated so far
  const currentGradePoints = currentCgpa * completedTrimesters;

  // Calculate the required SGPA for remaining trimesters
  const requiredSGPA = (totalGradePointsRequired - currentGradePoints) / remainingTrimesters;

  // Display the required SGPA with 4 decimal places
  document.getElementById("result").innerText = `You need an SGPA of ${requiredSGPA.toFixed(4)} in each of the next ${remainingTrimesters} trimester(s) to achieve your target CGPA of ${targetCgpa}.`;
}

// Switch between modes
function switchMode(mode) {
  // Hide all modes
  document.getElementById("cgpaMode").style.display = "none";
  document.getElementById("targetCgpaMode").style.display = "none";
  document.getElementById("percentageMode").style.display = "none";

  // Show the selected mode
  if (mode === 'cgpa') {
    document.getElementById("cgpaMode").style.display = "block";
  } else if (mode === 'target') {
    document.getElementById("targetCgpaMode").style.display = "block";
  } else if (mode === 'percentage') {
    document.getElementById("percentageMode").style.display = "block";
  }
}

// Initialize to CGPA Mode
window.onload = () => switchMode('cgpa');
