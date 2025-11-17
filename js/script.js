const hamburgerButton = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navlinks');
const navLinks = document.querySelectorAll('.navlinks a');

hamburgerButton.addEventListener('click', () => {
  const isOpened = hamburgerButton.getAttribute('aria-expanded') === 'true';
  hamburgerButton.setAttribute('aria-expanded', !isOpened);
  
  navMenu.classList.toggle('nav-open');
  document.body.classList.toggle('no-scroll');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-open')) {
      hamburgerButton.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('nav-open');
      document.body.classList.remove('no-scroll');
    }
  });
});

import {localfetchData} from './localfetch.js';
import {remotefetchData} from './remotefetch.js';
import { initDarkMode } from "./darkmode.js";
initDarkMode();
remotefetchData();
localfetchData();