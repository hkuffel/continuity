"use client";

import { Label } from "@radix-ui/react-select";
import { type SliderProps } from "@radix-ui/react-slider";
import React from "react";
import { Slider } from "./ui/Slider";

interface YearsSliderProps {
  defaultValue: SliderProps["defaultValue"];
}

export default function YearsSlider({ defaultValue }: YearsSliderProps) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className="mx-3 grid w-full gap-2">
      <div className="grid gap-4">
        <div className="flex items-center pr-2">
          <div>Years:</div>
          <span className="text-muted-foreground hover:border-border w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm">
            {value}
          </span>
        </div>
        <Slider
          id="futureYears"
          max={20}
          defaultValue={value}
          step={1}
          onValueChange={setValue}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          aria-label="Future Years"
        />
      </div>
    </div>
  );
}
