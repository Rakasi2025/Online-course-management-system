// =====================
// LOGIN VALIDATION
// =====================
function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("❌ Please fill in both email and password");
        return false;
    }

    // Simple front-end validation (real apps need backend)
    if (!email.includes("@")) {
        alert("❌ Please enter a valid email");
        return false;
    }

    alert("✅ Login successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
    return false;
}

// =====================
// REGISTRATION VALIDATION
// =====================
function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (name === "" || email === "" || pass === "") {
        alert("❌ All fields are required!");
        return false;
    }

    if (pass.length < 6) {
        alert("❌ Password must be at least 6 characters");
        return false;
    }

    alert("✅ Registration successful! Redirecting to login...");
    window.location.href = "login.html";
    return false;
}

// =====================
// CONTACT FORM SUBMISSION
// =====================
function contact() {
    let inputs = document.querySelectorAll("form input");
    let empty = false;

    inputs.forEach(function(input){
        if(input.value.trim() === "") empty = true;
    });

    if(empty){
        alert("❌ Please fill all fields");
        return false;
    }

    alert("✅ Your message has been sent successfully!");
    return false;
}

// =====================
// COURSE ENROLLMENT
// =====================
let enrolledCourses = [];

function enroll(courseName) {
    if (enrolledCourses.includes(courseName)) {
        alert(`⚠️ You are already enrolled in ${courseName}`);
        return;
    }

    enrolledCourses.push(courseName);
    alert(`✅ You have successfully enrolled in ${courseName}`);
    console.log("Enrolled Courses:", enrolledCourses);
}

// =====================
// DASHBOARD PROGRESS SIMULATION
// =====================
function updateProgress(course, percent) {
    const progressText = document.getElementById(course + "-progress");
    if(progressText){
        progressText.innerText = `Progress: ${percent}% completed`;
    }
}

// =====================
// DYNAMIC COURSE BUTTONS
// =====================
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".course-card .btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function() {
            let courseName = btn.parentElement.querySelector("h3").innerText;
            enroll(courseName);
        });
    });
});
