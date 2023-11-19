export interface Event {
  users: {
    name: string;
    email: string;
  }[];
  id: number;
  name: string;
  date: Date;
  maxCapacity: number;
  description: string;
}
