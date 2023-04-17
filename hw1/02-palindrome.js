const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput() {
  element = document.getElementById('response');
  if (isNaN(elem.value)) {
    element.classList.remove('text-success');
    element.classList.add('text-danger');
    element.innerHTML = 'This is not a number, please try again.';
    return;
  }
  if (elem.value == '') {
    element.innerHTML = '';
    return;
  }
  if (parseInt(elem.value) >= 0) {
    var original = elem.value;
    var reversed = original.split('');
    reversed = reversed.reverse();
    reversed = reversed.join('');

    if (original.valueOf() === reversed.valueOf()) {
      element.classList.remove('text-danger');
      element.classList.add('text-success');
      element.innerHTML = 'Yes. This is a palidrome!';
    } else {
      element.classList.remove('text-success');
      element.classList.add('text-danger');
      element.innerHTML = 'No. Try Again.';
    }
  } else {
    element.classList.remove('text-success');
    element.classList.add('text-danger');
    element.innerHTML = 'Not a positive number, try again.';
  }
}
