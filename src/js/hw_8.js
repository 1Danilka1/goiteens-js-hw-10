// ============================================================ №1 ==============================================================================
let counterValue = 0;
const counterSpan = document.querySelector('#value');
const positiveButton = document.querySelector(`[data-action="increment"]`);
const negativeButton = document.querySelector(`[data-action="decrement"]`);

negativeButton.addEventListener('click', onNegativeClick);

positiveButton.addEventListener('click', onPositiveClick);


const onNegativeClick = () => {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
}

const onPositiveClick = () => {
    counterValue += 1;
    counterSpan.textContent = counterValue;
}

// ============================================================ №2 ==============================================================================
const textInput = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    span.textContent = currentTarget.value.trim();
  } else {
    span.textContent = 'Anonymous'
  }
};

textInput.addEventListener('input', getInputValue)
