'use client'

import * as React from "react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

gsap.registerPlugin(ScrollTrigger)

export function Futures() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!itemsRef.current[0] || !itemsRef.current[4]) return

    gsap.fromTo(
      itemsRef.current[0],
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: itemsRef.current[0],
          start: "top 80%",
        },
      }
    )

    gsap.fromTo(
      itemsRef.current[4],
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: itemsRef.current[4],
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-64 px-8 py-10 2xl:py-6 2xl:mt-96"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div
              className="p-1"
              ref={el => (itemsRef.current[index] = el)}
            >
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-8 2xl:aspect-[4/3]">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
