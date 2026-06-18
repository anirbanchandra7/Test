import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

  // Left section animation
  gsap.from(".hero-left", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Right section animation
  gsap.from(".hero-right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
  });

  // Floating badges animation
  gsap.to(".floating-badge", {
    y: -12,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.3
  });


  // Clients content animation
  gsap.from(".clients-content", {
    scrollTrigger: {
      trigger: ".clients-section",
      start: "top 80%"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Client logos stagger animation
  gsap.from(".client-logo", {
    scrollTrigger: {
      trigger: ".clients-section",
      start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  // Optional hover effect
  gsap.utils.toArray(".client-logo img").forEach((logo) => {
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, {
        scale: 1.08,
        duration: 0.3
      });
    });

    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, {
        scale: 1,
        duration: 0.3
      });
    });
  });


  // Features heading animation
  gsap.from(".features-heading", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 75%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Feature cards stagger animation
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 70%"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.out"
  });

  // Floating icon animation
  gsap.to(".feature-icon", {
    y: -8,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.2
  });

  // Hover animation for cards
  gsap.utils.toArray(".feature-card .card").forEach((card) => {

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

  });


  // How it works heading
  gsap.from(".how-heading", {
    scrollTrigger: {
      trigger: ".how-section",
      start: "top 75%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Steps animation
  gsap.from(".how-step", {
    scrollTrigger: {
      trigger: ".how-section",
      start: "top 70%"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "back.out(1.7)"
  });

  // Number pulse animation
  gsap.to(".how-number", {
    scale: 1.08,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: 0.2
  });

  // Buttons animation
  gsap.from(".how-buttons .btn", {
    scrollTrigger: {
      trigger: ".how-buttons",
      start: "top 90%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Hover animation for steps
  gsap.utils.toArray(".how-step").forEach((step) => {

    step.addEventListener("mouseenter", () => {
      gsap.to(step, {
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    step.addEventListener("mouseleave", () => {
      gsap.to(step, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

  });


  // About image reveal
  gsap.from(".about-image", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%"
    },
    x: -120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  // About content reveal
  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%"
    },
    x: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  });

  // Checklist stagger animation
  gsap.from(".about-item", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 70%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Floating image effect
  gsap.to(".about-image", {
    y: -12,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Check icon pulse animation
  gsap.to(".about-check", {
    scale: 1.15,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    ease: "power1.inOut"
  });

  // Hover animation for list items
  gsap.utils.toArray(".about-item").forEach((item) => {

    item.addEventListener("mouseenter", () => {
      gsap.to(item, {
        x: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

  });


  // Testimonials heading
  gsap.from(".testimonial-heading", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 75%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Testimonial cards stagger reveal
  gsap.from(".testimonial-card", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 70%"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  // Floating quote icon animation
  gsap.to(".testimonial-quote", {
    y: -6,
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    ease: "sine.inOut"
  });

  // Avatar pulse animation
  gsap.to(".testimonial-avatar", {
    scale: 1.05,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    ease: "power1.inOut"
  });

  // Hover effect
  gsap.utils.toArray(".testimonial-inner").forEach((card) => {

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -12,
        rotateY: 3,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        rotateY: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });

  });

  // User info fade animation
  gsap.from(".testimonial-user", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 70%"
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.4,
    ease: "power2.out"
  });


  // Pricing heading animation
  gsap.from(".pricing-heading", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 75%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Pricing cards stagger reveal
  gsap.from(".pricing-card", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 70%"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  // Price counter style animation
  gsap.from(".pricing-price", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 70%"
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "elastic.out(1,0.5)"
  });

  // Feature list stagger
  gsap.from(".pricing-item", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 65%"
    },
    x: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out"
  });

  // Floating check icon animation
  gsap.to(".pricing-icon", {
    y: -3,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    stagger: 0.1,
    ease: "sine.inOut"
  });

  // Most popular badge pulse
  gsap.to(".pricing-badge", {
    scale: 1.08,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

 

  // Button reveal
  gsap.from(".pricing-btn", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 70%"
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.4,
    ease: "power2.out"
  });


  // FAQ heading animation
  gsap.from(".faq-heading", {
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top 75%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // FAQ items stagger reveal
  gsap.from(".faq-item", {
    scrollTrigger: {
      trigger: ".faq-wrapper",
      start: "top 80%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)"
  });

  
  // Accordion icon rotate
  document.querySelectorAll(".faq-toggle").forEach((toggle) => {

    toggle.addEventListener("click", function () {

      const icon = this.querySelector(".faq-icon svg");

      // Reset others
      document.querySelectorAll(".faq-icon svg").forEach((svg) => {
        if (svg !== icon) {
          gsap.to(svg, {
            rotate: 0,
            duration: 0.3
          });
        }
      });

      // Animate current
      gsap.to(icon, {
        rotate: icon._gsap?.rotation === 180 ? 0 : 180,
        duration: 0.3,
        ease: "power2.out"
      });

    });

  });

  // FAQ content fade animation
  gsap.from(".faq-content", {
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top 70%"
    },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
  });
