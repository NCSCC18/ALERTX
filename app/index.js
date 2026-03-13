import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {

  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {

    const checkLogin = async () => {

      const user = await AsyncStorage.getItem("phone");

      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }

    };

    checkLogin();

  }, []);

  if (loggedIn === null) return null;

  return loggedIn ? <Redirect href="/home" /> : <Redirect href="/login" />;
}