import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/Mian/ExpensesOutput";
import Expenses from "../constants/Expenses";

const RecentExpenses = () => {
  const recent = Expenses.slice(0, 7);

  return (
    <>
      <ExpensesOutput expenses={recent} expensesPeriod="Last 7 days" />
    </>
  );
};

export default RecentExpenses;
