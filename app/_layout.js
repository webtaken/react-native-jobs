import { Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const Layout = () => {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
};

export default Layout;
