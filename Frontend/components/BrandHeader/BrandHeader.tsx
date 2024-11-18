"use client";

import * as React from "react";

export function BrandHeader() {
  return (
        <div className="flex gap-4 overflow-hidden">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-violet-950 text-sidebar-primary-foreground">
            <svg
              className="size-4"
              viewBox="0 0 32 32"
              id="i-start"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M8 2 L8 16 22 2 22 30 8 16 8 30"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex-1 flex items-center font-semibold text-left text-md leading-tight">
            StartEaseIn
          </div>
        </div>
  );
}
