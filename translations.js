import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: {
    title: "Disaster Alert App",
    selectLanguage: "Select Language",
    selectState: "Select State",
    temperature: "Temperature",
    humidity: "Humidity",
    disaster: "Disaster Type",
    risk: "Risk Level",
    trigger: "Trigger Alert",
    stop: "Stop Alarm"
  },

  hi: {
    title: "आपदा अलर्ट ऐप",
    selectLanguage: "भाषा चुनें",
    selectState: "राज्य चुनें",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    disaster: "आपदा प्रकार",
    risk: "जोखिम स्तर",
    trigger: "अलर्ट चालू करें",
    stop: "अलार्म बंद करें"
  },

  te: {
    title: "విపత్తు హెచ్చరిక యాప్",
    selectLanguage: "భాషను ఎంచుకోండి",
    selectState: "రాష్ట్రాన్ని ఎంచుకోండి",
    temperature: "ఉష్ణోగ్రత",
    humidity: "ఆర్ద్రత",
    disaster: "విపత్తు రకం",
    risk: "ప్రమాద స్థాయి",
    trigger: "అలర్ట్ ప్రారంభించండి",
    stop: "అలారం ఆపండి"
  },

  ta: {
    title: "பேரழிவு எச்சரிக்கை பயன்பாடு",
    selectLanguage: "மொழியை தேர்ந்தெடுக்கவும்",
    selectState: "மாநிலத்தை தேர்ந்தெடுக்கவும்",
    temperature: "வெப்பநிலை",
    humidity: "ஈரப்பதம்",
    disaster: "பேரழிவு வகை",
    risk: "ஆபத்து நிலை",
    trigger: "எச்சரிக்கை இயக்கவும்",
    stop: "அலாரம் நிறுத்தவும்"
  },

  kn: {
    title: "ವಿಪತ್ತು ಎಚ್ಚರಿಕೆ ಅಪ್ಲಿಕೇಶನ್",
    selectLanguage: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectState: "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    temperature: "ತಾಪಮಾನ",
    humidity: "ಆದ್ರತೆ",
    disaster: "ವಿಪತ್ತು ಪ್ರಕಾರ",
    risk: "ಅಪಾಯ ಮಟ್ಟ",
    trigger: "ಎಚ್ಚರಿಕೆ ಆರಂಭಿಸಿ",
    stop: "ಅಲಾರ್ಮ್ ನಿಲ್ಲಿಸಿ"
  },

  ml: {
    title: "ദുരന്ത മുന്നറിയിപ്പ് ആപ്പ്",
    selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    selectState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    temperature: "താപനില",
    humidity: "ആർദ്രത",
    disaster: "ദുരന്ത തരം",
    risk: "അപായ നില",
    trigger: "അലർട്ട് ആരംഭിക്കുക",
    stop: "അലാരം നിർത്തുക"
  },

  mr: {
    title: "आपत्ती सूचना अॅप",
    selectLanguage: "भाषा निवडा",
    selectState: "राज्य निवडा",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    disaster: "आपत्ती प्रकार",
    risk: "जोखीम पातळी",
    trigger: "अलर्ट सुरू करा",
    stop: "अलार्म थांबवा"
  },

  bn: {
    title: "দুর্যোগ সতর্কতা অ্যাপ",
    selectLanguage: "ভাষা নির্বাচন করুন",
    selectState: "রাজ্য নির্বাচন করুন",
    temperature: "তাপমাত্রা",
    humidity: "আর্দ্রতা",
    disaster: "দুর্যোগের ধরন",
    risk: "ঝুঁকির মাত্রা",
    trigger: "অ্যালার্ট চালু করুন",
    stop: "অ্যালার্ম বন্ধ করুন"
  },

  gu: {
    title: "આપત્તિ એલર્ટ એપ",
    selectLanguage: "ભાષા પસંદ કરો",
    selectState: "રાજ્ય પસંદ કરો",
    temperature: "તાપમાન",
    humidity: "આર્દ્રતા",
    disaster: "આપત્તિ પ્રકાર",
    risk: "જોખમ સ્તર",
    trigger: "એલર્ટ શરૂ કરો",
    stop: "એલાર્મ બંધ કરો"
  },

  pa: {
    title: "ਆਫਤ ਚੇਤਾਵਨੀ ਐਪ",
    selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    selectState: "ਰਾਜ ਚੁਣੋ",
    temperature: "ਤਾਪਮਾਨ",
    humidity: "ਨਮੀ",
    disaster: "ਆਫਤ ਕਿਸਮ",
    risk: "ਖਤਰੇ ਦਾ ਪੱਧਰ",
    trigger: "ਅਲਰਟ ਸ਼ੁਰੂ ਕਰੋ",
    stop: "ਅਲਾਰਮ ਬੰਦ ਕਰੋ"
  },

  ur: {
    title: "ڈیزاسٹر الرٹ ایپ",
    selectLanguage: "زبان منتخب کریں",
    selectState: "ریاست منتخب کریں",
    temperature: "درجہ حرارت",
    humidity: "نمی",
    disaster: "آفت کی قسم",
    risk: "خطرے کی سطح",
    trigger: "الرٹ شروع کریں",
    stop: "الارم بند کریں"
  }
};

const i18n = new I18n(translations);
i18n.locale = "en";
i18n.enableFallback = true;

export default i18n;
