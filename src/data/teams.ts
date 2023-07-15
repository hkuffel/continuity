export interface Team {
  name: string;
  abbreviation: string;
  logo: string;
}

export interface seasonRoster {
  season: number;
  roster: player[];
}

export interface player {
  name: string;
  playerId: string;
  image: string;
}

export const seasons: string[] = [
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
  "2012-13",
  "2011-12",
  "2010-11",
  "2009-10",
  "2008-09",
  "2007-08",
  "2006-07",
  "2005-06",
  "2004-05",
  "2003-04",
  "2002-03",
  "2001-02",
  "2000-01",
  "1999-00",
];

export const teams: Team[] = [
  {
    abbreviation: "LAL",
    name: "Los Angeles Lakers",
    logo: "https://content.sportslogos.net/logos/6/237/thumbs/23773242024.gif",
  },
  {
    abbreviation: "LAC",
    name: "Los Angeles Clippers",
    logo: "https://content.sportslogos.net/logos/6/236/thumbs/23637762019.gif",
  },
  {
    abbreviation: "DEN",
    name: "Denver Nuggets",
    logo: "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif",
  },
  {
    abbreviation: "HOU",
    name: "Houston Rockets",
    logo: "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif",
  },
  {
    abbreviation: "OKC",
    name: "Oklahoma City Thunder",
    logo: "https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif",
  },
  {
    abbreviation: "UTA",
    name: "Utah Jazz",
    logo: "https://content.sportslogos.net/logos/6/234/thumbs/23485132023.gif",
  },
  {
    abbreviation: "DAL",
    name: "Dallas Mavericks",
    logo: "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif",
  },
  {
    abbreviation: "POR",
    name: "Portland Trailblazers",
    logo: "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif",
  },
  {
    abbreviation: "MEM",
    name: "Memphis Grizzlies",
    logo: "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif",
  },
  {
    abbreviation: "PHX",
    name: "Phoenix Suns",
    logo: "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
  },
  {
    abbreviation: "SAS",
    name: "San Antonio Spurs",
    logo: "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif",
  },
  {
    abbreviation: "SAC",
    name: "Sacramento Kings",
    logo: "https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif",
  },
  {
    abbreviation: "NOP",
    name: "New Orleans Pelicans",
    logo: "https://content.sportslogos.net/logos/6/4962/thumbs/496292922024.gif",
  },
  {
    abbreviation: "MIN",
    name: "Minnesota Timberwolves",
    logo: "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif",
  },
  {
    abbreviation: "GSW",
    name: "Golden State Warriors",
    logo: "https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif",
  },
  {
    abbreviation: "MIL",
    name: "Milwaukee Bucks",
    logo: "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif",
  },
  {
    abbreviation: "TOR",
    name: "Toronto Raptors",
    logo: "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif",
  },
  {
    abbreviation: "BOS",
    name: "Boston Celtics",
    logo: "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
  },
  {
    abbreviation: "IND",
    name: "Indiana Pacers",
    logo: "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif",
  },
  {
    abbreviation: "MIA",
    name: "Miami Heat",
    logo: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
  },
  {
    abbreviation: "PHI",
    name: "Philadelphia 76ers",
    logo: "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
  },
  {
    abbreviation: "BKN",
    name: "Brooklyn Nets",
    logo: "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
  },
  {
    abbreviation: "ORL",
    name: "Orlando Magic",
    logo: "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
  },
  {
    abbreviation: "CHO",
    name: "Charlotte Bobcats",
    logo: "https://content.sportslogos.net/logos/6/258/thumbs/tytgxvgwe3r0hwqaehb3lxef7.gif",
  },
  {
    abbreviation: "WAS",
    name: "Washington Wizards",
    logo: "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif",
  },
  {
    abbreviation: "CHI",
    name: "Chicago Bulls",
    logo: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
  },
  {
    abbreviation: "NYK",
    name: "New York Knicks",
    logo: "https://content.sportslogos.net/logos/6/216/thumbs/21671702024.gif",
  },
  {
    abbreviation: "DET",
    name: "Detroit Pistons",
    logo: "https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif",
  },
  {
    abbreviation: "ATL",
    name: "Atlanta Hawks",
    logo: "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif",
  },
  {
    abbreviation: "CLE",
    name: "Cleveland Cavaliers",
    logo: "https://content.sportslogos.net/logos/6/222/thumbs/22253692023.gif",
  },
  {
    abbreviation: "NOH",
    name: "New Orleans Hornets",
    logo: "https://content.sportslogos.net/logos/6/226/thumbs/legngwiheii4eld1u0agakxhc.gif",
  },
  {
    abbreviation: "SEA",
    name: "Seattle Sonics",
    logo: "https://content.sportslogos.net/logos/6/241/thumbs/cxe7hh6lwjtpdhcoyiuc064sp.gif",
  },
  {
    abbreviation: "CHA",
    name: "Charlotte Hornets",
    logo: "https://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
  },
  {
    abbreviation: "NJN",
    name: "New Jersey Nets",
    logo: "https://content.sportslogos.net/logos/6/215/thumbs/hvkhsaffs9x9zre7gku4vmnte.gif",
  },
  {
    abbreviation: "VAN",
    name: "Vancouver Grizzlies",
    logo: "https://content.sportslogos.net/logos/6/257/thumbs/7hc558rh9vls8j6fam4hly46n.gif",
  },
];
