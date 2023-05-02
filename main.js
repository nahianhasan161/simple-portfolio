import "./public/src/styles/normalize.css";
import "./public/src/styles/style.css";
import "./public/src/styles/components/header.css";
import "./public/src/styles/components/hero.css";
import "./public/src/styles/components/about.css";
import "./public/src/styles/components/techstack.css";
import "./public/src/styles/components/projects.css";
import "./public/src/styles/components/contact.css";
import "./public/src/styles/components/mobile_nav.css";

import "./public/src/styles/utills.css";

import mobileNav from "./public/src/utills/mobile-nav";
import themeToggle from "./public/src/utills/theme-toggle";
import lazyLoading from "./public/src/utills/lazy-loading";
mobileNav();
themeToggle();
lazyLoading();
