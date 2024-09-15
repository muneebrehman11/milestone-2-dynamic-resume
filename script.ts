
// document.addEventListener("DOMContentLoaded", () => {
//     const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
//     const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

//     // Function to generate the resume
//     generateResumeButton.addEventListener("click", () => {
//         // Capture the form inputs
//         const name = (document.getElementById("name") as HTMLInputElement).value;
//         const email = (document.getElementById("email") as HTMLInputElement).value;
//         const contact = (document.getElementById("contact") as HTMLInputElement).value;
//         const education = (document.getElementById("education") as HTMLInputElement).value;
//         const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
//         const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
//         // let generad_resume= "your generated resume"
//         // Generate HTML for the resume
       
//         const resumeHTML = `
        
//             <h1>${name}</h1>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Contact:</strong> ${contact}</p>
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Work Experience</h3>
//             <p>${workExperience}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;

//         // Display the generated resume
//         resumeDisplay.innerHTML = resumeHTML;
//     });
// });








// // document.addEventListener("DOMContentLoaded", () => {
// //     const form = document.getElementById("resume-form") as HTMLFormElement;
// //     const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

// //     form.addEventListener("submit", (event) => {
// //         event.preventDefault(); // Prevent form submission

// //         // Capture the form inputs
// //         const name = (document.getElementById("name") as HTMLInputElement).value;
// //         const email = (document.getElementById("email") as HTMLInputElement).value;
// //         const contact = (document.getElementById("contact") as HTMLInputElement).value;
// //         const education = (document.getElementById("education") as HTMLInputElement).value;
// //         const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
// //         const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

// //         // Generate HTML for the resume
// //         const resumeHTML = `
// //             <h1>${name}</h1>
// //             <p><strong>Email:</strong> ${email}</p>
// //             <p><strong>Contact:</strong> ${contact}</p>
// //             <h3>Education</h3>
// //             <p>${education}</p>
// //             <h3>Work Experience</h3>
// //             <p>${workExperience}</p>
// //             <h3>Skills</h3>
// //             <p>${skills}</p>
// //         `;

// //         // Display the generated resume
// //         resumeDisplay.innerHTML = resumeHTML;
// //     });
// // });





















// document.addEventListener("DOMContentLoaded", () => {
//     const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
//     const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

//     generateResumeButton.addEventListener("click", (event) => {
//         // Capture the form inputs
//         const name = (document.getElementById("name") as HTMLInputElement).value;
//         const email = (document.getElementById("email") as HTMLInputElement).value;
//         const contact = (document.getElementById("contact") as HTMLInputElement).value;
//         const education = (document.getElementById("education") as HTMLInputElement).value;
//         const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
//         const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

//         // Validate the inputs manually
//         if (!name || !email || !contact || !education || !workExperience || !skills) {
//             alert("Please fill in all the required fields.");
//             return; // Stop the function if fields are not filled
        // }

        // If validation passes, generate the resume
//         const resumeHTML = `
//             <h1>${name}</h1>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Contact:</strong> ${contact}</p>
//             <h3>Education</h3>
//             <p>${education}</p>
//             <h3>Work Experience</h3>
//             <p>${workExperience}</p>
//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;

//         // Display the generated resume
//         resumeDisplay.innerHTML = resumeHTML;
//     });
// });













document.addEventListener("DOMContentLoaded", () => {
    const generateResumeButton = document.getElementById("generate-resume") as HTMLButtonElement;
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

    generateResumeButton.addEventListener("click", (event) => {
        // Prevent form submission and page reload
        event.preventDefault();

        // Capture the form inputs
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const contact = (document.getElementById("contact") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        // Validate the inputs manually
        if (!name || !email || !contact || !education || !workExperience || !skills) {
            alert("Please fill in all the required fields.");
            return; // Stop the function if fields are not filled
        }

        // If validation passes, generate the resume
        const resumeHTML = `
            <h1>${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Display the generated resume
        resumeDisplay.innerHTML = resumeHTML;
    });
});
