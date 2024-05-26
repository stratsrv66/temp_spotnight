export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  favorites: Event[];
  score: number;
  events: Event[];
}
