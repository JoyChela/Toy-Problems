
function getGrade(){
    // Get input value
    const mark = parseFloat(document.getElementById('marks').value);
    
    // Validate input
    if (isNaN(mark) || mark < 0 || mark > 100) {
        alert('Please enter a valid mark between 0 and 100.');
        return;
    }
    
    // Determine grade
    let grade;
    if (mark >= 80) {
        grade = 'A';
    } else if (mark >= 60) {
        grade = 'B';
    } else if (mark >= 50) {
        grade = 'C';
    } else if (mark >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    document.getElementById('grade').textContent = `Grade: ${grade}`;
}



