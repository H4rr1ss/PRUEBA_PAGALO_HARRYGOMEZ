export interface Actor {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  job?: string;
  known_for_department?: string;
}

export interface MovieCredits {
  actors: Actor[];
  crew: Actor[];
}
