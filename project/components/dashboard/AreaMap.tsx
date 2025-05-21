"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function AreaMap() {
  return (
    <Card className="w-full lg:w-[40%]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Area Map</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Zoom In</DropdownMenuItem>
            <DropdownMenuItem>Zoom Out</DropdownMenuItem>
            <DropdownMenuItem>View Full Map</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-0 relative h-[240px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Map area"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0">
            {/* Map markers */}
            <div className="absolute top-[35%] left-[25%]">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <House className="h-4 w-4" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-blue-500 border-r-[6px] border-r-transparent"></div>
              </div>
            </div>
            <div className="absolute top-[45%] left-[55%]">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <House className="h-4 w-4" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-blue-500 border-r-[6px] border-r-transparent"></div>
              </div>
            </div>
            <div className="absolute top-[60%] left-[70%]">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <House className="h-4 w-4" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-blue-500 border-r-[6px] border-r-transparent"></div>
              </div>
            </div>
            <div className="absolute top-[25%] left-[85%]">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <House className="h-4 w-4" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-blue-500 border-r-[6px] border-r-transparent"></div>
              </div>
            </div>
            <div className="absolute top-[75%] left-[40%]">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <House className="h-4 w-4" />
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-blue-500 border-r-[6px] border-r-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function House(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}