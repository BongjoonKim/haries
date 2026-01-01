"use client"

import {useIntersectionObserver} from "@/app/architect/observer/useIntersectionObserver";

interface SampleImgProps {
  color : string;
}

export default function SampleImg({color} : SampleImgProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    black: "bg-black",
    pink: "bg-pink-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
    stone: "bg-stone-500",
    gray: "bg-gray-500",
    slate: "bg-slate-500",
    zinc: "bg-zinc-500",
    neutral: "bg-neutral-500",
    amber: "bg-amber-500",      // gold 대신 사용
    lime: "bg-lime-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    purple: "bg-purple-500",
    fuchsia: "bg-fuchsia-500",
    rose: "bg-rose-500",
    white: "bg-white",  }
  
  const {ref, isVisible} = useIntersectionObserver({
    threshold: 0,
    rootMargin : "160px"
  })
  
  
  
  return (
    <div
      ref={ref}
      className={"w-80 h-80"}
    >
      {isVisible ? (
        <div className={`w-80 h-80 ${colorClasses[color]}`}>
          Image
        </div>
      ) : (
        <div className={"w-80 h-80 bg-gray-200 flex items-center justify-center"}>
          Loading...
        </div>
      )}

    </div>
  )
}