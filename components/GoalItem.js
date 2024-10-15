import { View, StyleSheet, Text } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalCardContainer}>
      <Text style={styles.goalCardText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalCardContainer: {
    backgroundColor: "white",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginVertical: 8,
    fontWeight: "600",
  },
  goalCardText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
