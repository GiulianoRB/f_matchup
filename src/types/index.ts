export interface User {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  position: string;
  sports: string[];
  club: string;
  clubStatus: 'pending' | 'accepted' | 'rejected';
  ranking: number;
}

export interface Event {
  id: string;
  name: string;
  sport: string;
  location: string;
  date: string;
  time: string;
  venue: string;
  fee: number;
  organizerAccount: string;
  maxPlayers: number;
  players: Player[];
  status: 'open' | 'full' | 'completed';
}

export interface Player {
  userId: string;
  name: string;
  status: 'waiting' | 'accepted' | 'bench';
  paymentStatus: 'pending' | 'paid' | 'overdue';
}

export interface Club {
  id: string;
  name: string;
  president: string;
  managers: string[];
  coaches: string[];
  members: string[];
}