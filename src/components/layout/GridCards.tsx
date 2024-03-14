import React from 'react';
import { getCardFetchedConfig } from '@/app/api/services/service-config';

export const gridVariantStyles = {
  gameTeaserCard: 'grid grid-cols-gameTeaserCard',
  arena:"grid grid-cols-gameTeaserCard",
  tournament:"grid grid-cols-tournamentCard",
  teacher:"grid grid-cols-teacherCard"
};

type variantType = keyof typeof gridVariantStyles;



export default async function GridCards({ dataType, existingData, fetchDataProp, cardProps, variant }
  : { dataType: string, existingData?: any[], fetchDataProp?:{}, cardProps?:{}, variant:variantType}) {
  
  let { datas = [], Component } = await getCardFetchedConfig(dataType, existingData);

  return (
    <div className={`wide-wrapping max-w-[100vw] gap-6  ${gridVariantStyles[variant]}`}>
      {
        datas?.map(data => <>{Component && <Component data={data} {...cardProps}/>}</>)
      }
    </div>
  )
}
