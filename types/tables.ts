export type Tournament = {
  id: number;
  name: string; // LCS Spring 2023
  region: string; // LCS
  start_timestamp: string;
  logo_url: string;
};

export type Team = {
  id: number;
  name: string; // 100 Thieves
  abbreviation: string; // 100
  logo_url: string;
  primary_color: string;
  secondary_color: string;
};

export type TournamentTeam = {
  id?: number;
  tournament_id: number;
  team_id: number;
};

export type Game = {
  id?: number;
  timestamp: string;
  blue_team_id: number;
  red_team_id: number;
  tournament_id: number;
  winning_team_id: number;
};

export type User = {
  id?: number;
  name: string;
};

export type Prediction = {
  id?: number;
  user_id: number;
  game_id: number;
  team_id: number;
};

export type Player = {
  id?: number;
  name: string;
  residency: string; // LCS
  role: string;
};

export type TeamPlayer = {
  id?: number;
  name: string;
  role: string;
  team_id: number;
  tournament_id: number;
};
