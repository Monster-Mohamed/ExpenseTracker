export interface Expense {
  _id?: string;
  description?: string;
  amount?: number;
  date?: Date;
}

const Expenses: Expense[] = [
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Pair of shoes",
    amount: 59.99,
    date: new Date("2022-07-10"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Gaming PC",
    amount: 1000,
    date: new Date("2022-10-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
  {
    _id: Date.now().toString() + Math.round(Math.random() * 99999999),
    description: "Good Camera",
    amount: 400,
    date: new Date("2022-11-01"),
  },
];

export default Expenses;
