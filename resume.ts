

interface UserFormData {
    name: string;
    email: string;
    education: string;
    workExperience: string;
    skills: string;
    profileimage: string;  
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("resume-output") as HTMLDivElement;
    const resumeData = localStorage.getItem("resumeData");
  
    if (resumeData) {
      const data: UserFormData = JSON.parse(resumeData);
  
      output.innerHTML = `
        <img src="${data.profileimage}" alt="Profile Picture" class="profile-image">
        <h2>${data.name}</h2>
        <hr>
        <h3>Email:</h3>
        </strong> ${data.email}
        
        <div class="resume-section">
          <h3>Education</h3>
          <p>${data.education}</p>
        </div>
        <hr>
        <div class="resume-section">
          <h3>Work Experience</h3>
          <p>${data.workExperience}</p>
        </div>
        <hr>
        <div class="resume-section">
          <h3>Skills</h3>
          <p>${data.skills}</p>
        </div>
      `;
    }
  });
  
  