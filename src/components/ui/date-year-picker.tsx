"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


export function DateYearPickerDemo({years}:{years:any}) {
  
    const [year, setYear] = React.useState(new Date().getFullYear()) // Define o ano padrão como o ano mais recente
  
    function chamarDataYearPick(years) {
      return (
        <Popover>
          <PopoverTrigger asChild>
             <Button>Year Here</Button>
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <ul>
              {years.map((y) => (
                <li key={y}>
                  <Button onClick={() => setYear(y)}>{y}</Button>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      )
    }
  
    return (
      <div>
        {chamarDataYearPick([2022, 2023, 2024, 2025])}
        {/* Substitua [2022, 2023, 2024, 2025] pelos anos possíveis que deseja exibir */}
        {/* ... */}
      </div>
    )
  }
  