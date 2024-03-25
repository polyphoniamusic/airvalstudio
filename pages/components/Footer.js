// Importing Dependencies //
import React from "react";
import Image from 'next/image';
import Link from "next/link";

// Importing Socials Icons SRC
import InstagramIcon from '../../content/images/icons/social-icons/instagram-icon.svg';
import XIcon from '../../content/images/icons/social-icons/x-icon.svg';
import TiktokIcon from '../../content/images/icons/social-icons/tiktok-icon.svg';

// Importing Music Icons SRC
import SpotifyIcon from '../../content/images/icons/music-icons/spotify-icon.svg';
import TidalIcon from '../../content/images/icons/music-icons/tidal-icon.svg';
import DeezerIcon from '../../content/images/icons/music-icons/deezer-icon.svg';
import AppleMusicIcon from '../../content/images/icons/music-icons/applemusic-icon.svg';
import YoutubeIcon from '../../content/images/icons/music-icons/youtube-icon.svg';

export function Footer() {

  return (
    <>

      {/* FOOTER PART */}
      <footer id="contact">
        <div className="container">
          <div className="container-block">
            {/* FOOTER ICONS PART */}
            <div className="footer-block">

              {/*<div className="footer-block-column">
                <Link to="realisations" className="footer-block-item-list">RÉALISATIONS</Link>
                <Link to="services" className="footer-block-item-list">SERVICES</Link>
                <Link to="materiel" className="footer-block-item-list">MATÉRIEL</Link>
                <Link to="contact" className="footer-block-item-list">CONTACT</Link>
              </div>*/}

              <div className="footer-block-column">
                <div className="">
                  <Link href="https://maps.app.goo.gl/Rp8Jdm5u6cJLYaXi6" className="footer-block-item-list" target="_blank">
                    AIRVAL STUDIO
                    <span href="" className="footer-block-item-list">La Valocherie,</span>
                    <span href="" className="footer-block-item-list">Rochefort-sur-Loire,</span>
                    <span href="" className="footer-block-item-list">49190</span>
                  </Link>
                </div>
                <div className="">
                  <Link href="mailto:contact@airvalstudio.com" className="footer-block-item-list">CONTACT@AIRVALSTUDIO.COM</Link>
                  <Link href="tel:+33676443188" className="footer-block-item-list">+33676443188</Link>
                </div>
              </div>

              <div className="footer-block-column">
                <div className="">
                  <Link href="https://instagram.com/airvalstudio" className="footer-block-item-list" target="_blank">INSTAGRAM</Link>
                  <Link href="https://linkedin.com/company/airvalstudio" className="footer-block-item-list" target="_blank">LINKEDIN</Link>
                  <Link href="https://soundbetter.com/profiles/605936-tom-lecomte" className="footer-block-item-list" target="_blank">SOUNDBETTER</Link>
                </div>
              </div>
            </div>

            {/* FOOTER COPYRIGHT */}
            <div className="footer-block footer-block-legal">
              <span className="footer-copyright">© 2024 Airval Studio, par POLYPHONIA MUSIC.</span>
              <span className="footer-cgv"><Link href="cgv">Légal & CGV</Link></span>
            </div>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default Footer;
