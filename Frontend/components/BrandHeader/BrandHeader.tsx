"use client";

import * as React from "react";

export function BrandHeader() {
  return (
        <div className="flex gap-4 overflow-hidden">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <svg
              className="size-4"
              viewBox="0 0 32 32"
              id="i-start"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M8 2 L8 16 22 2 22 30 8 16 8 30"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex-1 flex items-center text-lg font-semibold text-left text-sm leading-tight">
            StartEaseIn
          </div>
        </div>
  );
}
