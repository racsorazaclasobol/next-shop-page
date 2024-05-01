"use client";

import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./slideshow.css";

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const MobileSlideshow: FC<Props> = ({
    images,
    title,
    className = "",
}) => {
    return (
        <div className={`${className}`}>
            <Swiper
                style={{
                    width: "100vw",
                    height: "500px",
                }}
                loop={true}
                navigation={true}
                autoplay={{ delay: 2500 }}
                pagination
                modules={[FreeMode, Navigation, Autoplay, Pagination]}
                className="mySwiper2"
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <Image
                            src={`/products/${image}`}
                            width={1024}
                            height={800}
                            alt={title}
                            className="object-fill"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
