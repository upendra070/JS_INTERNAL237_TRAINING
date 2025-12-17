document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors and output
    document.querySelectorAll(".error").forEach(err => err.textContent = "");
    document.getElementById("successMsg").style.display = "none";
    document.getElementById("output").innerHTML = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const terms = document.getElementById("terms").checked;

    let gender = "";
    document.getElementsByName("gender").forEach(g => {
        if (g.checked) gender = g.value;
    });

    // Validation
    if (name === "") { document.getElementById("nameError").textContent = "Name is required"; isValid = false; }
    if (email === "" || !email.includes("@")) { document.getElementById("emailError").textContent = "Enter a valid email"; isValid = false; }
    if (gender === "") { document.getElementById("genderError").textContent = "Select gender"; isValid = false; }
    if (course === "") { document.getElementById("courseError").textContent = "Select course"; isValid = false; }
    if (!terms) { document.getElementById("termsError").textContent = "Accept terms & conditions"; isValid = false; }

    if (isValid) {
        // Show success message on the same page
        document.getElementById("successMsg").style.display = "block";

        // Display entered data below the form
        document.getElementById("output").innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Course:</strong> ${course}</p>
        `;

        // Save data to localStorage for next page
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender);
        localStorage.setItem("course", course);

        // Redirect to next page after 3 seconds
        setTimeout(() => {
            window.location.href = "result.html";
        }, 3000);
    }
});

