// My array

const products = [
  {
    name: 'Sněhová koule',
    'src-img': 'assets/img/accessory1.png',
    price: 94.5,
    category: 'Doplňky do domácnosti',
  },
  {
    name: 'Vánoční lízátko',
    'src-img': 'assets/img/accessory2.png',
    price: 15.4,
    category: 'Vánoční dobroty',
  },
  {
    name: 'Andělíček',
    'src-img': 'assets/img/accessory3.png',
    price: 34.2,
    category: 'Doplňky do domácnosti',
  },
  {
    name: 'Červená baňka',
    'src-img': 'assets/img/accessory4.png',
    price: 42.5,
    category: 'Vánoční dekorace',
  },
  {
    name: 'Vánoční překvapení',
    'src-img': 'assets/img/accessory5.png',
    price: 99.99,
    category: 'Velké překvapení',
  },
];

// <!--=============== SWIPER JS JS ===============-->

document.addEventListener('DOMContentLoaded', function () {
  // Funkce pro generování produktů
  function generateProducts() {
    const productsContainer = document.querySelector(
      '.accessory__container.swiper-wrapper'
    );

    products.forEach(function (item) {
      // Formátování ceny na dvě desetinná místa
      let displayedPrice = item.price.toFixed(2);

      const productDiv = document.createElement('div');
      productDiv.className = 'swiper-slide accessory__content';

      productDiv.innerHTML = `
  <img src="${item['src-img']}" alt="" class="accessory__img">
  <h3 class="accessory__title">${item.name}</h3>
  <span class="accessory__category">${item.category}</span>
  <span class="accessory__price">${displayedPrice} Kč</span>
  <a href="#" class="button accessory__button"><i class='ri-shopping-cart-line'></i></a>
`;

      productsContainer.appendChild(productDiv);
    });
  }

  // Spustit generování produktů po načtení DOM
  generateProducts();

  var swiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
  });

  // Nastavení hudby
  var backgroundMusic = document.getElementById('background-music');
  backgroundMusic.volume = 0.3; // Nastavení hlasitosti na 30%

  var navVolume = document.getElementById('nav-volume');
  var volumeIcon = navVolume.querySelector('.ri-volume-mute-line');
  var volumeIcon2 = navVolume.querySelector('.ri-volume-up-line');

  function toggleMusic() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      volumeIcon.classList.remove('ri-volume-mute-line');
      volumeIcon.classList.add('ri-volume-up-line');
      volumeIcon2.classList.remove('ri-volume-mute-line');
      volumeIcon2.classList.add('ri-volume-up-line');
      navVolume.classList.add('nav-volume-active'); // Přidání třídy, když hudba hraje
    } else {
      backgroundMusic.pause();
      volumeIcon.classList.add('ri-volume-mute-line');
      volumeIcon.classList.remove('ri-volume-up-line');
      volumeIcon2.classList.add('ri-volume-mute-line');
      volumeIcon2.classList.remove('ri-volume-up-line');
      navVolume.classList.remove('nav-volume-active'); // Odebrání třídy, když hudba nehraje
    }
  }

  navVolume.addEventListener('click', function () {
    toggleMusic();
  });
  //   konec DOMContentLoaded
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const themeButton = document.getElementById('nav-theme');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-lightbulb-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'ri-moon-line'
    : 'ri-lightbulb-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
