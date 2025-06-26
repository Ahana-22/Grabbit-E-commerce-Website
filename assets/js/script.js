// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}
document.querySelectorAll('.js-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    console.log('hello');

  })
})

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.querySelector('.suggestions');

// Dummy data for autocomplete suggestions
const suggestionsData = ["lehenga","shirt","gown","suit","kurta"];

// Event listener for input field
searchInput.addEventListener('input', function() {
    const userInput = searchInput.value.toLowerCase();
    const filteredSuggestions = suggestionsData.filter(suggestion =>
        suggestion.toLowerCase().includes(userInput)
    );

    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    // Display new suggestions
    filteredSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        suggestionsList.appendChild(listItem);
    });

    // Show/hide suggestions based on user input
    if (filteredSuggestions.length > 0) {
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

// Event listener for suggestion click
suggestionsList.addEventListener('click', function(event) {
    searchInput.value = event.target.textContent;
    suggestionsList.style.display = 'none';
});
