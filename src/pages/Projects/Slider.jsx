import React, { Component } from "react";
import Slider from "react-slick";

function CustomPaging(params) {

    const projeto = params.projectid == 1 ? 'vergs' : params.projectid == 2 ? 'th' : 'hermes'
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Slider {...settings}>
            <div>
                <img src={`/img/${projeto}/${projeto}1.png`} className="imgSlider" />
            </div>
            <div>
                <img src={`/img/${projeto}/${projeto}2.png`} className="imgSlider" />
            </div>
            <div>
                <img src={`/img/${projeto}/${projeto}3.png`} className="imgSlider" />
            </div>
            <div>
                <img src={`/img/${projeto}/${projeto}4.png`} className="imgSlider" />
            </div>
        </Slider>
    );
}

export default CustomPaging;