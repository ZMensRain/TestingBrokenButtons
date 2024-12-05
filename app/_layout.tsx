import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          //When the icon is pressed it will sometimes not register visually and will very often not call the function
          headerRight: () => (
            <MaterialCommunityIcons
              name="plus"
              size={30}
              onPress={() => alert("it worked")}
            />
          ),
        }}
      />
    </Stack>
  );
}
