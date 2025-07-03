document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const toggleRegisterBtn = document.getElementById('toggle-register');
  const toggleLoginBtn = document.getElementById('toggle-login');

  toggleRegisterBtn.addEventListener('click', () => {
      container.classList.add("active");
  });

  toggleLoginBtn.addEventListener('click', () => {
      container.classList.remove("active");
  });

  // Sign up form validation
  const signupForm = document.getElementById("signup-form");
  const signupWarning = document.getElementById("signup-warning");
  signupForm.addEventListener("submit", function (e) {
      const inputs = signupForm.querySelectorAll("input");
      let allFilled = true;

      inputs.forEach((input) => {
          if (input.value.trim() === "") {
              allFilled = false;
          }
      });

      if (!allFilled) {
          e.preventDefault();
          signupWarning.classList.remove("hidden");
      } else {
          signupWarning.classList.add("hidden");
      }
  });

  // Sign in form validation
  const signinForm = document.getElementById("signin-form");
  const signinWarning = document.getElementById("signin-warning");
  signinForm.addEventListener("submit", function (e) {
      const inputs = signinForm.querySelectorAll("input");
      let allFilled = true;

      inputs.forEach((input) => {
          if (input.value.trim() === "") {
              allFilled = false;
          }
      });

      if (!allFilled) {
          e.preventDefault();
          signinWarning.classList.remove("hidden");
      } else {
          signinWarning.classList.add("hidden");
      }
  });
});
