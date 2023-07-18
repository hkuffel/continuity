"use client";
import Image from "next/image";
import { useState } from "react";
import { ScrollArea, ScrollBar } from "~/components/ui/ScrollArea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";
import { Slider } from "~/components/ui/Slider";
import { Skeleton } from "~/components/ui/skeleton";
import {
  data,
  seasons,
  teams,
  type Team,
  type player,
  type seasonRoster,
} from "~/data/teams";

interface enrichedPlayer extends player {
  distinctTeams: string[];
  teamsCount: number;
  seasonsCount: number;
  goldStatus: boolean;
}

interface enrichedRoster extends seasonRoster {
  enrichedPlayers: enrichedPlayer[];
  goldPlayersCount: number;
  teamObject?: Team;
  key: string;
}

function getNumbersInRange(start: number, end: number): number[] {
  const numbers: number[] = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
}

function enrichPlayerData(
  givenPlayer: player,
  rosters: seasonRoster[],
  yearsCount: number
): enrichedPlayer {
  const relevantRosters = rosters.filter((roster) => {
    return roster.seasonRoster.some((player) => player.id == givenPlayer.id);
  });
  const seasonCount = relevantRosters.length;
  console.log("season count: " + seasonCount.toString());
  const distinctTeams: string[] = [];
  relevantRosters.forEach((roster) => {
    if (!distinctTeams.includes(roster.team)) {
      distinctTeams.push(roster.team);
    }
  });
  const goldStatus = seasonCount === yearsCount && distinctTeams.length === 1;
  return {
    ...givenPlayer,
    distinctTeams: distinctTeams,
    teamsCount: distinctTeams.length,
    seasonsCount: seasonCount,
    goldStatus: goldStatus,
  };
}

export default function Page() {
  // const [isLoading, setIsLoading] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState("2020-21");
  const [selectedYears, setSelectedYears] = useState("1");

  const startingSeasonEndYear: number = parseInt(
    selectedSeason.slice(0, 2) + selectedSeason.slice(5, 7)
  );
  const futureYears: number = parseInt(selectedYears);
  const endingSeasonEndYear: number = startingSeasonEndYear + futureYears;
  const relevantYears: number[] = getNumbersInRange(
    startingSeasonEndYear,
    endingSeasonEndYear
  );
  console.log("relevant years: " + relevantYears.length.toString());
  const relevantData: seasonRoster[] = data.filter((seasonRoster) => {
    if (relevantYears.includes(seasonRoster.season)) {
      return seasonRoster;
    }
  });
  const relevantTeams = teams.filter((team) => {
    const relevantTeamData = relevantData.filter((seasonRoster) => {
      return seasonRoster.team === team.abbreviation;
    });
    if (relevantTeamData.length == relevantYears.length) {
      return team;
    }
  });
  const relevantTeamAbbreviations: string[] = relevantTeams.map((team) => {
    return team.abbreviation;
  });
  const displayedRosters: seasonRoster[] = relevantData.filter(
    (seasonRoster) => {
      return (
        seasonRoster.season === endingSeasonEndYear &&
        relevantTeamAbbreviations.includes(seasonRoster.team)
      );
    }
  );

  const enrichedRosters: enrichedRoster[] = displayedRosters.map((roster) => {
    const enrichedPlayers = roster.seasonRoster.map((player) => {
      return enrichPlayerData(player, relevantData, relevantYears.length);
    });
    const sortedEnrichedPlayers = enrichedPlayers.sort((a) => {
      return a.goldStatus ? -1 : 1;
    });

    const goldPlayersCount = enrichedPlayers.filter((player) => {
      return player.goldStatus;
    }).length;
    const teamObject = teams.filter((team) => {
      return team.abbreviation === roster.team;
    })[0];
    const enrichedRoster = {
      ...roster,
      enrichedPlayers: sortedEnrichedPlayers,
      goldPlayersCount: goldPlayersCount,
      teamObject: teamObject,
      key: roster.team + roster.season.toString(),
    };
    return enrichedRoster;
  });

  const sortedEnrichedRosters = enrichedRosters.sort((a, b) => {
    return b.goldPlayersCount - a.goldPlayersCount;
  });
  return (
    <>
      <main className="overflow-none flex h-screen justify-center xl:max-w-full">
        <div className="flex h-full w-full flex-col md:max-w-2xl">
          <h1 className="pl-2 text-5xl">NBA Continuity Explorer</h1>
          <div>
            <div className="flex justify-between gap-x-4 p-2">
              <div className="mx-3 w-full">
                <div className="flex items-center justify-between pt-1">
                  <div>Starting Season</div>
                </div>
                <Select
                  defaultValue={selectedSeason}
                  onValueChange={(event) => setSelectedSeason(event)}
                >
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
              </div>
              <div className="mx-3 w-full">
                <div className="flex items-center justify-between pt-1">
                  <div>Years into the Future</div>
                </div>
                <Select
                  defaultValue={selectedYears}
                  onValueChange={(event) => setSelectedYears(event)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a number of years into the future" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {getNumbersInRange(1, 2023 - startingSeasonEndYear).map(
                      (i) => (
                        <SelectItem key={i} value={i.toString()}>
                          {i}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {sortedEnrichedRosters.map((roster) => (
              <div
                key={roster.key}
                className="container mx-auto flex flex-col bg-white py-2"
              >
                <div className="relative">
                  <ScrollArea>
                    <div className="flex">
                      <div className="my-auto flex min-w-[4rem] flex-col">
                        <img
                          src={
                            roster.teamObject?.logo ??
                            "https://www.basketball-reference.com/images/bbr/nba_150x150.png"
                          }
                          alt="Logo"
                          width={80}
                          height={80}
                        />
                      </div>
                      {roster.enrichedPlayers.map((player) => (
                        <div
                          key={player.id}
                          className="my-auto flex min-w-[4rem] flex-col"
                        >
                          <img
                            src={
                              "https://www.basketball-reference.com/images/headshots/" +
                              player.id +
                              ".jpg"
                            }
                            alt="Logo"
                            width={53}
                            height={80}
                          />
                          <div className="text-xs">
                            {player.goldStatus ? (
                              <span className="text-yellow-500">
                                {player.name}
                              </span>
                            ) : (
                              <span>{player.name}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="invisible" />
                  </ScrollArea>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
