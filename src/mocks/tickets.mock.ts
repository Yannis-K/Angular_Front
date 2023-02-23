import { enumeration, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Tokyo',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: enumeration.Info,
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: enumeration.Ang,
  },
  
];
