import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            //When the icon is pressed it will sometimes not register visually and will very often not call the function
            headerRight: () => (
              <TouchableWithoutFeedback onPress={() => alert("it worked")}>
                <MaterialCommunityIcons name="plus" size={30} />
              </TouchableWithoutFeedback>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
