import React from 'react';
import { getCardFetchedConfig } from '@/app/api/services/service-config';
import Slide from './Slide';


export default async function SlideWrapper({ dataType, existingData, fetchDataProp, cardProps}
  : { dataType: string, existingData?: any[], fetchDataProp?:{}, cardProps?:{}}) 
  {
  let { datas = [], Component } = await getCardFetchedConfig(dataType, existingData, {...fetchDataProp, take:14});

  return (
    <div className='wide-wrapping'>

      {
        (Array.isArray(datas) && datas?.length > 0) 
        ? (
             <>
              <Slide 
            configs={{
             spaceBetween: 20,
             slidesPerView: "auto",
            }}>
                {
                  datas.map(data =><>{Component && <Component data={data} />}</>)
                }
              </Slide>
             </>
        ) 
        : <></>
      }
    </div>
  )
}
