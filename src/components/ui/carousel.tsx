import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface CarouselProps {
    images: string[];
    imgClassName?: string;
}

export const Carousel = ({ images, imgClassName }: CarouselProps) => {
    return (
        <div className="w-full md:max-w-90 lg:max-w-[430px] xl:max-w-[500px]">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                setWrapperSize={true}
                spaceBetween={20}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className={`${imgClassName}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
