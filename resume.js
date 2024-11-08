// resume.ts
document.addEventListener("DOMContentLoaded", function () {
    var output = document.getElementById("resume-output");
    var resumeData = localStorage.getItem("resumeData");
    if (resumeData) {
        var data = JSON.parse(resumeData);
        output.innerHTML = "\n        <img src=\"".concat(data.profileimage, "\" alt=\"Profile Picture\" class=\"profile-image\">\n        <h2>").concat(data.name, "</h2>\n        <hr>\n        <h3>Email:</h3>\n        </strong> ").concat(data.email, "\n        \n        <div class=\"resume-section\">\n          <h3>Education</h3>\n          <p>").concat(data.education, "</p>\n        </div>\n        <hr>\n        <div class=\"resume-section\">\n          <h3>Work Experience</h3>\n          <p>").concat(data.workExperience, "</p>\n        </div>\n        <hr>\n        <div class=\"resume-section\">\n          <h3>Skills</h3>\n          <p>").concat(data.skills, "</p>\n        </div>\n      ");
    }
});
