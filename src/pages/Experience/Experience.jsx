import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



function Experience() {

    useEffect(() => {

    }, []);


    return (
        <>

            <div class='stars'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <div class='page-experience row'>

                <div class='title' data-aos="fade-right" data-aos-duration="1500"><span>THE ROAD SO FAR...</span></div>

                
                <div className="row mt-5" >
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            date="2020"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>1</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Beginning of a developer career</h3>
                            <p>
                                I was studying computer engineering and in parallel a Web Course with JavaScript at Udemy and alura, this gave me the base to deal with programming using front-end techs like css and react.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            date="2021"
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>2</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Smarkio</h3>
                            <p>
                                Start working on system developments having daily contact with creation of api services using node, this was a good experience to know a lot of things about node frameworks and api's structure.
                            </p>
                        </VerticalTimelineElement><VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2021"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>3</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Zenvia</h3>
                            <p>
                                This year i have started some courses to improve my skills, the main ones are Rocketseat and Alura courses with focus on back-end development using javascript and database structures.
                            </p>
                        </VerticalTimelineElement><VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2022"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>4</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Vivo</h3>
                            <p>
                                I was hired at vivo, by far this is where I gained more knowledge, not just as a developer but as a project designer, infrastructure maintenance, databases creation and maintenance, physical servers, cloud server deployments and more.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2024"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>5</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Alloha</h3>
                            <p>
                                At alloha i've working with a legacy project made in node, angular, vite, docker, mysql(5.6), php and some old tech's, my job is about maintenance this service and analize troubletickets finding solutions for bugs.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--teste"
                            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                            date="2024"
                            iconStyle={{ background: '#FF4A17', color: 'white', display: 'flex' }}
                            icon={<h3 style={{ margin: 'auto' }}>6</h3>}

                        >
                            <h3 className="vertical-timeline-element-title">Now</h3>
                            <p>
                               besides my job i'm working on some projects to improve my skills and know more ways to deal with problems involving techs like db, etl, infra and code troubles, i've made many solutions(in many lang's like rust, c#, js, ts) and deployed them on amazon ec2, eds(postgres-db), google cloud vm's and digital ocean vm's, this gave me a lot about devops operations, you can contact me to acess this servers for analisys.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>




            </div>




            

        </>
    )
}

export default Experience;
