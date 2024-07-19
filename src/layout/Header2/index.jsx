import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownList } from 'react-widgets';
import { useLanguage } from '../LanguageProvider/Language.jsx';
import SocialWidget from '../Widget/SocialWidget';
import './header.css';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import { portuguese, english } from '../../translate/languages.js';



export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const { language, setLanguage } = useLanguage();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  useEffect(() => {
    console.log('language', language);
  }, [language]);




  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left">
                <div className='combo-sidebar col-12 ms-5'>
                  <DropdownList
                    defaultValue={language}
                    data={['portugues', 'english']}
                    textField='name'
                    onChange={(value) => setLanguage(value)}
                  />
                </div>
              </div>
              <div className="cs-main_header_center">
                <div className="cs-nav cs-primary_font cs-medium">

                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li className="menu-item">
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        {language === 'portugues' ? portuguese.home : english.home}
                      </NavLink>

                    </li>
                    <li>
                      <NavLink
                        to="projects"
                        onClick={() => setMobileToggle(false)}
                      >
                        {language === 'portugues' ? portuguese.projects : english.projects}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="repos"
                        onClick={() => setMobileToggle(false)}
                      >
                        {language === 'portugues' ? portuguese.repos : english.repos}
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