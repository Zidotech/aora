import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
