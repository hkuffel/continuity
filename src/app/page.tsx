import Image from "next/image";
import SeasonSelector from "~/components/SeasonSelector";
import YearsSlider from "~/components/YearsSlider";
import { ScrollArea, ScrollBar } from "~/components/ui/ScrollArea";
import { Skeleton } from "~/components/ui/skeleton";
import { teams } from "~/data/teams";

export default function Page() {
  return (
    <>
      <main className="overflow-none flex h-screen justify-center xl:max-w-full">
        <div className="flex h-full w-full flex-col md:max-w-2xl">
          <h1 className="pl-2 text-5xl">NBA Continuity Carousel</h1>
          <div>
            <div className="flex justify-between gap-x-4 p-2">
              <div className="mx-3 w-full">
                <div className="flex items-center justify-between pt-1">
                  <div>Starting Season</div>
                </div>
                <SeasonSelector defaultValue="2018" />
              </div>
              <YearsSlider defaultValue={[1]} />
            </div>
            {teams.map((team) => (
              <div
                key={team.name}
                className="container mx-auto flex flex-col bg-white py-2"
              >
                <div className="relative">
                  <ScrollArea>
                    <div className="flex flex-row px-2">
                      <div className="my-auto flex flex-col">
                        <Image
                          src={team.logo}
                          alt="Logo"
                          width={80}
                          height={80}
                        />
                      </div>
                      <Image
                        src="https://www.basketball-reference.com/images/headshots/carusal01.jpg"
                        alt="Logo"
                        width={53}
                        height={80}
                      />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
                      <Skeleton className="h-5 w-20 bg-slate-300" />
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
