// Add your code here
function printToConsole(event) {
  event.preventDefault();

  const name = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const registration = document.getElementById('registration').value;
  const course1 = document.getElementById('course1').checked;
  const course2 = document.getElementById('course2').checked;
  const course3 = document.getElementById('course3').checked;
  const feedback = document.getElementById('feedback').value;
  console.log('**** Form Submission ****');
  console.log('Full Name: ' + name);
  console.log('Email: ' + email);
  console.log('Registration Status: ' + (registration === 'Choose an Option' ? 'None' : registration));
  console.log('Classes Taken:')
  if (course1) console.log('  Programming Languages');
  if (course2) console.log('  Operating Systems');
  if (course3) console.log('  Full Stack Web Development');
  console.log('Form Feedback:')
  console.log(' ' + (feedback === '' ? 'N/A' : feedback));
}

document.querySelector('form').addEventListener('submit', printToConsole);