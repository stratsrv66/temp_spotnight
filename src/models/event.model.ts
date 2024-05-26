import { Style } from "./style.model";

export interface Event {
  name: string;
  address: string;
  style: Style[];
  phone: string;
  description: string;
  comments: string[];
}
