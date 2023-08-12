// active-links.js

const initActiveLinks = () => {
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    // Dapatkan posisi scroll saat ini
    const currentScroll = window.scrollY;

    // Loop melalui setiap bagian pada halaman
    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Jika section ini sedang terlihat pada layar
      if (currentScroll > sectionTop - sectionHeight / 3) {
        // Dapatkan ID section ini
        const sectionId = section.getAttribute('id');

        // Loop melalui setiap tautan pada navigasi
        navLinks.forEach((link) => {
          // Hapus kelas aktif dan warna dari semua tautan
          link.classList.remove('active');
          link.classList.remove('dark:text-white');
          link.classList.remove('dark:text-primary');

          // Jika tautan ini mengarah ke bagian yang sedang aktif
          if (link.getAttribute('href') === `#${sectionId}`) {
            // Tambahkan kelas aktif pada tautan ini
            if (document.documentElement.classList.contains('dark')) {
              // Jika sedang dalam dark mode
              link.classList.remove('dark:text-white');
              link.classList.add('dark:text-primary');
            } else {
              // Jika sedang dalam light mode
              link.classList.add('active');
            }
          } else {
            // Tambahkan kelas warna pada tautan yang tidak aktif
            link.classList.add('dark:text-white');
            link.classList.remove('dark:text-primary');
          }
        });
      }
    });
  });
};

export default initActiveLinks;
