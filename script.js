

const $dropdown = document.querySelector('.dropdown');

const $trigger = $dropdown.querySelector('.dropdown__trigger');
const $selectedValueDisplay = $dropdown.querySelector('.dropdown__value');
const $list = $dropdown.querySelector('.dropdown__list');
const $arrow = $dropdown.querySelector('.arrow');

const $items = $dropdown.querySelectorAll('.dropdown__item');

// toggle dropdown
$trigger.addEventListener('click', () => {
  $trigger.classList.toggle('dropdown__trigger--open');
  $arrow.classList.toggle('arrow--open');
  $list.classList.toggle('dropdown__list--open');
})

// close by clicking outside
document.addEventListener('click', (e) => {
  if (!$dropdown.contains(e.target)) {
    $trigger.classList.remove('dropdown__trigger--open');
    $arrow.classList.remove('arrow--open');
    $list.classList.remove('dropdown__list--open');
  }
});

// item selection
$items.forEach(item => {

  item.addEventListener('click', () => {

      // remove previous selection
      $items.forEach(i => i.classList.remove('dropdown__item--selected'));
      
      // update display
      item.classList.add('dropdown__item--selected');
      $selectedValueDisplay.textContent = item.textContent;
      
      // close dropdown
      $list.classList.remove('dropdown__list--open');
      $trigger.classList.remove('dropdown__trigger--open');
      $arrow.classList.remove('arrow--open');
  });
});