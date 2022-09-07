import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";

interface Summary {
  periodName: string;
  expenses: any[];
}

const ExpensesSummary = ({ periodName, expenses }: Summary) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      {/* .toFixed(2) get two decimal places 10.99 */}
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 14,
    color: Colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary500,
  },
});

export default ExpensesSummary;
