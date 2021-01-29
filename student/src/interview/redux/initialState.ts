import Interview from "../../common/types/Interview";

interface InitialState {
  interviewList: Array<Interview>;
  selected: Interview | null;
}

const interview: Interview = {
  id: 1,
  company: "Arcesium India Pvt. Ltd.",
  jobTitle: "Software Development",
  ctc: 1000000,
  location: "Hyderabad",
  sslcThreshold: 80,
  hscThreshold: 80,
  ugCgpaThreshold: 8,
  pgCgpaThreshold: 8,
  arrearsAllowed: 0,
  historyOfArrearsAllowed: 0,
  type: "Internship",
  applicationDeadline: 1610967600000,
  rounds: [
    {
      number: 1,
      name: "Online Round",
      timestamp: 1611138600000,
      venue: "MIT - Admin Block Laboratory",
    },
    {
      number: 2,
      name: "Face to Face Interview - 1",
      timestamp: 1611147600000,
      venue: "MIT - Admin Block",
    },
    {
      number: 3,
      name: "Face to Face Interview - 2",
      timestamp: 1611162000000,
      venue: "MIT - Admin Block",
    },
    {
      number: 4,
      name: "Elevator Round",
      timestamp: 1611165600000,
      venue: "MIT - Admin Block",
    },
  ],
  courses: [
    {
      id: 1,
      name: "B.E. Computer Science and Engineering",
    },
  ],
  round: -2,
};

const initialState: InitialState = {
  interviewList: [],
  selected: null,
};

export default initialState;
