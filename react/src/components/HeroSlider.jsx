import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/img/banner/Banner 1 mini.png";
import banner2 from "../assets/img/banner/Banner 2 mini.png";
import banner3 from "../assets/img/banner/Banner 3 mini.png";
import banner4 from "../assets/img/banner/Banner 4 mini.png";

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                left: 20,
                display: "block",
                zIndex: 5,
            }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                right: 20,
                display: "block",
                zIndex: 5,
            }}
            onClick={onClick}
        />
    );
}

export default function HeroSlider() {
    var heroImgSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...heroImgSetting}>
            <div className="">
                <div className="flex w-full mx-auto items-center justify-center">
                    <img
                        src={banner1}
                        className="w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <div className="">
                <div className="fflex w-full mx-auto items-center justify-center">
                    <img
                        src={banner2}
                        className="w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <div className="">
                <div className="flex w-full mx-auto items-center justify-center">
                    <img
                        src={banner3}
                        className="w-full h-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </Slider>
    );
}
