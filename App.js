/* Importing the necessary components from react-native */
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

/* Main App Component */
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), goal: enteredGoalText },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput OnAddGoal={addGoalHandler} />
      {/* this is the optimized way to render the goal list */}
      <FlatList
        data={courseGoals}
        renderItem={(goalData) => {
          return <GoalItem text={goalData.item.goal} />;
        }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

/* Styling Component */
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 32,
    paddingRight: 8,
    backgroundColor: "#ffe4e1",
  },
});
