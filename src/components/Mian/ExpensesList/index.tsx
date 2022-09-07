import { View, Text, FlatList } from "react-native";
import { Expense } from "../../../constants/Expenses";
import React from "react";
import ExpenseItem from "../../UI/ExpenseItem";

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  const renderItem = (itemData: { item: Expense }) => {
    return (
      <ExpenseItem
        {...itemData.item}
      />
    );
  };

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item: Expense) => item._id}
    />
  );
};

export default ExpensesList;
