import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { Header } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          //When the icon is pressed it will sometimes not register visually and will very often not call the function
          header: () => (
            <Header
              title="test"
              headerRight={() => (
                <MaterialCommunityIcons
                  style={{ marginRight: 20, alignSelf: "center" }}
                  name="plus"
                  onPress={() => {
                    alert("it worked!");
                  }}
                  size={24}
                />
              )}
            />
          ),
        }}
      />
    </Stack>
  );
}
