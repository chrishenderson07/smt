import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import pageIcons from '@/utils/pageIcons';
import { Button } from '../ui/button';
  

export default function CardFilter() {
  return (
    <Sheet>
    <SheetTrigger className='flex-items-center'>
        <pageIcons.Filter/>
        <span>Filter</span>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          <div className="flex-between-center pt-6">
             <span className='text-xl'>Filtro</span>
             <div className="flex-items-center">
               <Button>Aplicar</Button>
               <Button>Resetar</Button>
             </div>
          </div>
        </SheetTitle>
        <SheetDescription>
          <div>
            
          </div>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  )
}
