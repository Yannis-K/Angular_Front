export enum enumeration{
  Info = "Informatique",
  Maths = "Mathématique",
  Ang = "Anglais"

}


export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major:enumeration;
  archived?: boolean;
}
