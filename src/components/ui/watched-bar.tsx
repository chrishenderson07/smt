"use client"

import * as React from "react";

interface WatchedProgressProps {
    progress: number;
    duration: number;
    onChange?:Function;
}

const WatchedProgress: React.FC<WatchedProgressProps> = ({ progress, duration, onChange }) => {
    const progressPercentage = (progress / duration) * 100;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (Number(event.target.value) / 100) * duration;
        onChange(newValue);
    };

    return (
        <div className="relative w-full h-2">
            <input 
                type="range" 
                value={progressPercentage}
                onChange={handleChange}
                className="range pr-6  z-10  absolute w-full h-full  rounded-lg appearance-none cursor-pointer "
            />
        </div>
    );
};

export { WatchedProgress };