import React from 'react'

export default function TestimonialCard() {
  return (
    <div className="
    w-[80vw] tablet:w-[60vw] md:w-[40vw] 
    mx-auto rounded-lg bg-black border border p-5  font-light py-8">
        <div className="w-full flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
         </div>
               <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase ">Rafael Santos</h6>
                    </div>
                </div>
        <div className="w-full">
            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!
            <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
        </div>
    </div>
  )
}
