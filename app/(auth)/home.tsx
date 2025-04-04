import { useUser } from "@clerk/clerk-expo";
import { Text, View } from "react-native";

const Home = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
    </View>
  );
};

export default Home;
