"use client"

import SampleImg from "@/app/architect/observer/SampleImg";
import {useState} from "react";
import {useIntersectionObserver} from "@/app/architect/observer/useIntersectionObserver";

export default function ObserverPage() {
  const [colors, setColors] = useState<string[]>([
    "blue", "red", "green", "black", "pink",
    "yellow", "orange", "cyan", "sky", "stone",
    "gray", "slate", "zinc", "neutral", "amber",
    "lime", "emerald", "teal", "indigo", "violet",
  ])
  return (
    <div className="grid grid-cols-2 w-160">
      {colors.map((color : string, inx: number) => {
        return (
          <SampleImg key={inx} color={color}/>
        )
      })}
    </div>
  )
}