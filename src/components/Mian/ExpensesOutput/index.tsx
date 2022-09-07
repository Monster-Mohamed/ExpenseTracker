import { View, Text } from "react-native";
import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import ExpensesList from "../ExpensesList";
import MainContainer from "../../UI/MainContainer";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <MainContainer>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </MainContainer>
  );
};

export default ExpensesOutput;
