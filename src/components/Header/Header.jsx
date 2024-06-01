import React, { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import ScrollMagic from 'scrollmagic';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const navbar = document.querySelector(".airpods-navbar");
    const originalY = navbar.offsetTop;

    const handleScroll = () => {
      if (window.scrollY >= originalY) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ScrollMagic Controller
    let controller = new ScrollMagic.Controller();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="apple-navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li>
              <a href=""><IonIcon name="logo-apple" /></a>
            </li>
            <li><a href="">Store</a></li>
            <li><a href="">Mac</a></li>
            <li><a href="">iPad</a></li>
            <li><a href="">iPhone</a></li>
            <li><a href="">Watch</a></li>
            <li><a href="">AirPods</a></li>
            <li><a href="">TV & Home</a></li>
            <li><a href="">Only on Apple</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Support</a></li>
            <li>
              <a href=""><IonIcon name="search-outline" /></a>
            </li>
            <li>
              <a href=""><IonIcon name="bag-outline" /></a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="airpods-navbar">
        <div className="nav-content">
          <div className="nav-logo"><a href="#">AirPods Pro</a></div>
          <ul className="nav-items">
            <li><button disabled>Overview</button></li>
            <li><button>Tech Specs</button></li>
            <li><button>Compare</button></li>
            <li><button className="buy-btn">Buy</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

