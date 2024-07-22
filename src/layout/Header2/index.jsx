import React, { createContext, useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DropdownList } from 'react-widgets';
import { useLanguage } from '../LanguageProvider/Language.jsx';
import SocialWidget from '../Widget/SocialWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import { portuguese, english } from '../../translate/languages.jsx';



export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const { language, setLanguage, theme, setTheme } = useLanguage();
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


  }, [language, theme]);
  const headerText = theme == false ?
        {
            color: "#f60"
        } :
        {
            color: "rgb(183, 183, 183)"
        }



  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <div className="cs-main_header">
          <div className="">
            <div className="cs-main_header_in">
              <div className="cs-main_header_left row d-flex">
                <div className='col-2 ms-2 me-2'>
                  <input id="checkbox-input" type="checkbox"
                    data-bs-toggle="modal" data-bs-target="#modalTheme"
                    onChange={(e) => setTheme(e.target.checked)}
                  />
                  <label class="switch" htmlFor="checkbox-input">
                    <svg
                      xml:space="preserve"
                      style={{ enableBackground: 'new 0 0 128 128' }}
                      viewBox="0 0 128 128"
                      height="1.2em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M77.547 120.684h-5.765l-1.698 3.012a7.477 7.477 0 0 1-6.513 3.804h-.003a7.479 7.479 0 0 1-6.513-3.804l-1.698-3.012h-5.765v-4.06h27.956v4.06z"
                        style={{ fill: '#51514c' }}
                      ></path>
                      <path
                        d="M77.547 113.65H49.591v-4.279h27.956v4.279zm0-11.711H49.591v4.279h27.956v-4.279zm38.587-32.576-12.209-3.271.92-3.434 12.209 3.271-.92 3.434zm-104.268 0-.92-3.434 12.209-3.271.92 3.434-12.209 3.271zm92.979-24.913-.92-3.434 12.209-3.272.92 3.434-12.209 3.272zm-81.69 0-12.209-3.272.92-3.434 12.209 3.272-.92 3.434zM94.82 25.247l-2.514-2.514 8.938-8.938 2.514 2.514-8.938 8.938zm-61.64 0-8.937-8.938 2.514-2.514 8.937 8.938-2.514 2.514zm43.358-11.618-3.434-.92L76.376.5l3.434.92-3.272 12.209zm-25.076 0L48.191 1.42 51.625.5l3.272 12.209-3.435.92z"
                        style={{ fill: '#a7a79b' }}
                      ></path>
                      <path
                        d="M59.802 64.141h7.535v34.934h-7.535V64.141zm3.767-44.754c-18.485-.53-33.631 14.817-33.631 33.824 0 9.781 4.016 18.581 10.431 24.753 5.637 5.423 9.222 13.147 9.222 21.111h7.84V64.141H51.75c-4.44 0-8.051-3.612-8.051-8.051s3.612-8.051 8.051-8.051 8.052 3.612 8.052 8.051v5.681h7.535V56.09c0-4.44 3.612-8.051 8.052-8.051 4.44 0 8.051 3.612 8.051 8.051s-3.612 8.051-8.051 8.051h-5.682v34.934h7.84c0-7.964 3.584-15.688 9.222-21.111C93.184 71.792 97.2 62.992 97.2 53.211c0-19.008-15.146-34.355-33.631-33.824zM51.75 50.408a5.687 5.687 0 0 0-5.681 5.681 5.687 5.687 0 0 0 5.681 5.681h5.682v-5.681a5.688 5.688 0 0 0-5.682-5.681zM75.389 61.77h-5.682v-5.681a5.688 5.688 0 0 1 5.682-5.681 5.687 5.687 0 0 1 5.681 5.681 5.687 5.687 0 0 1-5.681 5.681z"
                        style={{ fill: '#ffffff' }}
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className='combo-sidebar col-9 '>
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
                      <NavLink to="/" onClick={() => setMobileToggle(false)} style={headerText}>
                        {language === 'portugues' ? portuguese.header.home : english.header.home}
                      </NavLink>

                    </li>
                    <li>
                      <NavLink
                        to="projects"
                        onClick={() => setMobileToggle(false)} style={headerText}
                      >
                        {language === 'portugues' ? portuguese.header.projects : english.header.projects}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="repos"
                        onClick={() => setMobileToggle(false)} style={headerText}
                      >
                        {language === 'portugues' ? portuguese.header.repos : english.header.repos}
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
      <div class="modal fade" id="modalTheme" tabindex="-2" aria-labelledby="modalThemeLabel" aria-hidden="true">

        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-xl ">


          <div class="modal-content">
            <div class="modal-header">
              <p className="col-11 d-flex justify-content-center m-0 p-0" style={{color:'red', fontWeight:'bolder', fontSize:'20px', fontFamily:'Montserrat, sans-serif'}}>
                WARNING
              </p>
              <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class='modal-body pe-5 ps-5 '>
              <p  style={{color:'black', fontWeight:'bolder', fontSize:'20px', fontFamily:'Montserrat, sans-serif'}}>
                this feature is under development, may cause errors.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}