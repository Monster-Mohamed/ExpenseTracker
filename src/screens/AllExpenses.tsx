import { View, Text } from "react-native";
import React from "react";
import ExpensesOutput from "../components/Mian/ExpensesOutput";
import Expenses from "../constants/Expenses";

const AllExpenses = () => {
  return (
    <>
      <ExpensesOutput expenses={Expenses} expensesPeriod="Total" />
    </>
  );
};

export default AllExpenses;
