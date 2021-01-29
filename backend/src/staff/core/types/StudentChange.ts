export default interface StudentChange {
  id: number;
  student: number;
  name: string;
  sslcPercentage: number;
  hscPercentage: number;
  ugCgpa: number;
  pgCgpa: number;
  currentArrears: number;
  historyOfArrears: number;
  resume: string | null;
}
