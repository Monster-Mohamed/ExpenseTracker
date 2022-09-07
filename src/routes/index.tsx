import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../screens/ManageExpense";
import ExpensesOverview from "./ExpenseOverview";
import Colors from "../constants/Colors";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: "white",
        }}
        initialRouteName="expenseOverview"
      >
        <Stack.Screen
          name="manageExpense"
          component={ManageExpense}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="expenseOverview"
          options={{ headerShown: false }}
          component={ExpensesOverview}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
