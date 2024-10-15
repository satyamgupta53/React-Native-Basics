import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.OnAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.searchContainer}
        placeholder=" Enter your desired goal "
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingRight: 24,
  },
  searchContainer: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 8,
    padding: 8,
    width: "75%",
    backgroundColor: "white",
  },
});
