function generatePassword() {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

  let password = '';
  let selectedCharacterSet = '';

  // Prompt for password length
  let passwordLength = parseInt(prompt('Enter the password length (between 8 and 128 characters):'));
  
  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Invalid length. Please enter a valid length (between 8 and 128 characters):'));
  }

  // Prompt for character types
  const includeLowercase = confirm('Include lowercase characters?');
  if (includeLowercase) selectedCharacterSet += lowercaseChars;

  const includeUppercase = confirm('Include uppercase characters?');
  if (includeUppercase) selectedCharacterSet += uppercaseChars;

  const includeNumbers = confirm('Include numeric characters?');
  if (includeNumbers) selectedCharacterSet += numberChars;

  const includeSpecialChars = confirm('Include special characters?');
  if (includeSpecialChars) selectedCharacterSet += specialChars;

  // Validate at least one character type is selected
  while (selectedCharacterSet.length === 0) {
    alert('You must select at least one character type for the password.');
    return;
  }

  // Generate the password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedCharacterSet.length);
    password += selectedCharacterSet[randomIndex];
  }

  // Display the generated password
  alert('Your generated password is:\n' + password);
}
