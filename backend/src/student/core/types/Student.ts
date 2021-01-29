export default interface Student {
  id: number;
  registerNumber: string;
  name: string;
  college: string;
  course: string;
  sslcPercentage: number;
  hscPercentage: number;
  ugCgpa: number;
  pgCgpa: number;
  currentArrears: number;
  historyOfArrears: number;
  placedCount: number;
  resume: string | null;
}
