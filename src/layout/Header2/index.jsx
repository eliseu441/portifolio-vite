import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import './header.css';
import ContactInfoWidget from '../Widget/ContactInfoWidget';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                      
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="experience"
                        onClick={() => setMobileToggle(false)}
                      >
                        Experience
                      </NavLink>
                      
                    </li>
                    <li>
                      <NavLink
                        to="projects"
                        onClick={() => setMobileToggle(false)}
                      >
                        Projects
                      </NavLink>
                    </li>
                    
                    
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs-main_header_right">
                
                <div className="cs-toolbox me-5">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <div className="cs-side_header_in">
          <div className="cs-side_header_shape" />
          <div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Me" withIcon />
          </div>
          <div className="cs-side_header_box">
            <SocialWidget />
          </div>
        </div>
      </div>
    </>
  );
}