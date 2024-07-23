import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MaquinaDeEscrever } from "./utils/automate"
import { useLanguage } from '../../layout/LanguageProvider/Language.jsx';
import { portuguese, english } from '../../translate/languages.jsx';
import Preloader from "../../layout/preLoader/Preloader.jsx";
import Aos from 'aos';

function Home() {
    const { language, theme } = useLanguage();
    const [profile, setProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // callApis()
        setTimeout(() => {
            setIsLoading(false);
            setProfile(!profile);
        }, 1500);
        Aos.init({ once: true });
    }, []);
    const bg_home = theme == false ? { backgroundImage: "url('/img/bg_home.jpg')" } : { backgroundImage: "url('/img/background-white.png')", opacity: '1' }
    const card_timeline = theme == false ? { background: 'rgb(0, 0, 0)', color: '#fff' } : { background: 'white', color: 'black' }
    const experienceBg = theme == false ?
        {
            background: "rgb(0 0 0 / 60%)",
            borderBottom: '3px solid rgba(200, 200, 200)',
            borderLeft: '3px solid rgba(200, 200, 200)',
            borderTop: '3px solid rgba(200, 200, 200)',
            webkitBoxShadow: ' inset 1px -1px 20px 0px rgba(255, 255, 255,0.3)',
            mozBoxShadow: 'inset 1px -1px 20px 0px rgba(255, 255, 255,0.3)',
            boxShadow: 'inset 1px -1px 20px 0px rgba(255, 255, 255,0.3)',
        } :
        {
            background: "rgba(255, 255, 255, 0.4)",
            border: '2px solid white',
            borderRight: 'none',
            webkitBoxShadow: ' inset 1px -4px 20px 0px rgba(0,0,0,0.1)',
            mozBoxShadow: 'inset 1px -4px 20px 0px rgba(0,0,0,0.1)',
            boxShadow: 'inset 1px -4px 20px 0px rgba(0,0,0,0.1)',
        }
    const sideBio = theme == false ?
        {
            color: "white",
            cursor: !profile ? 'pointer' : 'auto',
            background: 'rgba(0, 0, 0, 0.8)',
            borderRight: '6px solid #d84f00',
            border: '2px solid #d84f00',
            webkitBoxShadow: ' inset 1px -4px 20px 0px rgba(255, 94, 0,0.8)',
            mozBoxShadow: 'inset 1px -4px 20px 0px rgba(255, 94, 0,0.8)',
            boxShadow: 'inset 1px -4px 20px 0px rgba(255, 94, 0,0.8)',
        } :
        {
            color: "black",
            cursor: !profile ? 'pointer' : 'auto',
            background: 'rgba(255, 255, 255, 0.4)',
            webkitBoxShadow: ' inset 1px -4px 20px 0px rgba(0,0,0,0.2)',
            mozBoxShadow: 'inset 1px -4px 20px 0px rgba(0,0,0,0.2)',
            boxShadow: 'inset 1px -4px 20px 0px rgba(0,0,0,0.2)',
            border: '2px solid white',
            borderColor: 'white'
        }
        
    return (
        <>
            {isLoading ? <Preloader /> : <> </>}
            <div class='page-home'>
                <div style={sideBio}
                    onClick={e => !profile ? setProfile(!profile) : ''}
                    class={`${profile == true ? 'side-bio' : 'side-bio hide-side-bio'} d-flex justify-content-center align-items-start row`}
                    id="myHeader"
                >

                    <div class="typer d-flex justify-content-center row mt-3">
                        <img src="/img/bio_icon.jpg" class='icon col-12' alt="" />
                        <div class='col-12 d-flex justify-content-center ms-4 mt-2'>
                            <div class='col-10 ms-2'>
                                {theme == false ?
                                    <a href="https://github.com/eliseu441"><img src="https://readme-typing-svg.demolab.com?font=Monsterrat&weight=700&size=22&duration=1000&pause=700&color=F7F7F7&random=false&width=435&lines=I'm+Eliseu;I'm+a+full-stack;I'm+a+designer;I'm+a+database-manager" alt="Typing SVG" /></a>
                                    :
                                    <a href="https://github.com/eliseu441"><img src="https://readme-typing-svg.demolab.com?font=Monsterrat&weight=700&size=22&duration=1000&pause=1000&color=000000&width=435&lines=I'm+Eliseu;I'm+a+Full+stack;I'm+a+database+manager;I'm+a+designer" alt="Typing SVG" /></a>
                                }
                            </div>
                        </div>
                        <div class='bio d-flex justify-content-center align-items-start row'>
                            <div class='d-flex justify-contnt-between bio-info'>
                                <h5>{language === 'portugues' ? portuguese.home.age : english.home.age}:</h5>
                                <h5>24</h5>
                            </div>
                            <div class='d-flex col-12 justify-contnt-between bio-info'>
                                <h5>{language === 'portugues' ? portuguese.home.city : english.home.city}:</h5>
                                <h5>São Paulo</h5>
                            </div>
                            <div class='d-flex justify-contnt-between bio-info'>
                                <h5>{language === 'portugues' ? portuguese.home.company : english.home.company}:</h5>
                                <h5>Alloha</h5>
                            </div>

                        </div>
                        <div class='d-flex col-12 justify-content-center'>
                            <a href="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/" target="_blank">
                                <button class="Btn linkedin me-2">
                                    <span class="svgContainer">
                                        <svg
                                            viewBox="0 0 448 512"
                                            height="1.6em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="svgIcon"
                                            fill="white"
                                        >
                                            <path
                                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span class="BG"></span>
                                </button>
                            </a>
                            <a href="https://github.com/eliseu441" target="_blank">
                                <button class="Btn github" >
                                    <span class="svgContainer">
                                        <svg fill="white" viewBox="0 0 496 512" height="1.6em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                    </span>
                                    <span class="BG"></span>
                                </button>
                            </a>

                            <button class="Btn">
                                <span class="svgContainer " >
                                    <a class='curriculum' href={`${language === 'portugues' ? "/cv/cv_pt.pdf" : "/cv/curriculum.pdf"}`}><span class="tooltiptext">CV</span> <i class="bi bi-filetype-pdf ms-2 "></i></a>

                                </span>
                            </button>
                        </div>
                        <div class='col-12 d-flex justify-content-end'>
                            <button class="Btn" onClick={e => setProfile(!profile)}>
                                <span class="svgContainer ">
                                    <a class='curriculum'>
                                        <span class="tooltiptext">hide</span>
                                        <i class="bi bi-arrow-left-circle-fill fs-1 information" style={theme == false ? { color: 'rgb(239, 88, 0)' } : { color: 'black' }}></i>
                                    </a>

                                </span>
                            </button>
                        </div>
                    </div>


                </div>
                <div class='d-flex justify-content-end' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" style={{ zIndex: 2, position: "relative" }} >
                    <div class={`${profile == true ? 'col-7 d-flex justify-content-end p-0 m-0' : 'col-11 d-flex justify-content-end p-0 m-0'} `} style={{ transition: 'all 1s' }}>
                        <div className='card-experiences d-flex align-items-center'
                            style={experienceBg}
                        >
                            <span class={`${theme == false ? 'title-experience' : 'title-experience-white'} col-sm-10 d-flex justify-content-center m-0 p-0`}>{language === 'portugues' ? portuguese.home.title : english.home.title}</span>

                        </div>
                    </div>
                </div>
                <div class="main" style={bg_home}>
                    <div class="d1" style={bg_home}></div>
                    <div class="d2" style={bg_home}></div>
                    <div class="d3" style={bg_home}></div>
                    <div class="d4" style={bg_home}></div>
                </div >


                <div className="experiences d-flex justify-content-end pe-3" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">

                    <div class={`${profile == true ? 'col-sm-7' : 'col-sm-12'} `} style={{ transition: 'all 1s' }}>


                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--teste"

                                contentStyle={card_timeline}
                                date="2020"
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                iconStyle={{ background: '#43d131', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}><i class="bi bi-flag-fill"></i></h3>}

                            >
                                <h3 className="vertical-timeline-element-title">Start</h3>

                                {language === 'portugues' ? portuguese.home.start() : english.home.start()}
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                date="2021"
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>2</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">Smarkio</h3>
                                {language === 'portugues' ? portuguese.home.smarkio() : english.home.smarkio()}

                            </VerticalTimelineElement><VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2021"
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>3</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">Zenvia</h3>
                                {language === 'portugues' ? portuguese.home.zenvia() : english.home.zenvia()}
                            </VerticalTimelineElement><VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2022"
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>4</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">Vivo</h3>
                                {language === 'portugues' ? portuguese.home.vivo() : english.home.vivo()}
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2022"
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>5</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">{language === 'portugues' ? 'Principal projeto vivo' : 'Main project vivo'}</h3>
                                {language === 'portugues' ? portuguese.home.fibrados() : english.home.fibrados()}
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2024"
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>6</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">Alloha</h3>
                                {language === 'portugues' ? portuguese.home.alloha() : english.home.alloha()}
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--teste"
                                contentStyle={card_timeline}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                                date="2024"
                                iconStyle={{ background: theme == false ? '#FF4A17' : 'black', color: 'white', display: 'flex' }}
                                icon={<h3 style={{ margin: 'auto' }}>7</h3>}

                            >
                                <h3 className="vertical-timeline-element-title">{language === 'portugues' ? 'Agora' : 'Now'}</h3>
                                {language === 'portugues' ? portuguese.home.now() : english.home.now()}

                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home;
