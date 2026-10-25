const form = document.getElementById("create-account");
// elements sign in;
let usernameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");
const signInButton = document.getElementById("sign-in");

// Toggle
const togglePass = document.getElementById("toggle-password");
const togglePass2 = document.querySelector(".confirm-passwordToggle1");
const togglePass3 = document.querySelector(".confirm-passwordToggle2");
// elements Sign up
const username = document.getElementById("username");
const email = document.getElementById("email");
const passowrdUser1 = document.getElementById("passowrd-user-1");
const passowrdUser2 = document.getElementById("password-user-2");
const acceptTerms = document.getElementById("check2");
let err = document.querySelector(".error-message");

/**
 * To Every Developer Understand The Function
 *  Toggles the password input between hidden and visible states.
 * Adds a click event listener to the password Toggle Button When
 * The Button is clicked the function checks the current input type
 * and switches it between "Password" And "Text"
 *
 * It Also Updates The BUTTON Aria Attribute
 *
 *  * Dependencies:
 * - passwordInput: The password input HTML element.
 * - togglePass: The button used to show or hide the password.
 *
 * Behavior:
 *  * - If the password is hidden, clicking the button reveals it.
 * - If the password is visible, clicking the button hides it.
 * - Updates aria-pressed to reflect the visibility toggle state.
 * - Updates aria-label to describe the button's current action.
 *@returns {void} this function does not return a value......
 */
TogglerPassword(togglePass, passwordInput);
TogglerPassword(togglePass2, passowrdUser1);
TogglerPassword(togglePass3, passowrdUser2);
// TogglerPassword(togglepassInRegister)
function TogglerPassword(toggler, input) {
  toggler.addEventListener("click", () => {
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    toggler.setAttribute("aria-pressed", isHidden);
  });
}
/**
 * Attach validation logic to the username and password inputs.
 *
 * the validate() function check each input when the user
 * moves focus away from it.
 *
 */
validate(usernameInput, "userName");
validate(passwordInput, "password");
validate(username, "username");
validate(email, "email", true);
validate(passowrdUser1, "password", false, true);
validate(passowrdUser2, "password", false, true);
function validate(input, msgtoUser, isEmail = false, isConfirm = false) {
  input.addEventListener("focusout", (e) => {
    let val = e.currentTarget.value.trim();
    let len = val.length;
    let mymsg = "";
    let emailPattern = /[a-z]@\w+\.com/gi.test(val);
    if (isEmail) {
      mymsg = `${msgtoUser} Must Include @AnyLetter.com`;
      err.innerText = mymsg;
      err.style.opacity = "1";
      if (emailPattern) {
        mymsg = `Congratz Passed: ${msgtoUser} `;
        err.innerText = mymsg;
        err.style.opacity = "1";
        setTimeout(() => {
          err.style.opacity = "0";
        }, 500);
      }
    } else if (isConfirm && len > 5) {
      let pass1 = passowrdUser1.value;
      let pass2 = passowrdUser2.value;
      if (pass1 == pass2) {
        mymsg = `Congratz Passed: ${msgtoUser} `;
        err.innerText = mymsg;
        err.style.opacity = "1";
        setTimeout(() => {
          err.style.opacity = "0";
        }, 500);
      }
    } else if (isConfirm && len < 5) {
      mymsg = `${msgtoUser} is must be 6character and match`;
      err.innerText = mymsg;
      err.style.opacity = "1";
    } else if (!isConfirm && len < 5) {
      mymsg = `${msgtoUser} is must be 6character`;
      err.innerText = mymsg;
      err.style.opacity = "1";
    } else if (!isConfirm && len > 5) {
      mymsg = `Congratz Passed: ${msgtoUser} `;
      err.innerText = mymsg;
      err.style.opacity = "1";
      setTimeout(() => {
        err.style.opacity = "0";
      }, 500);
    }
  });
}

/**
 * add class Flip in Card
 */
addClass(document.querySelector(".sign-up"), "add");
addClass(document.querySelector(".back-toSignIn"), "remove");
function addClass(el, determine) {
  el.addEventListener("click", () => {
    if (determine == "add")
      el.parentElement.parentElement.classList.add("flip");
    else el.parentElement.parentElement.classList.remove("flip");
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let mymsg = "";
  if (passowrdUser1.value === passowrdUser2.value) {
    mymsg = "Congratz";
    err.innerText = mymsg;
    err.style.opacity = "1";
    setTimeout(() => {
        err.style.opacity = '0'
    }, 1000);
  } else {
    mymsg = "password Not Match not Confirm ";
    err.innerText = mymsg;
    err.style.opacity = "1";
  }
});
