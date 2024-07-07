import React, { useState, useEffect } from "react";

import { MaquinaDeEscrever } from "./utils/automate"


function Home() {


    //<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>


    return (
        <>
            <div class='fundo2'></div>
            <div class='fundo'></div>
            <div class='home-desktop' data-aos="zoom-in">
                <div class='row  images-intro'>
                    <p class='text-who' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">WHO </p>
                    <p class='text-am' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">AM </p>
                    <p class='text-ii' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1500">I? </p>

                </div>

                <div class='description'>

                    <div class="card-intro">
                        <p class="descriptionTitle" >
                            <MaquinaDeEscrever delay="3000" text="I'm Eliseu," />
                        </p>
                        <p class="descriptionContent" >
                            <MaquinaDeEscrever delay="4300" text="a tech enthusiast who is always working on system developments. My proficiency is programming, but I deal with databases, designs, DevOps, project management, and many other tech solutions." />
                        </p>
                        <div class="share">
                            <a href="https://github.com/eliseu441/eliseu441"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg></a>

                            <a href="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                
                            </svg></a>
                            <a class='curriculum'href="https://portifolio-2024-lovat.vercel.app/cv/curriculum.pdf"><span class="tooltiptext">CV</span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                               <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
                            </svg></a>



                        </div>
                    </div>
                </div>


            </div>

            <div class="home-mobile">

                <div class='title' data-aos="fade-left" data-aos-duration="1000"><span>Welcome</span></div>
                <div class='project-subtitle' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800"><span>this is my portifolio...</span></div>
                <div class='card-intro-mobile' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500">
                    <div class='card-mobile-content'>
                        <p class='desciption-title-mobile'><MaquinaDeEscrever delay="3000" text="I'm Eliseu," /></p>
                        <p class='desciption-sub-mobile'><MaquinaDeEscrever delay="4300" text="a tech enthusiast who is always working on system developments. My proficiency is programming, but I deal with databases, designs, DevOps, project management, and many other tech solutions." /></p>
                    </div>

                    <div class="share">
                        <a href="https://github.com/eliseu441/eliseu441"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-github me-3" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                        </svg></a>

                        <a href="https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg></a>
                        

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;