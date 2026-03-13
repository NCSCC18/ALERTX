import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import * as Notifications from "expo-notifications";
import { Audio } from "expo-av";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, Button, Platform, StyleSheet, View } from "react-native";
import * as Location from "expo-location";

// ---------------- Notification Handler ----------------
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// ---------------- All Indian States ----------------
const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

// ---------------- 22 Languages ----------------
const translations = {

English:{
state:"Select State",
language:"Select Language",
temperature:"Temperature",
humidity:"Humidity",
risk:"Risk Level",
disaster:"Disaster Type"
},

Hindi:{
state:"राज्य चुनें",
language:"भाषा चुनें",
temperature:"तापमान",
humidity:"आर्द्रता",
risk:"जोखिम स्तर",
disaster:"आपदा प्रकार"
},

Telugu:{
state:"రాష్ట్రం ఎంచుకోండి",
language:"భాష ఎంచుకోండి",
temperature:"ఉష్ణోగ్రత",
humidity:"తేమ",
risk:"ప్రమాద స్థాయి",
disaster:"విపత్తు రకం"
},

Tamil:{
state:"மாநிலத்தை தேர்வு செய்யவும்",
language:"மொழியை தேர்வு செய்யவும்",
temperature:"வெப்பநிலை",
humidity:"ஈரப்பதம்",
risk:"ஆபத்து நிலை",
disaster:"பேரழிவு வகை"
},

Kannada:{
state:"ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ",
language:"ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
temperature:"ತಾಪಮಾನ",
humidity:"ಆರ್ದ್ರತೆ",
risk:"ಅಪಾಯ ಮಟ್ಟ",
disaster:"ವಿಪತ್ತು ಪ್ರಕಾರ"
},

Malayalam:{
state:"സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
language:"ഭാഷ തിരഞ്ഞെടുക്കുക",
temperature:"താപനില",
humidity:"ആർദ്രത",
risk:"അപകട നില",
disaster:"ദുരന്ത തരം"
},

Bengali:{
state:"রাজ্য নির্বাচন করুন",
language:"ভাষা নির্বাচন করুন",
temperature:"তাপমাত্রা",
humidity:"আর্দ্রতা",
risk:"ঝুঁকির মাত্রা",
disaster:"দুর্যোগের ধরন"
},

Marathi:{
state:"राज्य निवडा",
language:"भाषा निवडा",
temperature:"तापमान",
humidity:"आर्द्रता",
risk:"धोका पातळी",
disaster:"आपत्ती प्रकार"
},

Gujarati:{
state:"રાજ્ય પસંદ કરો",
language:"ભાષા પસંદ કરો",
temperature:"તાપમાન",
humidity:"ભેજ",
risk:"જોખમ સ્તર",
disaster:"આપત્તિ પ્રકાર"
},

Punjabi:{
state:"ਰਾਜ ਚੁਣੋ",
language:"ਭਾਸ਼ਾ ਚੁਣੋ",
temperature:"ਤਾਪਮਾਨ",
humidity:"ਨਮੀ",
risk:"ਖਤਰੇ ਦਾ ਪੱਧਰ",
disaster:"ਆਫ਼ਤ ਦੀ ਕਿਸਮ"
},

Urdu:{
state:"ریاست منتخب کریں",
language:"زبان منتخب کریں",
temperature:"درجہ حرارت",
humidity:"نمی",
risk:"خطرے کی سطح",
disaster:"آفت کی قسم"
},

Odia:{
state:"ରାଜ୍ୟ ଚୟନ କରନ୍ତୁ",
language:"ଭାଷା ଚୟନ କରନ୍ତୁ",
temperature:"ତାପମାତ୍ରା",
humidity:"ଆର୍ଦ୍ରତା",
risk:"ଝୁମ୍ପ ସ୍ତର",
disaster:"ବିପଦ ପ୍ରକାର"
},

Assamese:{
state:"ৰাজ্য বাছক",
language:"ভাষা বাছক",
temperature:"তাপমাত্রা",
humidity:"আৰ্দ্ৰতা",
risk:"ঝুঁকি স্তৰ",
disaster:"দুৰ্যোগৰ ধৰণ"
},

Konkani:{
state:"राज्य निवड",
language:"भाषा निवड",
temperature:"तापमान",
humidity:"आर्द्रता",
risk:"धोका पातळी",
disaster:"आपत्ती प्रकार"
},

Maithili:{
state:"राज्य चुनू",
language:"भाषा चुनू",
temperature:"तापमान",
humidity:"आर्द्रता",
risk:"जोखिम स्तर",
disaster:"आपदा प्रकार"
},

Santali:{
state:"ᱨᱟᱡᱽᱭ ᱵᱟᱪᱷᱟᱣ",
language:"ᱵᱷᱟᱥᱟ ᱵᱟᱪᱷᱟᱣ",
temperature:"ᱛᱟᱯᱚᱢ",
humidity:"ᱟᱨᱫᱨᱛᱟ",
risk:"ᱡᱷᱩᱝᱠᱤ ᱥᱛᱨ",
disaster:"ᱫᱩᱨᱡᱚᱜ ᱫᱷᱚᱨᱚᱱ"
},

Dogri:{
state:"राज्य चुनो",
language:"भाषा चुनो",
temperature:"तापमान",
humidity:"नमी",
risk:"खतरे का स्तर",
disaster:"आपदा प्रकार"
},

Manipuri:{
state:"ꯔꯥꯖ꯭ꯌ ꯈꯅꯕꯤꯔꯤ",
language:"ꯂꯣꯟ ꯈꯅꯕꯤꯔꯤ",
temperature:"ꯇꯥꯞꯃꯥꯟ",
humidity:"ꯅꯃꯤ",
risk:"ꯈꯠꯇꯕ ꯃꯌꯥꯝ",
disaster:"ꯑꯥꯞꯗꯥ ꯃꯈꯥ"
},

Bodo:{
state:"राज्य बासाय",
language:"भाषा बासाय",
temperature:"तापमान",
humidity:"आर्द्रता",
risk:"जोखिम स्तर",
disaster:"आपदा प्रकार"
},

Sanskrit:{
state:"राज्यं चिनुत",
language:"भाषां चिनुत",
temperature:"तापमानम्",
humidity:"आर्द्रता",
risk:"जोखिम स्तरः",
disaster:"आपद् प्रकारः"
},

Nepali:{
state:"राज्य छान्नुहोस्",
language:"भाषा छान्नुहोस्",
temperature:"तापक्रम",
humidity:"आर्द्रता",
risk:"जोखिम स्तर",
disaster:"विपद प्रकार"
},

Kashmiri:{
state:"ریاست ژارِو",
language:"زبان ژارِو",
temperature:"درجہ حرارت",
humidity:"نمی",
risk:"خطرے کی سطح",
disaster:"آفت کی قسم"
},

Sindhi:{
state:"رياست چونڊيو",
language:"ٻولي چونڊيو",
temperature:"گرمي پد",
humidity:"نمي",
risk:"خطري جي سطح",
disaster:"آفت جو قسم"
}

};

// ---------------- OpenWeather API ----------------
const API_KEY = "cd18b69e9981289aecc9de56a49a9710";

export default function Home() {

  const [selectedLanguage,setLanguage] = useState("English");
  const [selectedState,setState] = useState("Telangana");

  const [locationName, setLocationName] = useState("");

  const [temperature,setTemperature] = useState(0);
  const [humidity,setHumidity] = useState(0);

  const [risk,setRisk] = useState("--");
  const [disaster,setDisaster] = useState("--");

  const [sound,setSound] = useState(null);

  const t = translations[selectedLanguage] || translations["English"];

  // ---------------- Alert Sound ----------------
  const playAlert = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/alert.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  const stopAlert = async () => {
    if(sound){
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
  };

  // ---------------- Notification ----------------
  const registerNotifications = async () => {
    if(Platform.OS !== "web"){
      await Notifications.requestPermissionsAsync();
    }
  };

  const sendNotification = async(message)=>{
    if(Platform.OS !== "web"){
      await Notifications.scheduleNotificationAsync({
        content:{title:"⚠ Disaster Alert",body:message},
        trigger:null
      });
    }
  };

  // ---------------- Disaster Logic ----------------
  const predictDisaster = (temp,hum)=>{
    let riskLevel="Low";
    let disasterType="None";

    if(temp >= 35){
      riskLevel="High";
      disasterType="Heatwave";
      playAlert();
      sendNotification(`Heatwave Alert in ${selectedState}`);
    }

    if(hum >= 85){
      riskLevel="High";
      disasterType="Flood";
      playAlert();
      sendNotification(`Flood Alert in ${selectedState}`);
    }

    setRisk(riskLevel);
    setDisaster(disasterType);
  };

  const getLocationWeather = async () => {

  try {

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Location permission denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    const lat = location.coords.latitude;
    const lon = location.coords.longitude;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    const temp = data.main.temp;
    const hum = data.main.humidity;

    setTemperature(temp);
    setHumidity(hum);

    setLocationName(data.name);

    predictDisaster(temp, hum);

  } catch (error) {
    console.log("Location weather error:", error);
  }

};


useEffect(() => {
  registerNotifications();
  getLocationWeather();
}, []);

useEffect(() => {
  getWeather();
}, [selectedState]);

  // ---------------- Weather Fetch ----------------
  const getWeather = async () => {
  try {

    // Fix for Telangana
    const city = selectedState === "Telangana" ? "Hyderabad" : selectedState;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    console.log("API DATA:", data);

    if (!data.main) {
      console.log("Weather not found");
      return;
    }

    const temp = data.main.temp;
    const hum = data.main.humidity;

    setTemperature(temp);
    setHumidity(hum);

    predictDisaster(temp, hum);

  } catch (error) {
    console.log("Weather error:", error);
  }
};


  // ---------------- Weather Icon ----------------
  const getWeatherIcon = ()=>{

    if(parseFloat(temperature) >= 35) return "weather-sunny";
    if(parseFloat(humidity) >= 85) return "weather-pouring";
    if(parseFloat(humidity) >= 60) return "weather-rainy";

    return "weather-cloudy";
  };

  return(

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Disaster Prediction App</Text>

      <View style={{alignItems:"center",marginBottom:20}}>

        <MaterialCommunityIcons
          name={getWeatherIcon()}
          size={90}
          color="#ff9800"
        />

        {risk === "High" && (
          <Text style={styles.alert}>ALERT</Text>
        )}

      </View>

      <Text style={styles.label}>{t.language}</Text>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(item)=>setLanguage(item)}
      >

        {Object.keys(translations).map((lang,index)=>(
          <Picker.Item key={index} label={lang} value={lang}/>
        ))}

      </Picker>

      <Text style={styles.label}>{t.state}</Text>

      <Text style={styles.label}>Location: {locationName}</Text>

      <Picker
        selectedValue={selectedState}
        onValueChange={(item)=>setState(item)}
      >

        {states.map((state,index)=>(
          <Picker.Item key={index} label={state} value={state}/>
        ))}

      </Picker>

      <Text style={styles.label}>{t.temperature}: {temperature} °C</Text>
      <Text style={styles.label}>{t.humidity}: {humidity} %</Text>

      <Text style={[
        styles.label,
        risk === "High"
        ? {color:"red",fontWeight:"bold"}
        : {color:"green",fontWeight:"bold"}
      ]}>
        {t.risk}: {risk}
      </Text>

      <Text style={styles.label}>
        {t.disaster}: {disaster}
      </Text>

      <Button
        title="Stop Alert Sound"
        onPress={stopAlert}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:"#f0f8ff"
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:20
  },

  label:{
    fontSize:16,
    marginVertical:8
  },

  alert:{
    position:"absolute",
    top:35,
    color:"red",
    fontWeight:"bold"
  }

});