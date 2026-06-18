
    document.addEventListener('DOMContentLoaded', function () {
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      const sections = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

      const activateLink = (link) => {
        navLinks.forEach(item => {
          item.classList.remove('text-primary');
          item.classList.add('text-dark');
        });
        if (link) {
          link.classList.add('text-primary');
          link.classList.remove('text-dark');
        }
      };

      navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
          activateLink(link);
        });
        link.addEventListener('mouseleave', () => {
          const activeLink = document.querySelector('.navbar-nav .nav-link.active');
          activateLink(activeLink);
        });
        link.addEventListener('click', (event) => {
          navLinks.forEach(item => item.classList.remove('active'));
          link.classList.add('active');
          activateLink(link);
        });
      });

      const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSection = null;

        sections.forEach(section => {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSection = section;
          }
        });

        if (currentSection) {
          const newActive = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection.id}"]`);
          if (newActive) {
            navLinks.forEach(item => item.classList.remove('active'));
            newActive.classList.add('active');
            activateLink(newActive);
          }
        }
      };

      window.addEventListener('scroll', onScroll);
      onScroll();
    });
