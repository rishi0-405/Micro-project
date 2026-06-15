const cards = document.querySelectorAll(".course-card");
const modal = document.getElementById("courseModal");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("modalTitle").textContent =
            card.dataset.title;

        document.getElementById("modalInstructor").textContent =
            card.dataset.instructor;

        document.getElementById("modalCategory").textContent =
            card.dataset.category;

        document.getElementById("modalRating").textContent =
            card.dataset.rating;

        document.getElementById("modalPrice").textContent =
            card.dataset.price;

        document.getElementById("modalDescription").textContent =
            card.dataset.description;

        document.getElementById("modalImage").src =
            card.dataset.image;
            enrollBtn.textContent = "Enroll Now";
enrollBtn.disabled = false;

        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
const enrollBtn = document.getElementById("enrollBtn");

enrollBtn.addEventListener("click", () => {
    alert("🎉 You are successfully enrolled in this course!");

    enrollBtn.textContent = "Enrolled ✓";
    enrollBtn.disabled = true;
});



const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});


// Authentication Modal
const authModal = document.getElementById("authModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const authClose = document.getElementById("authClose");

const authTitle = document.getElementById("authTitle");
const authName = document.getElementById("authName");
const authSubmit = document.getElementById("authSubmit");

let isSignup = false;

// Open Login
loginBtn.addEventListener("click", () => {
    authModal.style.display = "block";

    isSignup = false;
    authTitle.textContent = "Log In";
    authSubmit.textContent = "Log In";
    authName.style.display = "none";
});

// Open Signup
signupBtn.addEventListener("click", () => {
    authModal.style.display = "block";

    isSignup = true;
    authTitle.textContent = "Sign Up";
    authSubmit.textContent = "Create Account";
    authName.style.display = "block";
});

// Close Modal
authClose.addEventListener("click", () => {
    authModal.style.display = "none";
});

// Submit
authSubmit.addEventListener("click", () => {
    if (isSignup) {
        alert("🎉 Account created successfully!");
    } else {
        alert("✅ Logged in successfully!");
    }

    authModal.style.display = "none";
});