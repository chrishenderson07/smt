import React, { useEffect, useRef } from "react";
import { register } from "swiper/element";

import { Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Swiper({ children, configs }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      ...configs,
      modules: [Pagination, Navigation],
      injectStyles: [
        `
          .swiper{
            overflow:visible;
            max-width:100vw;
          }

          .swiper-button-prev, .swiper-button-next{
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            z-index:100;
          }

          .swiper-button-prev {
            left:0;
          }

          .swiper-button-next {
            right:0;
          }
       
        `,
      ],
    };

    // Atribuir parâmetros ao elemento swiper
    Object.assign(swiperRef.current, params);

    // Inicializar o Swiper
    swiperRef.current?.initialize();
  }, [configs]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

export function AutoSwiperSlide({ children }) {
  return <swiper-slide style={{ width: "auto" }}>{children}</swiper-slide>;
}

export function SwiperSlide({ children }) {
  return <swiper-slide>{children}</swiper-slide>;
}