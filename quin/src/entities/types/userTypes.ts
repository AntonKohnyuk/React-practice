export interface User {
  _id: string;
  name: string;
  profession: Profession;
  qualities: Trait[];
  completedMeetings: number;
  rate: number;
  bookmark: boolean;
}

export interface Profession {
  _id: string;
  name: string;
}

export interface Trait {
  _id: string;
  name: string;
  color: string;
}

export interface Professions {
  [index: string]: Profession;
}

export interface Traits {
  [index: string]: Trait;
}
