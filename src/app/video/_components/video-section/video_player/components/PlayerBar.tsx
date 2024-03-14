import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import pageIcons from '@/utils/pageIcons';
import { TypographyH5 } from '@/components/typography/H5';
import { Badge } from '@/components/ui/badge';
import { WatchedProgress } from '@/components/ui/watched-bar';

function formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    if (seconds >= 3600) {
      return `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    } else {
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
  }



export default function PlayerBar(
    {show, setShow, videoPlaying, setPlaying, duration, setProgress, progress, handleFullScreen}
    :{show:boolean, setShow:Function, videoPlaying:boolean, setPlaying:Function, duration:number, setProgress:Function, progress:number, handleFullScreen:Function}) {
   
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (show && videoPlaying) {
            timer = setTimeout(() => {
                setShow(false);
            }, 4000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [show, videoPlaying, setShow]);


    useEffect(()=>{
        return () => {
            setShow(true);
        }
    },[videoPlaying])



    return (
        <div className={clsx('w-full absolute left-0 transition-all duration-500', {
            'bottom-10 opacity-100': show,
            'bottom-3 opacity-0': !show,
        })}>
            <div className='glassmorphism  w-[96%] py-[0.4vw] px-4 mx-auto flex-items-center rounded-lg'>
                 <Badge className='p-2 rounded-md'>Esporte</Badge>
                 <Button variant={"icon"} size={"icon"} onClick={() => setPlaying(!videoPlaying)}>
                        {videoPlaying ? <pageIcons.PauseFill className='text-[1.2rem]' /> : <pageIcons.PlayerFill className='text-[1.2rem]'/>}
                 </Button>
                 <WatchedProgress progress={progress} duration={duration} onChange={setProgress}/>
                 <TypographyH5 className='shrink-0 space-x-1 text-sm'>
                    <span>{formatTime(progress)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
                 </TypographyH5>
                 <div className='flex space-x-1'>
                 <Button variant={"icon"} size={"icon"}>
                        <pageIcons.Adjustments/>
                 </Button>
                 <Button variant={"icon"} size={"icon"}>
                        <pageIcons.FitScreen/>
                 </Button>
                 <Button variant={"icon"} size={"icon"} onClick={handleFullScreen}>
                        <pageIcons.FullScreen/>
                 </Button>
                 </div>
            </div>
        </div>
    )
}