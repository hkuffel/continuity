import requests
from bs4 import BeautifulSoup
import json
from time import time

class BbrefScraper():

    seasons: list = [str(s) for s in range(2000, 2023)][::-1]

    teams = [
        'LAL',
        'LAC',
        'DEN',
        'HOU',
        'OKC',
        'UTA',
        'DAL',
        'POR',
        'MEM',
        'PHX',
        'SAS',
        'SAC',
        'NOP',
        'MIN',
        'GSW',
        'MIL',
        'TOR',
        'BOS',
        'IND',
        'MIA',
        'PHI',
        'BKN',
        'ORL',
        'CHO',
        'WAS',
        'CHI',
        'NYK',
        'DET',
        'ATL',
        'CLE',
        'WSB',
        'NOH',
        'SEA',
        'CHA',
        'NJN',
        'VAN',
        'NOO'
    ]


    def scrape_season_page(self, season: str, team: str) -> dict:
        data = []
        resp = requests.get(
            f'https://www.basketball-reference.com/teams/{team}/{season}.html'
        ).text
        soup = BeautifulSoup(resp, 'html.parser')
        print(soup)
        table = soup.find('table')
        print(table)
        rows = table.find_all('tr')
        print(rows)
        for row in rows:
            if len(row.find_all('td')) == 0:
                continue
            player_cell = row.find('td', {'data-stat': 'player'})
            player_name = player_cell.find('a').text
            player_id = player_cell.find('a')['href'].split('/')[-1].split('.')[0]
            data.append({
                'player_name': player_name,
                'player_id': player_id,
            })
        print(f"scraped {season} and {team} sleeping for 5 seconds")
        time.sleep(5)
        return {
            'season': season,
            'team': team,
            'data': data
        }
    
    def scrape_seasons(self, seasons: list, teams: list) -> list:
        data = []
        for season in seasons:
            for team in teams:
                try:
                    data.append(self.scrape_season_page(season, team))
                except:
                    print(f'Error scraping {season} {team}')
                    exit()
        return data

if __name__ == "__main__":
    scraper = BbrefScraper()
    print(scraper.scrape_season_page('2021', 'LAL'))
    data = scraper.scrape_seasons(scraper.seasons, scraper.teams)
    with open('data.json', 'w') as f:
        json.dump(data, f)