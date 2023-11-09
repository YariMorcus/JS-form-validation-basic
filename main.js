// Helper functions
const id = id => document.getElementById(id);
const classes = classes => document.getElementsByClassName(classes);

// Get references to HTML elements
const FORM = id('form');
const USERNAME = id('username');
const EMAIL = id('email');
const PASSWORD = id('password');
const SUBMIT_BUTTON = id('btn');
const ERROR_MSG = classes('form__error');
const FAILURE_ICON = classes('failure-icon');
const SUCCESS_ICON = classes('success-icon');

/**
 * Validate given form field
 * @param {Object} id ID of HTML elem.
 * @param {Number} serial serial of HTML elem.
 * @param {String} errMessage The error message
 */
const validate = (id, serial, errMessage) => {
  if (id.value.trim() === '') {
    ERROR_MSG[serial].innerText = errMessage;
    id.classList.add('form__error-highlight');

    // Show and hide icons
    FAILURE_ICON[serial].style.opacity = 1;
    SUCCESS_ICON[serial].style.opacity = 0;
  } else {
    ERROR_MSG[serial].innerText = '';
    id.classList.remove('form__error-highlight');
    id.classList.add('form__success-highlight');

    // Show and hide icons
    FAILURE_ICON[serial].style.opacity = 0;
    SUCCESS_ICON[serial].style.opacity = 1;
  }
};

FORM.addEventListener('submit', e => {
  e.preventDefault();

  // Check input fields
  validate(USERNAME, 0, 'Username cannot be blank');
  validate(EMAIL, 1, 'Email cannot be blank');
  validate(PASSWORD, 2, 'Password cannot be blank');
});
