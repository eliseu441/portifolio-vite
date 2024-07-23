import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { useLanguage } from '../../layout/LanguageProvider/Language.jsx';
import { portuguese, english } from '../../translate/languages.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg5 from '/img/white_fluid.jpg';
import Preloader from "../../layout/preLoader/Preloader.jsx";
import CustomPaging from "./Slider.jsx";
import Aos from 'aos';
const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};



function Projects() {
    const { language, theme } = useLanguage();
    const [loading, setLoading] = useState(true);
    const [projeto, setProjeto] = useState(1);
    const [nomeProjeto, setNomeProjeto] = useState('vergz');
    const [description, setDescription] = useState('');
    const [profile, setProfile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // callApis()
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        Aos.init({ once: true });
        setDescription(language === 'portugues' ? portuguese.descriptions : english.descriptions)
    }, []);
    useEffect(() => {
        setDescription(language === 'portugues' ? portuguese.descriptions : english.descriptions)
    }, [language]);

    useEffect(() => {
        // callApis()
        setLoading(true)

        setNomeProjeto(projeto == 1 ? 'vergz' : projeto == 2 ? 'thiago' : 'hermes')
        setLoading(false)
    }, [projeto]);

    




    const linkHermes = 'https://www.hermesarts.com.br/'
    const linkVergz = 'https://portifolio-vergz2.vercel.app/'
    const linkThiago = 'https://adv-thiago-conde.vercel.app/'

    // Adiciona o ouvinte de eventos fora da função para evitar buscas repetidas no DOM
    const parallaxImages = document.querySelectorAll(".parallax-wrap img");
    document.addEventListener("mousemove", parallax);

    function parallax(event) {
        // Desestruturação para obter pageX e pageY do evento
        const { pageX, pageY } = event;

        parallaxImages.forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - pageX * position) / 200;
            const y = (window.innerHeight - pageY * position) / 200;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }




    const getProjeto = async (number) => {
        setLoading(true)
        await setProjeto(number)
        await setNomeProjeto(number == 1 ? 'vergz' : number == 2 ? 'thiago' : 'hermes')
        setLoading(false)
        return
    }
    const bg_projects = theme == false ? '/img/bg_home.jpg' : '/img/white_fluid.jpg'
    const borderBox = theme == false ? 
    {border: '1px solid rgb(217 61 0 / 45.4%)'} : 
    {border: '2px solid white'}
   





    return (
        <>
            {isLoading ? <Preloader /> : <> </>}
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

            <div class='default-project' style={{ backgroundImage: `url(${bg_projects})` }}>
                <div class="parallax-wrap" data-aos="zoom-in" data-aos-duration="1000">
                    <img value="4" src={bg_projects} />
                </div>
                <div class='bg-projects '>
                </div>

                <div class='page-projects row' >


                    <div class='title mt-0' data-aos="fade-left" data-aos-duration="1000"><span style={{color: theme == false ? 'white' : 'black'}}>PROJECTS</span></div>

                    <div class='carousel-vergs d-flex-justify-content-center mt-2' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="2000" >
                        <div class='row d-flex justify-content-center'>




                            <div class="slider-card col-12 d-flex justify-content-center ">
                                <div class="box row justify-content-center" style={borderBox}>
                                    <p class={projeto == 1 ? 'vergs-tattoo carousel-titles' : projeto == 2 ? 'thiago-adv carousel-titles' : 'hermes-project carousel-titles'}>

                                        <Icon icon="bxs:left-arrow"
                                            class='icon-projects'
                                            onClick={e => getProjeto(projeto - 1)}
                                            style={{ display: projeto > 1 ? 'inline' : 'none' }}
                                        />

                                        {projeto == 1 ? 'VERGZ TATTOO' : projeto == 2 ? 'ADV THIAGO' : 'HERMES PROJECT'}

                                        <Icon icon="bxs:right-arrow"
                                            class='icon-projects'
                                            onClick={e => getProjeto(projeto + 1)}
                                            style={{ display: projeto < 3 ? 'inline' : 'none' }}
                                        />
                                    </p>
                                        <div style={{ display: 'block' }}>
                                            <Link to={projeto == 1 ? linkVergz: projeto == 2 ? linkThiago : linkHermes}target="_blank">
                                                <button class='button-desc side-infos'
                                                    data-bs-toggle="modal" data-bs-target="#modalProject"
                                                >
                                                    Live Preview
                                                </button>
                                            </Link>
                                                <button class='button-desc side-production p-2'
                                                    data-bs-toggle="modal" data-bs-target="#modalProject"
                                                >
                                                   Description
                                                </button>
                                        </div>

                                    
                                    <div class='resize-carousel col-sm-10  mt-4 mb-4'>
                                    <CustomPaging projectid={projeto}></CustomPaging>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>







                </div>



                <div class="modal fade" id="modalProject" tabindex="-2" aria-labelledby="modalProjectLabel" aria-hidden="true">

                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable .modal-xl ">


                        <div class="modal-content">
                            <div class="modal-header">
                            <p className="col-11">
                            {projeto == 1 ? 'VERGZ-TATTOO' : projeto == 2 ? 'ADV-THIAGO' : 'HERMES-PROJECT'}
                               </p>
                               <button type="button" class="btn-close btn-close-white"data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class='modal-body pe-5 ps-5 mt-5'>
                               <p >
                               {projeto == 1 ? description.vergs : projeto == 2 ? description.thiago : description.hermes}
                               </p>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Projects;