import { useLayoutEffect } from "react";
import React from "react";
import MainContainer from "../components/UI/MainContainer";
import ExpenseEdit from "../components/Mian/ExpenseEdit";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?._id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedExpenseId ? "Edit Expense" : "Add Expense",
    });
  }, []);

  return <MainContainer>{editedExpenseId && <ExpenseEdit />}</MainContainer>;
};

export default ManageExpense;
