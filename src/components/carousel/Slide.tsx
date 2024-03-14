"use client";
import React from "react";
import { AutoSwiperSlide, Swiper, SwiperSlide } from "@/config/swiperConfig";
import { SwiperProps } from "swiper/react";

export default function Slide({
  children,
  configs

}: {
  children: React.ReactNode;
  configs: SwiperProps
}) {

  const isAuto = configs?.slidesPerView === 'auto';
  const childrenArray = React.Children.toArray(children);

  return (
      <>
        {
        isAuto 
        ? (
          <Swiper
          configs={configs}
        >
          {childrenArray.map((child, index) => (
            <AutoSwiperSlide key={index}>{child}</AutoSwiperSlide>
          ))}
        </Swiper>
        ) : (
          <Swiper
          configs={configs}
        >
          {childrenArray.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
        )
      }
      </>
  );
}