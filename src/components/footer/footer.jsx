import React from "react";

export const Footer = ()=>{
  return (
    <div className="container">
           <ul class="footer-list">
        <li class="footer-item">

          <p class="footer-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p class="footer-sub-text">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </li>
        <li class="footer-block">
          <h3 class="footer-title">Company</h3>
          <a class="footer-last-text" href="#">About</a>
          <a class="footer-last-text" href="#">Tetimonials</a>
          <a class="footer-last-text" href="#">Find a doctor</a>
          <a class="footer-last-text" href="#">Apps</a>
        </li>

        <li class="footer-block">
          <h3 class="footer-title">Region</h3>
          <a class="footer-last-text" href="#">Indonesia</a>
          <a class="footer-last-text" href="#">Singapore</a>
          <a class="footer-last-text" href="#">Hongkong</a>
          <a class="footer-last-text" href="#">Canada</a>
        </li>

        <li class="footer-block">
          <h3 class="footer-title">Help</h3>
          <a class="footer-last-text" href="#">Help center</a>
          <a class="footer-last-text" href="#">Contact support</a>
          <a class="footer-last-text" href="#">Instructions</a>
          <a class="footer-last-text" href="#">How it works</a>

          <a class="dev" href="#"></a>
        </li>
      </ul>
    </div>
  )
}