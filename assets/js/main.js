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
  backgroundMusic.volume = 0.3; // Nastavení hlasitosti na 50%
  backgroundMusic.play(); // Spuštění hudby

  var navVolume = document.getElementById('nav-volume');
  var volumeIcon = navVolume.querySelector('.ri-volume-mute-line');
  var volumeIcon2 = navVolume.querySelector('.ri-volume-up-line'); // Předpokládá, že ikona je v HTML jako ri-volume-mute-line

  function updateVolumeIcon() {
    if (backgroundMusic.muted) {
      volumeIcon.classList.add('ri-volume-mute-line');
      volumeIcon.classList.remove('ri-volume-up-line');
      volumeIcon2.classList.add('ri-volume-mute-line');
      volumeIcon2.classList.remove('ri-volume-up-line');
      navVolume.classList.remove('nav-volume-active');
    } else {
      volumeIcon.classList.remove('ri-volume-mute-line');
      volumeIcon.classList.add('ri-volume-up-line');
      volumeIcon2.classList.remove('ri-volume-mute-line');
      volumeIcon2.classList.add('ri-volume-up-line');
      navVolume.classList.add('nav-volume-active');
    }
  }

  navVolume.addEventListener('click', function () {
    backgroundMusic.muted = !backgroundMusic.muted;
    updateVolumeIcon(); // Aktualizace ikony a barvy pozadí
  });

  // Inicializace ikony a barvy pozadí při prvním načtení
  updateVolumeIcon();
  //   konec DOMContentLoaded
});
