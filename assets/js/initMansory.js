jQuery(document).ready(function ($) {
  const $galleryGrid = $(".gallery__grid").masonry({
    itemSelector: ".gallery__item",
    columnWidth: ".grid__sizer",
    percentPosition: true,
    gutter: 8
  });

  let pointer = 0;
  const limit = Gallery.images.length;
  const batchSize = 10; // Mejor nombre que "offset"

  loadImages();
  $("#loadMore").click(loadImages);

  function loadImages() {
    const remaining = limit - pointer;
    const currentBatch = Math.min(batchSize, remaining);
    const fragment = document.createDocumentFragment();
    const newItems = [];

    for (let i = 0; i < currentBatch; i++) {
      const photo = Gallery.images[pointer + i];
      const newItem = `
      <div class="gallery__item">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
        <div class="gallery__overlay">
          <div class="gallery__icons">
            <div class="gallery__icon">
              <i class="fa-brands fa-instagram"></i>
              <span>@${photo.user}</span>
            </div>
            <div class="gallery__icon">
              <i class="fa-solid fa-location-dot"></i>
              <span>${photo.location}</span>
            </div>
          </div>
        </div>
      </div>`;

      const $element = $(newItem);
      fragment.appendChild($element[0]);
      newItems.push($element[0]);
    }

    $galleryGrid.append(fragment).masonry("appended", newItems);
    pointer += currentBatch;

    $galleryGrid.imagesLoaded().progress(() => {
      $galleryGrid.masonry("layout");
    });

    if (pointer >= limit) {
      $(".gallery__load-more").remove();
      $("#loadMore").off("click");
      return;
    }
  }
});

const Gallery = {
  images: [
    // 📍 La Zubia (Granada)
    {
      user: "ACPhotography",
      location: "La Zubia, Cumbre Verdes",
      alt: "Almendros",
      src: "./assets/img/gallery-1.jpg",
    },
    {
      user: "ACPhotography",
      location: "La Zubia, Cumbre Verdes",
      alt: "Árbol en el bosque",
      src: "./assets/img/gallery-2.jpg",
    },

    // 📍 Sevilla
    {
      user: "ACPhotography",
      location: "Sevilla, Plaza España",
      alt: "Torre Norte",
      src: "./assets/img/gallery-3.jpg",
    },
    {
      user: "ACPhotography",
      location: "Sevilla, Catedral de Sevilla",
      alt: "La Giralda",
      src: "./assets/img/gallery-4.jpg",
    },
    {
      user: "ACPhotography",
      location: "Sevilla",
      alt: "Torre del Oro",
      src: "./assets/img/gallery-5.jpg",
    },

    // 📍 Segovia
    {
      user: "ACPhotography",
      location: "Segovia",
      alt: "Alcázar de Segovia",
      src: "./assets/img/gallery-6.jpg",
    },
    {
      user: "ACPhotography",
      location: "Segovia",
      alt: "Acueducto de Segovia",
      src: "./assets/img/gallery-7.jpg",
    },

    // 📍 Madrid
    {
      user: "ACPhotography",
      location: "Madrid, Gran Vía",
      alt: "Atardecer en la Gran Vía",
      src: "./assets/img/gallery-8.jpg",
    },
    {
      user: "ACPhotography",
      location: "Madrid, Palacio Real",
      alt: "Palacio Real de Madrid",
      src: "./assets/img/gallery-9.jpg",
    },
    {
      user: "ACPhotography",
      location: "Madrid, Retiro",
      alt: "Monumento a Alfonso XII",
      src: "./assets/img/gallery-10.jpg",
    },

    // 📍 Barcelona
    {
      user: "ACPhotography",
      location: "Barcelona, Sagrada Familia",
      alt: "Vista de la Sagrada Familia",
      src: "./assets/img/gallery-11.jpg",
    },
    {
      user: "ACPhotography",
      location: "Barcelona, Parque Güell",
      alt: "Coloridos mosaicos en el Parque Güell",
      src: "./assets/img/gallery-12.jpg",
    },
    {
      user: "ACPhotography",
      location: "Barcelona, Montjuïc",
      alt: "Fuente mágica de Montjuïc",
      src: "./assets/img/gallery-13.jpg",
    },

    // 📍 Valencia
    {
      user: "ACPhotography",
      location: "Valencia, Ciudad de las Artes y las Ciencias",
      alt: "Hemisfèric y Museo de Ciencias",
      src: "./assets/img/gallery-14.jpg",
    },
    {
      user: "ACPhotography",
      location: "Valencia, Playa de la Malvarrosa",
      alt: "Atardecer en la Playa de la Malvarrosa",
      src: "./assets/img/gallery-15.jpg",
    },

    // 📍 Bilbao
    {
      user: "ACPhotography",
      location: "Bilbao, Museo Guggenheim",
      alt: "Escultura de Puppy en el Guggenheim",
      src: "./assets/img/gallery-16.jpg",
    },
    {
      user: "ACPhotography",
      location: "Bilbao, Casco Viejo",
      alt: "Calles del Casco Viejo de Bilbao",
      src: "./assets/img/gallery-17.jpg",
    },

    // 📍 Santiago de Compostela
    {
      user: "ACPhotography",
      location: "Santiago de Compostela, Catedral",
      alt: "Fachada de la Catedral de Santiago",
      src: "./assets/img/gallery-18.jpg",
    },
    {
      user: "ACPhotography",
      location: "Santiago de Compostela, Plaza del Obradoiro",
      alt: "Vista de la Plaza del Obradoiro",
      src: "./assets/img/gallery-19.jpg",
    },

    // 📍 Málaga
    {
      user: "ACPhotography",
      location: "Málaga, Alcazaba",
      alt: "Vista de la Alcazaba de Málaga",
      src: "./assets/img/gallery-20.jpg",
    },
    {
      user: "ACPhotography",
      location: "Málaga, Playa de la Malagueta",
      alt: "Arena dorada en la Playa de la Malagueta",
      src: "./assets/img/gallery-21.jpg",
    },

    // 📍 Toledo
    {
      user: "ACPhotography",
      location: "Toledo, Alcázar de Toledo",
      alt: "Vista del Alcázar de Toledo",
      src: "./assets/img/gallery-22.jpg",
    },
    {
      user: "ACPhotography",
      location: "Toledo, Puente de San Martín",
      alt: "Puente medieval de San Martín",
      src: "./assets/img/gallery-23.jpg",
    },

    // 📍 Córdoba
    {
      user: "ACPhotography",
      location: "Córdoba, Mezquita-Catedral",
      alt: "Arcos de la Mezquita-Catedral",
      src: "./assets/img/gallery-24.jpg",
    },
    {
      user: "ACPhotography",
      location: "Córdoba, Calleja de las Flores",
      alt: "Flores colgantes en la Calleja",
      src: "./assets/img/gallery-25.jpg",
    },

    // 📍 San Sebastián
    {
      user: "ACPhotography",
      location: "San Sebastián, Playa de La Concha",
      alt: "Playa de La Concha con vista a la bahía",
      src: "./assets/img/gallery-26.jpg",
    },
    {
      user: "ACPhotography",
      location: "San Sebastián, Monte Igueldo",
      alt: "Panorámica desde el Monte Igueldo",
      src: "./assets/img/gallery-27.jpg",
    },
  ],
};
