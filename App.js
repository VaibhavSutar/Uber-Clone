import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import { KeyboardAvoidingView } from "react-native";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Services from "./screens/Services/Services";
import Account from "./screens/Account/Account";
import Activity from "./screens/activity/activity";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <View style={tw`pl-5`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
        }}
      />
    </View>
  );
}
function Tabnav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Icon name="home" color={color} size={size} />;
          } else if (route.name === "Services") {
            return <Icon name="apps" color={color} size={26} />;
          } else if (route.name === "Activity") {
            return (
              <Icon
                name="reader-outline"
                type="ionicon"
                color={color}
                size={26}
              />
            );
          } else if (route.name === "Account") {
            return <Icon name="person" color={color} size={26} />;
          }
        },
        tabBarActiveTintColor: "black", // Set the color for the active tab
        tabBarInactiveTintColor: "gray", // Set the color for inactive tabs
        tabBarStyle: {
          backgroundColor: "#ffff", // Set the background color of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust label font size if needed
        },
      })}
    >
      <Tab.Screen
        key={1}
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: (props) => <LogoTitle {...props} />,
          headerTitle: () => null,
          headerStyle: { borderBottomWidth: 0 },
          headerTitleStyle: {
            borderBottomWidth: 0, // Remove the bottom border for the title
          },
        }}
      />

      <Tab.Screen
        key={2}
        name="Services"
        component={Services}
        options={{ headerShown: false, tabBarLabel: "Services" }}
      />
      <Tab.Screen
        key={3}
        name="Activity"
        component={Activity}
        options={{ headerShown: false, tabBarLabel: "Activity" }}
      />
      <Tab.Screen
        key={4}
        name="Account"
        component={Account}
        options={{ headerShown: false, tabBarLabel: "Account" }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Tabnav"
                component={Tabnav}
                options={{
                  headerShown: false,
                  // headerLeft: (props) => <LogoTitle {...props} />,
                  // headerTitle: () => null,
                  // headerStyle: { borderBottomWidth: 0 },
                  // headerTitleStyle: {
                  //   borderBottomWidth: 0, // Remove the bottom border for the title
                  // },
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
