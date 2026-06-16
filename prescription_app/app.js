// AI Medical Prescription Assistant & Reminder System Engine

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Dictionaries & Multi-language Database
    // ==========================================
    const langDict = {
        en: {
            logoTitle: "Rx Care Assistant",
            logoSubtitle: "AI Prescription & Reminder Hub",
            btnVoice: "Read Aloud",
            titleLoadRx: "1. Load Prescription",
            dragDrop: "Drag & drop your prescription image here, or <span>browse</span>",
            uploadHint: "Supports JPEG, PNG, or PDF formats",
            sampleLabel: "Or use clinical sample cases:",
            pr1Title: "Case A: Chronic Disease",
            pr1Desc: "Diabetes & Blood Pressure",
            pr2Title: "Case B: Acute Infection",
            pr2Desc: "Bronchitis & Cough",
            pr3Title: "Case C: Pain Management",
            pr3Desc: "Muscle Injury Treatment",
            scanningTitle: "Extracting prescription details...",
            scanningDesc: "Our AI is reading medicine names, dosages, and clinician guidelines.",
            titleVerify: "2. Unclear Handwriting Review",
            descVerify: "We flagged the following handwriting parts. Please check and correct them before finalizing:",
            btnVerify: "Confirm & Generate Schedule",
            titleMissed: "Missed Dose Assistant",
            descMissed: "Select a medicine to see missed dose guidance:",
            noMedMissed: "No active medicines loaded. Load a prescription first.",
            placeholderTitle: "No Active Prescription Loaded",
            placeholderDesc: "Please drag and drop a prescription document, or select one of the patient cases on the left to display dosage schedules and clinical information.",
            titleSummary: "Prescription Summary",
            lblPatient: "Patient:",
            lblDoctor: "Doctor:",
            lblDate: "Date:",
            titleMedicines: "Medicines",
            titleSchedule: "Daily Medicine Schedule",
            thTime: "Time",
            thMed: "Medicine",
            thDose: "Dose",
            titleHealth: "Health Information",
            lblConditions: "Possible Conditions:",
            lblLifestyle: "Lifestyle Advice:",
            titleReminders: "Reminder Plan",
            reminderPrompt: "Would you like me to create medicine reminders?",
            btnReminderYes: "Yes, Enable Reminders",
            remindersActiveTitle: "Smart reminders are set! You will receive notification alerts.",
            titleDisclaimer: "Important Disclaimer",
            valDisclaimer: "This information is for educational purposes only and is not a medical diagnosis. Always consult a qualified healthcare professional before taking, stopping, or changing any medication.",
            guidanceHead: "Guidance:",
            generalAdvice: "Select a medicine above for customized guidance.",
            missedGeneralAdvice: "If you missed a dose, consult your doctor or pharmacist regarding whether it should be taken now or skipped. Do not double the dose unless specifically instructed by a healthcare professional.",
            reminderActiveText: "Every day",
            reminderDemoTitle: "🔔 Medicine Reminder",
            reminderDemoText: "Please take your medicine as prescribed by your doctor.",
            alertClose: "Close"
        },
        hi: {
            logoTitle: "आरएक्स केयर असिस्टेंट",
            logoSubtitle: "एआई प्रिस्क्रिप्शन और रिमाइंडर हब",
            btnVoice: "जोर से पढ़ें",
            titleLoadRx: "1. प्रिस्क्रिप्शन लोड करें",
            dragDrop: "अपनी प्रिस्क्रिप्शन इमेज यहां खींचें और छोड़ें, या <span>ब्राउज़ करें</span>",
            uploadHint: "JPEG, PNG, या PDF प्रारूपों का समर्थन करता है",
            sampleLabel: "या क्लिनिकल केसों का उपयोग करें:",
            pr1Title: "केस ए: क्रोनिक रोग",
            pr1Desc: "मधुमेह और रक्तचाप",
            pr2Title: "केस बी: तीव्र संक्रमण",
            pr2Desc: "ब्रोंकाइटिस और खांसी",
            pr3Title: "केस सी: दर्द प्रबंधन",
            pr3Desc: "मांसपेशियों की चोट का इलाज",
            scanningTitle: "प्रिस्क्रिप्शन विवरण निकाल रहा है...",
            scanningDesc: "हमारा एआई दवाओं के नाम, खुराक और डॉक्टर के दिशा-निर्देश पढ़ रहा है।",
            titleVerify: "2. अस्पष्ट लिखावट की समीक्षा",
            descVerify: "हमने लिखावट के निम्नलिखित हिस्सों को चिह्नित किया है। कृपया अंतिम रूप देने से पहले इन्हें जांचें और सुधारें:",
            btnVerify: "पुष्टि करें और अनुसूची बनाएं",
            titleMissed: "छूटी हुई खुराक सहायक",
            descMissed: "छूटी हुई खुराक का मार्गदर्शन देखने के लिए एक दवा चुनें:",
            noMedMissed: "कोई सक्रिय दवा लोड नहीं की गई है। पहले एक प्रिस्क्रिप्शन लोड करें।",
            placeholderTitle: "कोई सक्रिय प्रिस्क्रिप्शन लोड नहीं है",
            placeholderDesc: "खुराक शेड्यूल और क्लिनिकल जानकारी प्रदर्शित करने के लिए कृपया एक प्रिस्क्रिप्शन दस्तावेज़ अपलोड करें, या बाईं ओर दिए गए रोगी केसों में से एक चुनें।",
            titleSummary: "प्रिस्क्रिप्शन सारांश",
            lblPatient: "रोगी:",
            lblDoctor: "डॉक्टर:",
            lblDate: "दिनांक:",
            titleMedicines: "दवाइयां",
            titleSchedule: "दैनिक दवा अनुसूची",
            thTime: "समय",
            thMed: "दवा",
            thDose: "खुराक",
            titleHealth: "स्वास्थ्य संबंधी जानकारी",
            lblConditions: "संभावित स्थितियां:",
            lblLifestyle: "जीवन शैली सलाह:",
            titleReminders: "रिमाइंडर योजना",
            reminderPrompt: "क्या आप चाहते हैं कि मैं दवा के रिमाइंडर बनाऊं?",
            btnReminderYes: "हाँ, रिमाइंडर सक्षम करें",
            remindersActiveTitle: "स्मार्ट रिमाइंडर सेट कर दिए गए हैं! आपको सूचना अलर्ट प्राप्त होंगे।",
            titleDisclaimer: "महत्वपूर्ण अस्वीकरण",
            valDisclaimer: "यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और चिकित्सा निदान नहीं है। कोई भी दवा लेने, बंद करने या बदलने से पहले हमेशा एक योग्य स्वास्थ्य देखभाल पेशेवर से परामर्श लें।",
            guidanceHead: "मार्गदर्शन:",
            generalAdvice: "अनुकूलित मार्गदर्शन के लिए ऊपर दी गई दवा का चयन करें।",
            missedGeneralAdvice: "यदि आपकी खुराक छूट गई है, तो अपने डॉक्टर या फार्मासिस्ट से परामर्श लें कि इसे अभी लिया जाना चाहिए या छोड़ दिया जाना चाहिए। जब तक किसी स्वास्थ्य पेशेवर द्वारा विशेष रूप से निर्देश न दिया जाए, तब तक खुराक को दोगुना न करें।",
            reminderActiveText: "हर दिन",
            reminderDemoTitle: "🔔 दवा अनुस्मारक",
            reminderDemoText: "कृपया अपने डॉक्टर के निर्देशानुसार अपनी दवा लें।",
            alertClose: "बंद करें"
        },
        kn: {
            logoTitle: "Rx ಕೇರ್ ಅಸಿಸ್ಟೆಂಟ್",
            logoSubtitle: "AI ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಮತ್ತು ಜ್ಞಾಪನೆ ಕೇಂದ್ರ",
            btnVoice: "ಗಟ್ಟಿಯಾಗಿ ಓದಿ",
            titleLoadRx: "1. ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಲೋಡ್ ಮಾಡಿ",
            dragDrop: "ನಿಮ್ಮ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಚಿತ್ರವನ್ನು ಇಲ್ಲಿ ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿ, ಅಥವಾ <span>ಬ್ರೌಸ್ ಮಾಡಿ</span>",
            uploadHint: "JPEG, PNG, ಅಥವಾ PDF ಫೈಲ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ",
            sampleLabel: "ಅಥವಾ ಕ್ಲಿನಿಕಲ್ ಮಾದರಿಗಳನ್ನು ಬಳಸಿ:",
            pr1Title: "ಪ್ರಕರಣ ಎ: ದೀರ್ಘಕಾಲದ ಕಾಯಿಲೆ",
            pr1Desc: "ಮಧುಮೇಹ ಮತ್ತು ರಕ್ತದೊತ್ತಡ",
            pr2Title: "ಪ್ರಕರಣ ಬಿ: ತೀವ್ರ ಸೋಂಕು",
            pr2Desc: "ಬ್ರಾಂಕೈಟಿಸ್ ಮತ್ತು ಕೆಮ್ಮು",
            pr3Title: "ಪ್ರಕರಣ ಸಿ: ನೋವು ನಿರ್ವಹಣೆ",
            pr3Desc: "ಸ್ನಾಯು ಗಾಯದ ಚಿಕಿತ್ಸೆ",
            scanningTitle: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ವಿವರಗಳನ್ನು ಪಡೆಯಲಾಗುತ್ತಿದೆ...",
            scanningDesc: "ನಮ್ಮ AI ಔಷಧಿಗಳ ಹೆಸರುಗಳು, ಡೋಸೇಜ್ ಮತ್ತು ವೈದ್ಯರ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಓದುತ್ತಿದೆ.",
            titleVerify: "2. ಅಸ್ಪಷ್ಟ ಕೈಬರಹದ ಪರಿಶೀಲನೆ",
            descVerify: "ನಾವು ಕೈಬರಹದ ಕೆಳಗಿನ ಭಾಗಗಳನ್ನು ಗುರುತಿಸಿದ್ದೇವೆ. ದಯವಿಟ್ಟು ಖಚಿತಪಡಿಸುವ ಮುನ್ನ ಅವುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ತಿದ್ದಿ:",
            btnVerify: "ಖಚಿತಪಡಿಸಿ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ ರಚಿಸಿ",
            titleMissed: "ತಪ್ಪಿದ ಡೋಸ್ ಸಹಾಯಕ",
            descMissed: "ತಪ್ಪಿದ ಡೋಸ್ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೋಡಲು ಔಷಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ:",
            noMedMissed: "ಯಾವುದೇ ಸಕ್ರಿಯ ಔಷಧಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗಿಲ್ಲ. ಮೊದಲು ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಲೋಡ್ ಮಾಡಿ.",
            placeholderTitle: "ಯಾವುದೇ ಸಕ್ರಿಯ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಲೋಡ್ ಆಗಿಲ್ಲ",
            placeholderDesc: "ಡೋಸೇಜ್ ವೇಳಾಪಟ್ಟಿಗಳು ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಮಾಹಿತಿಯನ್ನು ಪ್ರದರ್ಶಿಸಲು ದಯವಿಟ್ಟು ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ದಾಖಲೆಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ ಎಡಭಾಗದಲ್ಲಿರುವ ರೋಗಿಯ ಪ್ರಕರಣಗಳಲ್ಲಿ ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
            titleSummary: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಸಾರಾಂಶ",
            lblPatient: "ರೋಗಿ:",
            lblDoctor: "ವೈದ್ಯರು:",
            lblDate: "ದಿನಾಂಕ:",
            titleMedicines: "ಔಷಧಿಗಳು",
            titleSchedule: "ದೈನಂದಿನ ಔಷಧಿ ವೇಳಾಪಟ್ಟಿ",
            thTime: "ಸಮಯ",
            thMed: "ಔಷಧಿ",
            thDose: "ಡೋಸ್",
            titleHealth: "ಆರೋಗ್ಯ ಮಾಹಿತಿ",
            lblConditions: "ಸಂಭಾವ್ಯ ಪರಿಸ್ಥಿತಿಗಳು:",
            lblLifestyle: "ಜೀವನಶೈಲಿ ಸಲಹೆ:",
            titleReminders: "ಜ್ಞಾಪನೆ ಯೋಜನೆ",
            reminderPrompt: "ನಾನು ನಿಮಗಾಗಿ ಔಷಧಿ ಜ್ಞಾಪನೆಗಳನ್ನು ರಚಿಸಬೇಕೇ?",
            btnReminderYes: "ಹೌದು, ಜ್ಞಾಪನೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
            remindersActiveTitle: "ಸ್ಮಾರ್ಟ್ ಜ್ಞಾಪನೆಗಳನ್ನು ಹೊಂದಿಸಲಾಗಿದೆ! ನೀವು ನೋಟಿಫಿಕೇಶನ್ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ.",
            titleDisclaimer: "ಪ್ರಮುಖ ಹಕ್ಕುತ್ಯಾಗ",
            valDisclaimer: "ಈ ಮಾಹಿತಿಯು ಕೇವಲ ಶೈಕ್ಷಣಿಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮಾತ್ರ ಮತ್ತು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ಯಾವುದೇ ಔಷಧಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ, ನಿಲ್ಲಿಸುವ ಅಥವಾ ಬದಲಾಯಿಸುವ ಮೊದಲು ಯಾವಾಗಲೂ ಅರ್ಹ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
            guidanceHead: "ಮಾರ್ಗದರ್ಶನ:",
            generalAdvice: "ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಮೇಲಿನ ಔಷಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
            missedGeneralAdvice: "ನೀವು ಡೋಸ್ ತೆಗೆದುಕೊಳ್ಳಲು ಮರೆತಿದ್ದರೆ, ಅದನ್ನು ಈಗ ತೆಗೆದುಕೊಳ್ಳಬೇಕೇ ಅಥವಾ ಬಿಡಬೇಕೇ ಎಂದು ನಿಮ್ಮ ವೈದ್ಯರು ಅಥವಾ ಔಷಧಿಕಾರರನ್ನು ಸಂಪರ್ಕಿಸಿ. ವೈದ್ಯರು ನಿರ್ದಿಷ್ಟವಾಗಿ ಸೂಚಿಸದ ಹೊರತು ಡಬಲ್ ಡೋಸ್ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ.",
            reminderActiveText: "ಪ್ರತಿದಿನ",
            reminderDemoTitle: "🔔 ಔಷಧಿ ಜ್ಞಾಪನೆ",
            reminderDemoText: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವೈದ್ಯರು ಸೂಚಿಸಿದಂತೆ ನಿಮ್ಮ ಔಷಧಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
            alertClose: "ಮುಚ್ಚಿ"
        },
        ta: {
            logoTitle: "Rx கேர் அசிஸ்டெண்ட்",
            logoSubtitle: "AI மருந்துச்சீட்டு & நினைவூட்டல் மையம்",
            btnVoice: "சத்தமாக வாசி",
            titleLoadRx: "1. மருந்துச்சீட்டை ஏற்றவும்",
            dragDrop: "உங்கள் மருந்துச்சீட்டு படத்தை இங்கே இழுத்து போடவும், அல்லது <span>தேடவும்</span>",
            uploadHint: "JPEG, PNG அல்லது PDF கோப்புகளை ஆதரிக்கிறது",
            sampleLabel: "அல்லது மருத்துவ மாதிரிகளைப் பயன்படுத்தவும்:",
            pr1Title: "வழக்கு ஏ: நாள்பட்ட நோய்",
            pr1Desc: "நீரிழிவு & இரத்த அழுத்தம்",
            pr2Title: "வழக்கு பி: தீவிர தொற்று",
            pr2Desc: "ಬ್ರಾಂಕೈಟಿಸ್ & இருமல்",
            pr3Title: "வழக்கு சி: வலி மேலாண்மை",
            pr3Desc: "தசைக் காய சிகிச்சை",
            scanningTitle: "மருந்துச்சீட்டு விவரங்களை பிரித்தெடுக்கிறது...",
            scanningDesc: "எங்கள் AI மருந்துகளின் பெயர்கள், அளவுகள் மற்றும் மருத்துவர் வழிகாட்டுதல்களைப் படிக்கிறது.",
            titleVerify: "2. தெளிவற்ற கையெழுத்து சரிபார்ப்பு",
            descVerify: "கையெழுத்தின் பின்வரும் பகுதிகளை நாங்கள் கண்டறிந்துள்ளோம். உறுதிப்படுத்துவதற்கு முன் அவற்றை சரிபார்த்து திருத்தவும்:",
            btnVerify: "உறுதிசெய்து அட்டவணையை உருவாக்கு",
            titleMissed: "தவறிய டோஸ் உதவியாளர்",
            descMissed: "தவறிய டோஸ் வழிகாட்டுதலைக் காண ஒரு மருந்தைத்தேர்வு செய்யவும்:",
            noMedMissed: "செயலில் உள்ள மருந்துகள் எதுவும் ஏற்றப்படவில்லை. முதலில் ஒரு மருந்துச்சீட்டை ஏற்றவும்.",
            placeholderTitle: "செயலில் உள்ள மருந்துச்சீட்டு எதுவும் ஏற்றப்படவில்லை",
            placeholderDesc: "மருந்தளவு அட்டவணைகள் மற்றும் மருத்துவத் தகவல்களைக் காட்ட, மருந்துச்சீட்டு ஆவணத்தைப் பதிவேற்றவும் அல்லது இடதுபுறத்தில் உள்ள நோயாளி வழக்குகளில் ஒன்றைத் தேர்ந்தெடுக்கவும்.",
            titleSummary: "மருந்துச்சீட்டு சுருக்கம்",
            lblPatient: "நோயாளி:",
            lblDoctor: "மருத்துவர்:",
            lblDate: "தேதி:",
            titleMedicines: "மருந்துகள்",
            titleSchedule: "தினசரி மருந்து அட்டவணை",
            thTime: "நேரம்",
            thMed: "மருந்து",
            thDose: "அளவு",
            titleHealth: "சுகாதார தகவல்",
            lblConditions: "சாத்தியமான நிலைமைகள்:",
            lblLifestyle: "வாழ்க்கை முறை அறிவுரை:",
            titleReminders: "நினைவூட்டல் திட்டம்",
            reminderPrompt: "மருந்து நினைவூட்டல்களை உருவாக்க வேண்டுமா?",
            btnReminderYes: "ஆம், நினைவூட்டல்களை இயக்கு",
            remindersActiveTitle: "ஸ்மார்ட் நினைவூட்டல்கள் அமைக்கப்பட்டுள்ளன! அறிவிப்பு எச்சரிக்கைகளைப் பெறுவீர்கள்.",
            titleDisclaimer: "முக்கிய பொறுப்புத் துறப்பு",
            valDisclaimer: "இந்தத் தகவல் கல்வி நோக்கங்களுக்காக மட்டுமே, இது மருத்துவ நோயறிதல் அல்ல. எந்தவொரு மருந்தையும் எடுப்பதற்கு, நிறுத்துவதற்கு அல்லது மாற்றுவதற்கு முன் எப்போதும் தகுதியான சுகாதார நிபுணரை அணுகவும்.",
            guidanceHead: "வழிகாட்டுதல்:",
            generalAdvice: "தனிப்பயனாக்கப்பட்ட வழிகாட்டுதலுக்கு மேலே உள்ள மருந்தைத் தேர்ந்தெடுக்கவும்.",
            missedGeneralAdvice: "நீங்கள் ஒரு வேளை மருந்தை எடுக்க மறந்துவிட்டால், அதை இப்போது எடுக்க வேண்டுமா அல்லது தவிர்க்க வேண்டுமா என்று உங்கள் மருத்துவர் அல்லது மருந்தாளரை அணுகவும். ஒரு சுகாதார நிபுணர் குறிப்பாக அறிவுறுத்தாதவரை அளவை இரட்டிப்பாக்க வேண்டாம்.",
            reminderActiveText: "ஒவ்வொரு நாளும்",
            reminderDemoTitle: "🔔 மருந்து நினைவூட்டல்",
            reminderDemoText: "உங்கள் மருத்துவர் பரிந்துரைத்தபடி உங்கள் மருந்தை எடுத்துக் கொள்ளவும்.",
            alertClose: "மூடு"
        },
        te: {
            logoTitle: "Rx కేర్ అసిస్టెంట్",
            logoSubtitle: "AI ప్రిస్క్రిప్షన్ & రిమైండర్ హబ్",
            btnVoice: "గట్టిగా చదవండి",
            titleLoadRx: "1. ప్రిస్క్రిప్షన్ లోడ్ చేయండి",
            dragDrop: "మీ ప్రిస్క్రిప్షన్ చిత్రాన్ని ఇక్కడ లాగి వదలండి, లేదా <span>బ్రౌజ్ చేయండి</span>",
            uploadHint: "JPEG, PNG లేదా PDF ఫైళ్ళను సపోర్ట్ చేస్తుంది",
            sampleLabel: "లేదా క్లినికల్ కేసులను ఉపయోగించండి:",
            pr1Title: "కేస్ ఎ: దీర్ఘకాలిక వ్యాధి",
            pr1Desc: "డయాబెటిస్ & రక్తపోటు",
            pr2Title: "కేస్ బి: తీవ్రమైన ఇన్ఫెక్షన్",
            pr2Desc: "బ్రాంకైటిస్ & దగ్గు",
            pr3Title: "కేస్ సి: నొప్పి నివారణ",
            pr3Desc: "కండరాల గాయం చికిత్స",
            scanningTitle: "ప్రిస్క్రిప్షన్ వివరాలను సేకరిస్తోంది...",
            scanningDesc: "మా AI మందుల పేర్లు, మోతాదు మరియు వైద్యుల మార్గదర్శకాలను చదువుతోంది.",
            titleVerify: "2. అస్పష్టమైన చేతివ్రాత సమీక్ష",
            descVerify: "చేతివ్రాతలోని కింది భాగాలను మేము గుర్తించాము. దయచేసి నిర్ధారించే ముందు వాటిని సరిచేయండి:",
            btnVerify: "నిర్ధారించి షెడ్యూల్ సృష్టించు",
            titleMissed: "మిస్డ్ డోస్ అసిస్టెంట్",
            descMissed: "మిస్డ్ డోస్ మార్గదర్శకత్వాన్ని చూడటానికి ఒక మందును ఎంచుకోండి:",
            noMedMissed: "యాక్టివ్ మందులు ఏవీ లోడ్ కాలేదు. ముందుగా ప్రిస్క్రిప్షన్ లోడ్ చేయండి.",
            placeholderTitle: "యాక్టివ్ ప్రిస్క్రిప్షన్ లోడ్ కాలేదు",
            placeholderDesc: "మోతాదు షెడ్యూల్స్ మరియు క్లినికల్ సమాచారాన్ని చూడటానికి దయచేసి ప్రిస్క్రిప్షన్ పత్రాన్ని అప్‌లోడ్ చేయండి లేదా ఎడమ వైపున ఉన్న రోగి కేసులలో ఒకదాన్ని ఎంచుకోండి.",
            titleSummary: "ప్రిస్క్రిప్షన్ సారాంశం",
            lblPatient: "రోగి:",
            lblDoctor: "వైద్యుడు:",
            lblDate: "తేదీ:",
            titleMedicines: "మందులు",
            titleSchedule: "దినసరి మందుల షెడ్యూల్",
            thTime: "సమయం",
            thMed: "మందు",
            thDose: "మోతాదు",
            titleHealth: "ఆరోగ్య సమాచారం",
            lblConditions: "సాధ్యమయ్యే పరిస్థితులు:",
            lblLifestyle: "జీవనశైలి సలహా:",
            titleReminders: "రిమైండర్ ప్లాన్",
            reminderPrompt: "మందుల రిమైండర్లను సృష్టించమంటారా?",
            btnReminderYes: "అవును, రిమైండర్లను ప్రారంభించు",
            remindersActiveTitle: "స్మార్ట్ రిమైండర్లు సెట్ చేయబడ్డాయి! మీరు నోటిఫికేషన్ హెచ్చరికలను పొందుతారు.",
            titleDisclaimer: "ముఖ్యమైన నిరాకరణ",
            valDisclaimer: "ఈ సమాచారం కేవలం విద్యా ప్రయోజనాల కోసం మాత్రమే మరియు ఇది వైద్య నిర్ధారణ కాదు. ఏదైనా మందులు తీసుకునే ముందు, ఆపే ముందు లేదా మార్చే ముందు ఎల్లప్పుడూ అర్హత కలిగిన ఆరోగ్య నిపుణులను సంప్రదించండి.",
            guidanceHead: "మార్గదర్శకత్వం:",
            generalAdvice: "అనుకూలీకరించిన మార్గదర్శకత్వం కోసం పైన ఉన్న మందును ఎంచుకోండి.",
            missedGeneralAdvice: "మీరు డోస్ తీసుకోవడం మర్చిపోతే, దానిని ఇప్పుడు తీసుకోవాలా లేదా వదిలివేయాలా అని మీ వైద్యుడిని లేదా ఫార్మసిస్ట్‌ను సంప్రదించండి. వైద్య నిపుణులు ప్రత్యేకంగా సూచిస్తే తప్ప డబుల్ డోస్ తీసుకోవద్దు.",
            reminderActiveText: "ప్రతిరోజు",
            reminderDemoTitle: "🔔 మందుల రిమైండర్",
            reminderDemoText: "దయచేసి మీ వైద్యుడు సూచించిన విధంగా మీ మందులను తీసుకోండి.",
            alertClose: "మూసివేయి"
        }
    };

    // ==========================================
    // 2. Pre-loaded Sample Prescriptions
    // ==========================================
    const samplePrescriptions = {
        preset1: {
            id: "preset1",
            raw: {
                patient: "J@hn D0e",
                doctor: "Dr. A. Sm1th",
                med1: "Metf0rm1n 500mg",
                med2: "L1s1nopr1l 10mg"
            },
            verified: {
                patient: "John Doe",
                doctor: "Dr. Arthur Smith",
                date: "2026-06-15",
                medicines: [
                    {
                        name: "Metformin 500mg",
                        type: "Oral Hypoglycemic (Antidiabetic)",
                        purpose: "Regulate and lower blood glucose levels",
                        howItWorks: "Improves sensitivity to insulin and decreases glucose release by the liver.",
                        commonUses: "Type 2 Diabetes mellitus management.",
                        dosage: "1 tablet, Twice daily",
                        whenToTake: "Morning and Evening",
                        beforeFood: "After food (to minimize gastrointestinal side effects)",
                        sideEffects: "Nausea, temporary stomach upset, diarrhea, metallic taste.",
                        seriousSideEffects: "Lactic acidosis (deep breathing, muscle pain, extreme drowsiness) - seek emergency support.",
                        precautions: "Limit alcohol intake, keep hydrated, monitor kidney functions regularly.",
                        missedDose: "If you missed a dose, take it as soon as you remember with food. If it is almost time for your next dose, skip the missed dose. Do not double the dose.",
                        storage: "Store at room temperature (15°C - 30°C) away from direct moisture."
                    },
                    {
                        name: "Lisinopril 10mg",
                        type: "ACE Inhibitor (Antihypertensive)",
                        purpose: "Relax blood vessels and lower high blood pressure",
                        howItWorks: "Blocks a natural body chemical that tightens blood vessels, helping blood flow smoothly.",
                        commonUses: "Hypertension (high blood pressure), congestive heart failure recovery.",
                        dosage: "1 tablet, Once daily",
                        whenToTake: "Morning (08:00 AM)",
                        beforeFood: "Before or After food (consistency is key)",
                        sideEffects: "Dry cough, mild dizziness, lightheadedness, headache.",
                        seriousSideEffects: "Swelling of the lips, tongue, or face (Angioedema), high potassium levels - seek immediate hospital care.",
                        precautions: "Avoid potassium supplements, rise slowly from sitting positions to avoid fainting.",
                        missedDose: "Take the missed dose as soon as you remember. If it is closer to the next scheduled dose, skip the missed dose and resume normal timing. Do not double the dose.",
                        storage: "Keep dry, store in airtight container at room temperature."
                    }
                ],
                possibleConditions: "Often prescribed for managing Type 2 Diabetes mellitus and Hypertension (High Blood Pressure). It may be related to cardiovascular and metabolic management. This does not confirm a diagnosis.",
                lifestyle: [
                    "Adhere to a low glycemic index, reduced carbohydrate diet.",
                    "Engage in moderate-intensity physical activity (e.g., 30 minutes of walking) daily.",
                    "Maintain stable hydration; consume 2-3 liters of clean water daily.",
                    "Regularly monitor and log blood pressure and fasting/postprandial blood sugar levels."
                ],
                reminders: [
                    { name: "Metformin 500mg", time: "08:00 AM", dose: "1 tablet", freq: "Twice daily", dur: "30 Days" },
                    { name: "Lisinopril 10mg", time: "08:00 AM", dose: "1 tablet", freq: "Once daily", dur: "30 Days" },
                    { name: "Metformin 500mg", time: "08:00 PM", dose: "1 tablet", freq: "Twice daily", dur: "30 Days" }
                ]
            }
        },
        preset2: {
            id: "preset2",
            raw: {
                patient: "S@rah Jenk1ns",
                doctor: "Dr. H. Ch0",
                med1: "Am0x1c1ll1n 500mg",
                med2: "Dextr0meth0rphan"
            },
            verified: {
                patient: "Sarah Jenkins",
                doctor: "Dr. Helen Cho",
                date: "2026-06-14",
                medicines: [
                    {
                        name: "Amoxicillin 500mg",
                        type: "Penicillin Antibiotic",
                        purpose: "Treat bacterial respiratory infections",
                        howItWorks: "Destroys bacterial cell walls, stopping bacteria replication and clearing the infection.",
                        commonUses: "Acute bronchitis, pneumonia, throat/ear bacterial infections.",
                        dosage: "1 capsule, Three times daily",
                        whenToTake: "Morning, Afternoon, and Night",
                        beforeFood: "After food (helps prevent nausea/diarrhea)",
                        sideEffects: "Mild diarrhea, nausea, stomach discomfort, temporary rash.",
                        seriousSideEffects: "Severe allergic reaction (facial swelling, throat tightness), severe persistent diarrhea - stop taking and contact doctor immediately.",
                        precautions: "Must complete the full prescribed course even if symptoms disappear early.",
                        missedDose: "Take the missed dose immediately. If the next dose is due within 2 hours, skip the missed one. Do not take a double dose.",
                        storage: "Store dry capsule in a cool place. If liquid suspension, store in refrigerator."
                    },
                    {
                        name: "Dextromethorphan Cough Syrup",
                        type: "Antitussive (Cough Suppressant)",
                        purpose: "Provide relief from persistent dry, non-productive cough",
                        howItWorks: "Acts directly on the cough control center in the brain to temporarily block the cough reflex.",
                        commonUses: "Dry cough caused by bronchitis, colds, or flu.",
                        dosage: "10ml (2 teaspoons), Three times daily",
                        whenToTake: "Morning, Afternoon, and Night",
                        beforeFood: "With or After food",
                        sideEffects: "Mild drowsiness, dizziness, light stomach upset.",
                        seriousSideEffects: "Severe confusion, shallow breathing - seek medical assistance.",
                        precautions: "Do not drive or operate machinery if you feel drowsy. Avoid alcohol.",
                        missedDose: "If you miss a dose, take it only if needed for cough control. Avoid double dosage.",
                        storage: "Store at room temperature below 30°C. Keep bottle tightly closed."
                    }
                ],
                possibleConditions: "Commonly used for treating Acute Bronchitis and Bacterial Respiratory Infections. It may be related to clearing chest congestion. This does not confirm a diagnosis.",
                lifestyle: [
                    "Practice deep hydration by drinking warm fluids (broths, decaf teas) to thin mucus.",
                    "Inhale steam or use a humidifier to soothe dry, irritated airways.",
                    "Prioritize voice rest and bed rest (aim for 8-9 hours of sleep).",
                    "Avoid exposing yourself to cold air drafts or dust pollutants."
                ],
                reminders: [
                    { name: "Amoxicillin 500mg", time: "08:00 AM", dose: "1 capsule", freq: "Three times daily", dur: "7 Days" },
                    { name: "Dextromethorphan Syrup", time: "08:00 AM", dose: "10 ml", freq: "Three times daily", dur: "5 Days" },
                    { name: "Amoxicillin 500mg", time: "02:00 PM", dose: "1 capsule", freq: "Three times daily", dur: "7 Days" },
                    { name: "Dextromethorphan Syrup", time: "02:00 PM", dose: "10 ml", freq: "Three times daily", dur: "5 Days" },
                    { name: "Amoxicillin 500mg", time: "08:00 PM", dose: "1 capsule", freq: "Three times daily", dur: "7 Days" },
                    { name: "Dextromethorphan Syrup", time: "08:00 PM", dose: "10 ml", freq: "Three times daily", dur: "5 Days" }
                ]
            }
        },
        preset3: {
            id: "preset3",
            raw: {
                patient: "Dav1d M1ller",
                doctor: "Dr. M. V@nce",
                med1: "Ibup10fen 400mg",
                med2: "Cycl0benzap1ine"
            },
            verified: {
                patient: "David Miller",
                doctor: "Dr. Marcus Vance",
                date: "2026-06-15",
                medicines: [
                    {
                        name: "Ibuprofen 400mg",
                        type: "NSAID (Non-steroidal Anti-inflammatory)",
                        purpose: "Alleviate moderate pain and reduce muscle swelling",
                        howItWorks: "Blocks hormones (prostaglandins) that trigger pain signals and inflammatory responses in the body.",
                        commonUses: "Muscle strains, joint sprains, backaches, and inflammatory pain.",
                        dosage: "1 tablet, Four times daily",
                        whenToTake: "Breakfast, Lunch, Dinner, and Bedtime",
                        beforeFood: "Strictly After food or with milk (to protect the stomach lining)",
                        sideEffects: "Acid reflux, mild stomach irritation, drowsiness.",
                        seriousSideEffects: "Stomach ulcers, black/tarry stools, kidney impairment - discontinue use and consult doctor.",
                        precautions: "Do not take on an empty stomach. Limit use if you have a history of gastritis.",
                        missedDose: "Take the missed dose as soon as you remember. If it is almost time for the next dose, skip it. Do not double the dose.",
                        storage: "Keep in a dry container below 25°C."
                    },
                    {
                        name: "Cyclobenzaprine 5mg",
                        type: "Skeletal Muscle Relaxant",
                        purpose: "Relieve muscle stiffness, pain, and spasm symptoms",
                        howItWorks: "Targets the central nervous system to decrease muscle hyperactivity and promote relaxation.",
                        commonUses: "Acute, painful musculoskeletal conditions and muscle spasms.",
                        dosage: "1 tablet, Twice daily",
                        whenToTake: "Morning and Bedtime",
                        beforeFood: "With or After food",
                        sideEffects: "Dry mouth, moderate drowsiness, fatigue, constipation.",
                        seriousSideEffects: "Irregular heartbeats, severe allergic reaction - seek emergency medical aid.",
                        precautions: "Avoid driving, operating heavy machinery, or drinking alcohol due to significant sedative effects.",
                        missedDose: "If missed, take it if spasms are present. If it is close to your night dose, skip it. Do not double dose.",
                        storage: "Store at room temperature in a safe place."
                    }
                ],
                possibleConditions: "Often prescribed for Acute Muscle Strains, Spasms, or Musculoskeletal Sprains. It may be related to physical rehabilitation. This does not confirm a diagnosis.",
                lifestyle: [
                    "Apply ice packs to the sore area for 15-20 minutes every 4 hours for the first 48 hours.",
                    "Rest the affected muscle group; avoid heavy lifting or high-impact activities.",
                    "Use a supportive sleep posture (e.g., pillow under knees for lower back pain).",
                    "Do gentle, static stretching only if advised by a physical therapist."
                ],
                reminders: [
                    { name: "Ibuprofen 400mg", time: "06:00 AM", dose: "1 tablet", freq: "Four times daily", dur: "5 Days" },
                    { name: "Ibuprofen 400mg", time: "12:00 PM", dose: "1 tablet", freq: "Four times daily", dur: "5 Days" },
                    { name: "Cyclobenzaprine 5mg", time: "08:00 AM", dose: "1 tablet", freq: "Twice daily", dur: "5 Days" },
                    { name: "Ibuprofen 400mg", time: "06:00 PM", dose: "1 tablet", freq: "Four times daily", dur: "5 Days" },
                    { name: "Ibuprofen 400mg", time: "10:00 PM", dose: "1 tablet", freq: "Four times daily", dur: "5 Days" },
                    { name: "Cyclobenzaprine 5mg", time: "10:00 PM", dose: "1 tablet", freq: "Twice daily", dur: "5 Days" }
                ]
            }
        }
    };

    // ==========================================
    // 3. Application State
    // ==========================================
    let currentLang = 'en';
    let activePrescription = null;
    let selectedPresetId = null;
    let remindersEnabled = false;
    let speakingSpeech = null;

    // DOM Elements Cache
    const langSelect = document.getElementById('lang-select');
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');
    const preset1 = document.getElementById('preset-1');
    const preset2 = document.getElementById('preset-2');
    const preset3 = document.getElementById('preset-3');
    const scanLoader = document.getElementById('scan-loader');
    const verificationPanel = document.getElementById('verification-panel');
    const handwritingForm = document.getElementById('handwriting-form');
    const missedDoseSelectors = document.getElementById('missed-dose-selectors');
    const missedDoseGuidance = document.getElementById('missed-dose-guidance-content');
    const missedDoseBody = document.getElementById('text-guidance-body');
    const detailsPlaceholder = document.getElementById('details-placeholder');
    const prescriptionOutput = document.getElementById('prescription-output-container');
    const btnVoiceToggle = document.getElementById('btn-voice-toggle');
    const btnVoiceStop = document.getElementById('btn-voice-stop');
    const btnReminderYes = document.getElementById('btn-reminder-yes');
    const reminderPromptBox = document.getElementById('reminder-prompt-box');
    const reminderStatusBox = document.getElementById('reminder-status-box');
    const alarmToastWrapper = document.getElementById('alarm-toast-wrapper');

    // ==========================================
    // 4. Language Translation Logic
    // ==========================================
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        translateUI();
        if (activePrescription) {
            renderOutput();
        }
    });

    function translateUI() {
        const dict = langDict[currentLang];
        
        // Header
        document.getElementById('lbl-logo-title').innerText = dict.logoTitle;
        document.getElementById('lbl-logo-subtitle').innerText = dict.logoSubtitle;
        document.getElementById('btn-text-voice').innerText = dict.btnVoice;
        
        // Left Panel
        document.getElementById('title-load-rx').innerText = dict.titleLoadRx;
        document.getElementById('text-drag-drop').innerHTML = dict.dragDrop;
        document.getElementById('text-upload-hint').innerText = dict.uploadHint;
        document.getElementById('text-sample-label').innerText = dict.sampleLabel;
        document.getElementById('btn-pr1-title').innerText = dict.pr1Title;
        document.getElementById('btn-pr1-desc').innerText = dict.pr1Desc;
        document.getElementById('btn-pr2-title').innerText = dict.pr2Title;
        document.getElementById('btn-pr2-desc').innerText = dict.pr2Desc;
        document.getElementById('btn-pr3-title').innerText = dict.pr3Title;
        document.getElementById('btn-pr3-desc').innerText = dict.pr3Desc;
        
        // Scanners & Warnings
        document.getElementById('text-scanning-title').innerText = dict.scanningTitle;
        document.getElementById('text-scanning-desc').innerText = dict.scanningDesc;
        document.getElementById('title-verify-panel').innerHTML = `<span class="warning-dot"></span> ${dict.titleVerify}`;
        document.getElementById('text-verify-desc').innerText = dict.descVerify;
        document.getElementById('btn-submit-verification').innerText = dict.btnVerify;
        
        // Missed Dose
        document.getElementById('title-missed-dose').innerText = dict.titleMissed;
        document.getElementById('text-missed-desc').innerText = dict.descMissed;
        if (!activePrescription) {
            document.getElementById('text-no-med-missed').innerText = dict.noMedMissed;
        }
        
        // Right Panel Placeholders
        document.getElementById('text-placeholder-title').innerText = dict.placeholderTitle;
        document.getElementById('text-placeholder-desc').innerText = dict.placeholderDesc;
        
        // Output headers
        document.getElementById('out-title-summary').innerText = dict.titleSummary;
        document.getElementById('out-lbl-patient').innerText = dict.lblPatient;
        document.getElementById('out-lbl-doctor').innerText = dict.lblDoctor;
        document.getElementById('out-lbl-date').innerText = dict.lblDate;
        document.getElementById('out-title-medicines').innerText = dict.titleMedicines;
        document.getElementById('out-title-schedule').innerText = dict.titleSchedule;
        document.getElementById('out-th-time').innerText = dict.thTime;
        document.getElementById('out-th-med').innerText = dict.thMed;
        document.getElementById('out-th-dose').innerText = dict.thDose;
        document.getElementById('out-title-health').innerText = dict.titleHealth;
        document.getElementById('out-lbl-conditions').innerText = dict.lblConditions;
        document.getElementById('out-lbl-lifestyle').innerText = dict.lblLifestyle;
        document.getElementById('out-title-reminders').innerText = dict.titleReminders;
        document.getElementById('text-reminder-prompt-question').innerText = dict.reminderPrompt;
        document.getElementById('btn-reminder-yes').innerText = dict.btnReminderYes;
        document.getElementById('text-reminders-active-title').innerText = dict.remindersActiveTitle;
        document.getElementById('out-title-disclaimer').innerText = dict.titleDisclaimer;
        document.getElementById('out-val-disclaimer').innerText = dict.valDisclaimer;
        
        // Avatar Greeting
        document.getElementById('avatar-greeting').innerText = dict.logoTitle + " Agent";
        document.getElementById('avatar-subtext').innerText = dict.placeholderDesc;
        
        // Missed Dose body if displaying default advice
        if (missedDoseBody.innerText === langDict.en.generalAdvice || 
            missedDoseBody.innerText === langDict.hi.generalAdvice ||
            missedDoseBody.innerText === langDict.kn.generalAdvice ||
            missedDoseBody.innerText === langDict.ta.generalAdvice ||
            missedDoseBody.innerText === langDict.te.generalAdvice) {
            missedDoseBody.innerText = dict.generalAdvice;
        } else if (missedDoseBody.innerText === langDict.en.missedGeneralAdvice || 
                   missedDoseBody.innerText === langDict.hi.missedGeneralAdvice ||
                   missedDoseBody.innerText === langDict.kn.missedGeneralAdvice ||
                   missedDoseBody.innerText === langDict.ta.missedGeneralAdvice ||
                   missedDoseBody.innerText === langDict.te.missedGeneralAdvice) {
            missedDoseBody.innerText = dict.missedGeneralAdvice;
        }
    }

    // ==========================================
    // 5. Presets Loading and OCR Simulation
    // ==========================================
    preset1.addEventListener('click', () => simulateScan('preset1'));
    preset2.addEventListener('click', () => simulateScan('preset2'));
    preset3.addEventListener('click', () => simulateScan('preset3'));

    // Drag & Drop simulation
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        simulateScan('preset1'); // Fallback to preset1 for uploaded files
    });
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            simulateScan('preset1');
        }
    });

    function simulateScan(presetId) {
        // Stop current speech playback if active
        stopSpeech();
        
        // Hide existing views
        detailsPlaceholder.style.display = 'none';
        prescriptionOutput.style.display = 'none';
        verificationPanel.style.display = 'none';
        
        // Reset reminder status
        remindersEnabled = false;
        reminderPromptBox.style.display = 'flex';
        reminderStatusBox.style.display = 'none';
        
        // Show scan loading animation
        scanLoader.style.display = 'block';
        
        selectedPresetId = presetId;
        const presetData = samplePrescriptions[presetId];

        // Simulate a 1.8-second AI scan
        setTimeout(() => {
            scanLoader.style.display = 'none';
            
            // Populate handwriting verification form with flagged values
            document.getElementById('lbl-field-patient').innerText = `Patient Name (Unclear: "${presetData.raw.patient}")`;
            document.getElementById('input-patient').value = presetData.verified.patient;
            
            document.getElementById('lbl-field-doctor').innerText = `Clinician Name (Unclear: "${presetData.raw.doctor}")`;
            document.getElementById('input-doctor').value = presetData.verified.doctor;
            
            document.getElementById('lbl-field-med1').innerText = `First Medicine (Unclear: "${presetData.raw.med1}")`;
            document.getElementById('input-med1').value = presetData.verified.medicines[0].name;

            const secondInputGroup = document.getElementById('input-med2').parentNode;
            if (presetData.verified.medicines.length > 1) {
                secondInputGroup.style.display = 'flex';
                document.getElementById('lbl-field-med2').innerText = `Second Medicine (Unclear: "${presetData.raw.med2}")`;
                document.getElementById('input-med2').value = presetData.verified.medicines[1].name;
                document.getElementById('input-med2').required = true;
            } else {
                secondInputGroup.style.display = 'none';
                document.getElementById('input-med2').value = "";
                document.getElementById('input-med2').required = false;
            }

            // Reveal confirmation panel
            verificationPanel.style.display = 'block';
            verificationPanel.scrollIntoView({ behavior: 'smooth' });
        }, 1800);
    }

    // Handwriting confirmation submission
    handwritingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const presetData = samplePrescriptions[selectedPresetId];
        
        // Save verified inputs back to active prescription state
        activePrescription = JSON.parse(JSON.stringify(presetData.verified));
        activePrescription.patient = document.getElementById('input-patient').value;
        activePrescription.doctor = document.getElementById('input-doctor').value;
        activePrescription.medicines[0].name = document.getElementById('input-med1').value;
        if (activePrescription.medicines.length > 1) {
            activePrescription.medicines[1].name = document.getElementById('input-med2').value;
        }

        // Hide confirmation panel
        verificationPanel.style.display = 'none';
        
        // Render Output Summary
        renderOutput();
    });

    // ==========================================
    // 6. Output Generation & Rendering
    // ==========================================
    function renderOutput() {
        if (!activePrescription) return;

        // Show output area
        detailsPlaceholder.style.display = 'none';
        prescriptionOutput.style.display = 'block';

        // 1. Prescription Summary values
        document.getElementById('out-val-patient').innerText = activePrescription.patient;
        document.getElementById('out-val-doctor').innerText = activePrescription.doctor;
        document.getElementById('out-val-date').innerText = activePrescription.date;

        // 2. Explanations for each medicine
        const medsContainer = document.getElementById('medicines-cards-container');
        medsContainer.innerHTML = '';

        activePrescription.medicines.forEach((med, idx) => {
            const translatedLabels = getMedTranslationLabels();
            
            const card = document.createElement('div');
            card.className = 'medicine-card';
            card.innerHTML = `
                <div class="medicine-card-head">
                    <div class="med-title">
                        <h3>${med.name}</h3>
                    </div>
                    <span class="med-type-badge">${med.type}</span>
                </div>
                <div class="med-body-grid">
                    <div class="med-info-block">
                        <span>${translatedLabels.purpose}</span>
                        <p>${med.purpose}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.howItWorks}</span>
                        <p>${med.howItWorks}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.commonUses}</span>
                        <p>${med.commonUses}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.dosage}</span>
                        <p>${med.dosage} (${med.whenToTake})</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.foodRelation}</span>
                        <p>${med.beforeFood}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.sideEffects}</span>
                        <p>${med.sideEffects}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.seriousSideEffects}</span>
                        <p style="color: var(--danger); font-weight: 600;">${med.seriousSideEffects}</p>
                    </div>
                    <div class="med-info-block">
                        <span>${translatedLabels.storage}</span>
                        <p>${med.storage}</p>
                    </div>
                    <div class="med-precautions-block">
                        <span>⚠️ ${translatedLabels.precautions}</span>
                        <p>${med.precautions}</p>
                    </div>
                </div>
            `;
            medsContainer.appendChild(card);
        });

        // 3. Timetable Schedule Generator
        const scheduleBody = document.getElementById('schedule-table-body');
        scheduleBody.innerHTML = '';
        
        // Sort reminders by hour (morning -> afternoon -> evening -> night)
        const sortedReminders = [...activePrescription.reminders].sort((a, b) => {
            const timeA = parseTimeTo24(a.time);
            const timeB = parseTimeTo24(b.time);
            return timeA - timeB;
        });

        sortedReminders.forEach(rem => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="schedule-time">${rem.time}</td>
                <td><strong>${rem.name}</strong></td>
                <td>${rem.dose}</td>
            `;
            scheduleBody.appendChild(tr);
        });

        // 4. Possible Conditions & Lifestyle advice
        document.getElementById('out-val-conditions').innerText = activePrescription.possibleConditions;
        
        const lifestyleUl = document.getElementById('out-val-lifestyle');
        lifestyleUl.innerHTML = '';
        activePrescription.lifestyle.forEach(tip => {
            const li = document.createElement('li');
            li.innerText = tip;
            lifestyleUl.appendChild(li);
        });

        // 5. Populate Missed Dose Selector panel
        missedDoseSelectors.innerHTML = '';
        activePrescription.medicines.forEach((med, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-missed-med';
            btn.innerText = med.name;
            btn.addEventListener('click', () => {
                // Toggle active state
                document.querySelectorAll('.btn-missed-med').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show custom dose guidance
                missedDoseGuidance.style.display = 'block';
                document.getElementById('lbl-guidance-head').innerText = med.name + " missed dose advice:";
                missedDoseBody.innerText = med.missedDose;
            });
            missedDoseSelectors.appendChild(btn);
        });

        // Append general missed dose button
        const btnGeneral = document.createElement('button');
        btnGeneral.className = 'btn-missed-med';
        btnGeneral.innerText = currentLang === 'en' ? 'General Guidance' : 'सामान्य मार्गदर्शन';
        btnGeneral.addEventListener('click', () => {
            document.querySelectorAll('.btn-missed-med').forEach(b => b.classList.remove('active'));
            btnGeneral.classList.add('active');
            
            missedDoseGuidance.style.display = 'block';
            document.getElementById('lbl-guidance-head').innerText = langDict[currentLang].guidanceHead;
            missedDoseBody.innerText = langDict[currentLang].missedGeneralAdvice;
        });
        missedDoseSelectors.appendChild(btnGeneral);

        prescriptionOutput.scrollIntoView({ behavior: 'smooth' });
    }

    function parseTimeTo24(timeStr) {
        // e.g. "08:00 AM" or "02:00 PM"
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        return hours * 60 + minutes;
    }

    function getMedTranslationLabels() {
        const labels = {
            en: {
                purpose: "Purpose",
                howItWorks: "How It Works",
                commonUses: "Common Uses",
                dosage: "Dosage",
                foodRelation: "Food Relation",
                sideEffects: "Common Side Effects",
                seriousSideEffects: "Serious Side Effects",
                storage: "Storage Instructions",
                precautions: "Important Precautions"
            },
            hi: {
                purpose: "उद्देश्य",
                howItWorks: "यह कैसे काम करता है",
                commonUses: "सामान्य उपयोग",
                dosage: "खुराक",
                foodRelation: "भोजन के संबंध में",
                sideEffects: "सामान्य दुष्प्रभाव",
                seriousSideEffects: "गंभीर दुष्प्रभाव",
                storage: "भंडारण के निर्देश",
                precautions: "महत्वपूर्ण सावधानियां"
            },
            kn: {
                purpose: "ಉದ್ದೇಶ",
                howItWorks: "ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
                commonUses: "ಸಾಮಾನ್ಯ ಬಳಕೆಗಳು",
                dosage: "ಡೋಸೇಜ್",
                foodRelation: "ಆಹಾರ ಸಂಬಂಧ",
                sideEffects: "ಸಾಮಾನ್ಯ ಅಡ್ಡಪರಿಣಾಮಗಳು",
                seriousSideEffects: "ಗಂಭೀರ ಅಡ್ಡಪರಿಣಾಮಗಳು",
                storage: "ಶೇಖರಣಾ ಸೂಚನೆಗಳು",
                precautions: "ಪ್ರಮುಖ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು"
            },
            ta: {
                purpose: "நோக்கம்",
                howItWorks: "இது எவ்வாறு செயல்படுகிறது",
                commonUses: "பொதுவான பயன்கள்",
                dosage: "மருந்தளவு",
                foodRelation: "உணவுத் தொடர்பு",
                sideEffects: "பொதுவான பக்கவிளைவுகள்",
                seriousSideEffects: "தீவிர பக்கவிளைவுகள்",
                storage: "சேமிப்பு வழிமுறைகள்",
                precautions: "முக்கிய முன்னெச்சரிக்கைகள்"
            },
            te: {
                purpose: "ఉద్దేశం",
                howItWorks: "ఇది ఎలా పనిచేస్తుంది",
                commonUses: "సాధారణ ఉపయోగాలు",
                dosage: "మోతాదు",
                foodRelation: "ఆహారంతో సంబంధం",
                sideEffects: "సాధారణ దుష్ప్రభావాలు",
                seriousSideEffects: "తీవ్రమైన దుష్ప్రభావాలు",
                storage: "నిల్వ సూచనలు",
                precautions: "ముఖ్యమైన జాగ్రత్తలు"
            }
        };
        return labels[currentLang];
    }

    // ==========================================
    // 7. Voice Assistant Synthesis (Speech)
    // ==========================================
    btnVoiceToggle.addEventListener('click', () => {
        if (!activePrescription) return;

        if (speakingSpeech && window.speechSynthesis.speaking) {
            stopSpeech();
            return;
        }

        // Generate narrative script based on language
        const script = composeSpeechScript();

        speakingSpeech = new SpeechSynthesisUtterance(script);
        
        // Map current language selection to voice locales
        const voiceLocales = {
            en: 'en-US',
            hi: 'hi-IN',
            kn: 'kn-IN',
            ta: 'ta-IN',
            te: 'te-IN'
        };
        speakingSpeech.lang = voiceLocales[currentLang] || 'en-US';

        // Add feedback visuals
        btnVoiceToggle.classList.add('speaking');
        document.getElementById('btn-text-voice').innerText = currentLang === 'en' ? 'Speaking...' : 'पढ़ रहा है...';
        btnVoiceStop.style.display = 'flex';

        speakingSpeech.onend = () => {
            resetSpeechUI();
        };

        speakingSpeech.onerror = () => {
            resetSpeechUI();
        };

        window.speechSynthesis.speak(speakingSpeech);
    });

    btnVoiceStop.addEventListener('click', () => {
        stopSpeech();
    });

    function stopSpeech() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        resetSpeechUI();
    }

    function resetSpeechUI() {
        btnVoiceToggle.classList.remove('speaking');
        document.getElementById('btn-text-voice').innerText = langDict[currentLang].btnVoice;
        btnVoiceStop.style.display = 'none';
        speakingSpeech = null;
    }

    function composeSpeechScript() {
        const dict = langDict[currentLang];
        let script = "";

        if (currentLang === 'en') {
            script += `Here is your prescription summary. Patient name is ${activePrescription.patient}. Prescribing Doctor is ${activePrescription.doctor}. Date is ${activePrescription.date}. `;
            script += `You have ${activePrescription.medicines.length} medicines prescribed. `;
            
            activePrescription.medicines.forEach(med => {
                script += `First medicine: ${med.name}. Type is ${med.type}. Purpose: ${med.purpose}. Take ${med.dosage}, ${med.beforeFood}. `;
            });

            script += `Regarding health conditions: ${activePrescription.possibleConditions}. Please remember the important safety disclaimer: ${dict.valDisclaimer}`;
        } else if (currentLang === 'hi') {
            script += `यहाँ आपके नुस्खे का सारांश है। रोगी का नाम ${activePrescription.patient} है। डॉक्टर का नाम ${activePrescription.doctor} है। `;
            script += `आपके पास ${activePrescription.medicines.length} दवाएं निर्धारित हैं। `;
            
            activePrescription.medicines.forEach(med => {
                script += `दवा का नाम: ${med.name}. प्रकार: ${med.type}. उपयोग: ${med.purpose}. खुराक: ${med.dosage}, ${med.beforeFood}. `;
            });
            
            script += `महत्वपूर्ण अस्वीकरण: ${dict.valDisclaimer}`;
        } else {
            // Simple generic fallback for regional languages using basic naming
            script += `Prescription Summary. Patient: ${activePrescription.patient}. Doctor: ${activePrescription.doctor}. `;
            activePrescription.medicines.forEach(med => {
                script += `Medicine: ${med.name}. Dosage: ${med.dosage}. `;
            });
        }

        return script;
    }

    // ==========================================
    // 8. Smart Reminder Alarms Configurator
    // ==========================================
    btnReminderYes.addEventListener('click', () => {
        if (!activePrescription) return;

        remindersEnabled = true;
        reminderPromptBox.style.display = 'none';
        reminderStatusBox.style.display = 'block';

        // Populate reminder card items
        const remindersList = document.getElementById('reminders-list-container');
        remindersList.innerHTML = '';

        activePrescription.reminders.forEach((rem, idx) => {
            const card = document.createElement('div');
            card.className = 'reminder-item-card';
            card.innerHTML = `
                <div class="rem-details">
                    <strong>🔔 ${rem.name}</strong>
                    <span>Dose: ${rem.dose} | Frequency: ${rem.freq} | Duration: ${rem.dur}</span>
                </div>
                <div class="rem-time-badge">${rem.time}</div>
            `;
            remindersList.appendChild(card);
        });

        // Trigger a DEMONSTRATION Alarm Toast in 5 seconds to show visual interaction
        setTimeout(() => {
            if (remindersEnabled && activePrescription) {
                const testMed = activePrescription.medicines[0].name;
                const testDose = activePrescription.reminders[0].dose;
                const testTime = activePrescription.reminders[0].time;
                
                triggerAlarmToast(testMed, testDose, testTime);
            }
        }, 5000);
    });

    function triggerAlarmToast(medName, dose, time) {
        const dict = langDict[currentLang];
        
        const alarmId = `alarm-${Date.now()}`;
        const toast = document.createElement('div');
        toast.className = 'alarm-toast';
        toast.id = alarmId;
        toast.innerHTML = `
            <div class="alarm-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
            </div>
            <div class="alarm-body">
                <div class="alarm-title">${dict.reminderDemoTitle}</div>
                <div class="alarm-desc">
                    <strong>${medName}</strong> - ${dose} (${time})<br>
                    ${dict.reminderDemoText}
                </div>
            </div>
            <button class="btn-alarm-close" onclick="document.getElementById('${alarmId}').remove()">&times;</button>
        `;

        alarmToastWrapper.appendChild(toast);
        
        // Auto remove alarm after 15 seconds
        setTimeout(() => {
            const el = document.getElementById(alarmId);
            if (el) el.remove();
        }, 15000);
    }
});
