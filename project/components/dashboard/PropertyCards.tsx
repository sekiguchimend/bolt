"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { propertyData } from "@/lib/data";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function PropertyCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === propertyData.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? propertyData.length - 1 : prev - 1));
  };

  const visibleCards = propertyData.slice(activeIndex, activeIndex + 3);
  const remainingCards = 3 - visibleCards.length;
  if (remainingCards > 0) {
    visibleCards.push(...propertyData.slice(0, remainingCards));
  }

  return (
    <Card className="w-full lg:w-[70%]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">物件カテゴリー</CardTitle>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-gray-200/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 bg-blue-500 text-white hover:bg-blue-600"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCards.map((property, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <div className="relative h-44 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>詳細を見る</DropdownMenuItem>
                      <DropdownMenuItem>保存する</DropdownMenuItem>
                      <DropdownMenuItem>共有する</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm font-medium px-2 py-1 rounded">
                  ¥{property.price.toLocaleString()}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-3 text-white">
                <h3 className="font-semibold text-lg">{property.title}</h3>
                <p className="text-xs opacity-80">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}