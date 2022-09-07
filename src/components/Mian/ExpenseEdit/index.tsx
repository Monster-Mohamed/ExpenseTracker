import { StyleSheet, View } from "react-native";
import React from "react";
import IconButton from "../../UI/IconButton";
import Colors from "../../../constants/Colors";
import { PrimaryButton } from "../../UI/Buttons";

const ExpenseEdit = () => {
  const trashHandler = () => {
    // todo delete the expense
  };

  const cancelHandler = () => {
    // todo cancel the expense editing
  };

  const editHandler = () => {
    // todo confirm the form
  };

  return (
    <View>
      <View style={styles.btnsParent}>
        <PrimaryButton
          style={styles.buttons}
          btnHandler={cancelHandler}
          mode="flat"
        >
          Cancel
        </PrimaryButton>
        <PrimaryButton style={styles.buttons} btnHandler={editHandler}>
          Update
        </PrimaryButton>
      </View>
      <View style={styles.container}>
        <IconButton
          name="trash"
          color={Colors.error500}
          size={36}
          onPress={trashHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary200,
    alignItems: "center",
  },
  btnsParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseEdit;
