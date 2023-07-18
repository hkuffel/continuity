"use client";

import React from "react";
import { seasons } from "~/data/teams";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

interface SeasonSelectorProps {
  defaultValue: string;
}

export default function SeasonSelector({ defaultValue }: SeasonSelectorProps) {
  const [selectedSeason, setSelectedSeason] = React.useState<String>();
  return (
    <Select defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a starting season" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {seasons.map((season) => (
          <SelectItem key={season} value={season}>
            {season}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
