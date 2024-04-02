window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".fixed-navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > navbar.offsetHeight) {
    navbar.classList.remove("transparent");
    navbar.classList.add("white-bg");
  } else {
    navbar.classList.remove("white-bg");
    navbar.classList.add("transparent");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".navbar-icon");
  const links = document.querySelector(".nav-links");

  icon.addEventListener("click", function () {
    // Toggle class 'open' untuk menampilkan atau menyembunyikan daftar link
    links.classList.toggle("open");
  });

  // Tambahkan event listener untuk menutup daftar link saat dokumen diklik di luar daftar link
  document.addEventListener("click", function (event) {
    if (!links.contains(event.target) && !icon.contains(event.target)) {
      links.classList.remove("open");
    }
  });
});

// caorousel

// Ambil elemen-elemen yang diperlukan
const slides = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicatorsContainer = document.querySelector(".carousel-indicators");
const indicators = [];
let slideIndex = 0;
let slideInterval; // Variable untuk menyimpan interval

// Fungsi untuk membuat indikator dan menambahkannya ke dalam kontainer indikator
function createIndicators() {
  for (let i = 0; i < slides.children.length; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    indicator.addEventListener("click", () => {
      goToSlide(i);
    });
    indicators.push(indicator);
    indicatorsContainer.appendChild(indicator);
  }
}

// Fungsi untuk menggeser slide ke slide tertentu
function goToSlide(index) {
  slideIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

// Fungsi untuk memperbarui indikator yang aktif
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Handler untuk tombol prev dan next
prevBtn.addEventListener("click", () => {
  slideIndex =
    (slideIndex - 1 + slides.children.length) % slides.children.length;
  goToSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.children.length;
  goToSlide(slideIndex);
});

// Fungsi untuk otomatis mengganti slide setiap 4 detik
function autoSlide() {
  slideIndex = (slideIndex + 1) % slides.children.length;
  goToSlide(slideIndex);
}

// Fungsi untuk memulai otomatis slide
function startAutoSlide() {
  slideInterval = setInterval(autoSlide, 4000);
}

// Fungsi untuk menghentikan otomatis slide
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Handler untuk mulai otomatis slide saat load halaman
window.addEventListener("load", () => {
  createIndicators();
  startAutoSlide();
});

// Handler untuk mengatur ulang interval jika mencapai slide terakhir
slides.addEventListener("transitionend", () => {
  if (slideIndex === slides.children.length - 1) {
    stopAutoSlide();
    startAutoSlide();
  }
});

// box content
(function () {
  const slidesContainer = document.querySelector(".box-content .slides");
  const slides = document.querySelectorAll(".box-content .slide");
  const prevBtn = document.querySelector(".box-content .prev-btn");
  const nextBtn = document.querySelector(".box-content .next-btn");
  let slideIndex = 0;

  // Fungsi untuk menggeser slide ke slide tertentu
  function goToSlide(index) {
    slideIndex = index;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Handler untuk tombol prev dan next
  prevBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    goToSlide(slideIndex);
  });

  nextBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    goToSlide(slideIndex);
  });

  // Mulai dengan slide pertama
  goToSlide(0);
})();

// hamburger
document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".navbar-icon");
  const links = document.querySelector(".navbar-links");

  icon.addEventListener("click", function () {
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  });
});

// animasi box content
// Function to check if an element is in viewport
// Ambil elemen .box-content
const boxContent = document.querySelector(".box-content");

// Fungsi untuk menambahkan class fadeIn ke elemen .box-content saat di-scroll
function handleScroll() {
  // Ambil posisi atas dan bawah elemen .box-content
  const boxContentTop = boxContent.getBoundingClientRect().top;
  const boxContentBottom = boxContent.getBoundingClientRect().bottom;

  // Ambil tinggi jendela browser
  const windowHeight = window.innerHeight;

  // Tentukan kapan class fadeIn harus ditambahkan
  if (boxContentTop < windowHeight && boxContentBottom >= 0) {
    boxContent.classList.add("fadeIn");
  } else {
    boxContent.classList.remove("fadeIn");
  }
}

// Tambahkan event listener untuk mengaktifkan fungsi handleScroll saat halaman di-scroll
window.addEventListener("scroll", handleScroll);

// Panggil fungsi handleScroll untuk memastikan animasi diaktifkan saat halaman dimuat
handleScroll();

let sec1 = document.querySelector(".sec-1");

window.addEventListener("scroll", () => {
  let top = window.scrollY;
  let offset = sec1.offsetTop - 150;
  let height = sec1.offsetHeight;

  if (top >= offset && top < offset + height) {
    sec1.classList.add("show-animate");
  } else {
    sec1.classList.remove("show-animate");
  }
});
