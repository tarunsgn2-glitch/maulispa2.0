/* ============================================================
   MAULI SPA V4 — COMPLETE JAVASCRIPT
   Base language: English | Multilingual T&C: EN + HI + MR
   Smart Savings Calculator | Skeleton Loading | Hover Effects
   ============================================================ */

/* ── TRANSLATIONS ─────────────────────────────────────────── */
const T = {
  en:{
    tagline:"Mauli Ayurvedic Massage Therapy",
    heroEyebrow:"Ancient Ayurvedic Tradition",heroLine1:"Rejuvenate Your",heroLine2:"Soul & Body",
    heroSub:"Achieve complete wellness through ancient Ayurvedic wisdom",
    heroBook:"Book Your Session",heroCatalogue:"View E-Catalogue",
    top3Badge:"Top Demanding Therapies",top3Title:"Our Most Loved Services",
    seeAllTherapies:"See All Therapies →",
    whyBadge:"Why Choose Us",whyTitle:"Why Mauli Ayurvedic Massage Therapy?",
    w1h:"Expert Therapists",w1p:"Experienced and certified staff with familiar nature",
    w2h:"Pure Ayurvedic Oils",w2p:"100% natural oils made from herbs",
    w3h:"Peaceful Ambience",w3p:"A calm environment away from noise",
    w4h:"Hygiene First",w4p:"Disposable sheets & under garments and sanitized rooms every time",
    w5h:"Certified Center",w5p:"Government certified Ayurvedic wellness center",
    w6h:"Open 7 Days",w6p:"Mon–Sun: 10 AM – 9 PM",
    w7h:"3 Private Cabins",w7p:"Complete privacy in each cabin — just you and your peace",
    w8h:"Fan + Central AC",w8p:"Each cabin has 1 dedicated fan and centralised AC for perfect cooling all year",
    w9h:"Premium Bathroom",w9p:"Combined bathroom with geyser, hot & cold shower and mini hotel shop",
    benefitsBadge:"Health Benefits",benefitsTitle:"What Will You Get?",
    b1h:"Stress & Anxiety Relief",b1p:"Freedom from stress, depression and anxiety",
    b2h:"Better Blood Circulation",b2p:"Improved blood flow and energy levels",
    b3h:"Skin Glow",b3p:"Enhance your skin's natural glow and radiance",
    b4h:"Pain Relief",b4p:"Relief from joint, back and muscle pain",
    b5h:"Good Sleep",b5p:"Better sleep quality, freedom from insomnia",
    learnMore:"Learn More →",
    reviewsTitle:"What Our Clients Say?",seeReviews:"See All Reviews",
    ctaTitle:"Start Your Wellness Journey Today",
    ctaSub:"Talk to us and create your perfect therapy plan",ctaBook:"Book Session",
    navHome:"Home",navTherapies:"Wellness Therapies",navGallery:"Gallery",
    navMembership:"Wellness Membership",navAbout:"About",navContact:"Contact",navMore:"More",
    navTerms:"Terms & Conditions",navPrivacy:"Privacy Policy",
    offerTag:"LIMITED OFFER",offerTitle:"Free Facial for First 50 Membership Users!",
    offerDesc:"Join today + get 20% off your first session.",
    footerBio:"Pune's premier Ayurvedic wellness center. Ancient wisdom and modern comfort.",
    quickLinks:"Quick Links",contactInfo:"Contact Info",trustBadges:"Trust & Newsletter",
    newsletterDesc:"Subscribe for wellness tips",subscribe:"Subscribe",
    therapiesH1:"Wellness Therapies",therapiesSub:"Complete wellness through ancient Ayurvedic art",
    therapiesBadge:"All Services",therapiesTitle:"Our Wellness Therapies",
    galleryH1:"Gallery",gallerySub:"See Our Peaceful and Beautiful Environment",
    followUs:"Follow Us On Social Media",virtualTour:"Virtual Tour",
    virtualTourLabel:"Mauli Spa — Virtual Tour",photoGallery:"Photo Gallery",
    memberH1:"Wellness Membership",memberSub:"Stop paying every time — make wellness your lifestyle",
    limitedOffer:"LIMITED OFFER:",limitedOfferDesc:"First 50 members get a FREE Facial upon joining!",
    savingsCalc:"Smart Savings Calculator",
    calcSubtitle:"Choose your massage & plan to see exact savings",
    calcChooseTherapy:"Select Therapy (₹1,499+)",
    calcChoosePlan:"Select Membership Plan",
    normalPrice:"Normal Price",memberPrice:"Member Price",annualSaving:"Annual Saving",
    memberTestTitle:"Happy Members",
    faqTitle:"Frequently Asked Questions",
    faq1q:"Can I cancel my membership?",
    faq1a:"Yes, cancel anytime. Pro-rata refund for unused sessions. 10% service charge applies if cancelled within 3 months.",
    faq2q:"Do unused sessions carry forward?",faq2a:"Absolutely! Sessions don't expire. Use them next month.",
    faq3q:"Can I gift membership to someone?",faq3a:"Yes! Gift cards are available for any loved one.",
    cfaq1q:"Is pre-booking necessary?",cfaq1a:"Walk-in available, but advance booking recommended for a guaranteed slot.",
    cfaq2q:"Is parking available?",cfaq2a:"Yes, ample parking at The Business Hub.",
    aboutH1:"About Mauli Spa",ourStory:"Our Story",aboutTitle:"The Story of Mauli Spa",
    aboutSubtitle:"Unit of Mauli Ayurvedic Massage Therapy",
    aboutP1:"Mauli Spa began with a dream — to create a place where people can truly relax away from the chaos of daily life.",
    aboutP2:"Combining ancient Ayurvedic traditions with modern wellness practices, we created a sanctuary that nourishes your body, mind and soul.",
    aboutP3:"Our mission isn't just massage — it's bringing sustained wellness into your life. Our therapists are technically skilled and genuinely caring.",
    statYears:"Years",statClients:"Clients",statTherapies:"Therapies",statRating:"Rating",
    ourVision:"Our Vision",visionDesc:"To promote a stress-free lifestyle and guide every client toward complete wellness.",
    ourMission:"Our Mission",missionDesc:"Combining ancient Ayurvedic wisdom with modern comfort for the best healing experience.",
    ourValues:"Our Values",valuesDesc:"Authenticity, purity, care and continuous improvement — our core values.",
    ourTeam:"Our Team",
    contactH1:"Contact Us",contactSub:"We are waiting to welcome you",
    startJourney:"Start Your Wellness Journey",
    contactFormDesc:"Enter your name and number — we'll contact you within 15 minutes!",
    fName:"Your Name *",fPhone:"Mobile Number *",
    fIdProof:"Bring any Government ID for Physical Verification *",
    fService:"Service Interested In",fDate:"Preferred Date",fTime:"Preferred Time",fMsg:"Message",
    submitBtn:"Start Your Wellness Journey 🌿",
    formSuccessMsg:"We received your message. We'll call you within 15 minutes!",
    quickFaqs:"Quick FAQs",findUs:"Find Us",getDirections:"Get Directions →",
    moreH1:"More from Mauli Spa",moreSub:"Explore more options",
    referTitle:"Refer & Earn Discount",
    referDesc:"Refer a friend to Mauli Ayurvedic Massage and both get a discount! Valid on services above ₹1,500.",
    referHoverText:"Refer a friend & earn discounts together!",
    rs1:"Refer Mauli Spa to your friends",rs2:"After friend's visit, you get a discount",
    rs3:"Friend gets a special discount on first therapy!",
    referYouGet:"You get: 10% off on next service (min ₹1,500)",
    referFriendGet:"Friend gets: 5% off on first visit",referNow:"Refer Now",
    referTerms:"*Terms apply. Valid on services above ₹1,500 only.",
    joinTeamTitle:"Join Us as Team",
    joinTeamDesc:"Become part of Mauli Spa's growing family. Choose your work style!",
    joinTeamHoverText:"Be part of our growing wellness family!",
    salariedTitle:"Salaried",sal1:"Fixed monthly salary",sal2:"PF & ESI benefits",sal4:"Training provided",
    freelanceTitle:"Freelancer",fr1:"Flexible hours",fr2:"Per-15 Days payment",
    fr3:"Work from our center",fr4:"Upscale your Therapy skill",applyNow:"Apply Now",
    learningTitle:"Learning Center",
    learningDesc:"Learn about Ayurveda and wellness. Courses and workshops available!",
    learningHoverText:"Learn the art of Ayurvedic healing!",
    l1h:"Ayurveda Basics",l1p:"Introduction to Ayurvedic principles",
    l2h:"Massage Techniques",l2p:"Learn professional massage skills",
    l3h:"Oil & Herb Knowledge",l3p:"Pure Ayurvedic oils and herbs",
    l4h:"Certification Course",l4p:"Get certified as an Ayurvedic therapist",
    comingSoon:"Coming Soon",learnEnroll:"Enroll Now",
    qTherapies:"All Therapies",qMembership:"Membership",qCatalogue:"E-Catalogue",qGallery:"Gallery",
    termsH1:"Terms & Conditions",privacyH1:"Privacy Policy",
    legalUpdated:"Last Updated: 1 May 2026 · Version 1.1",closeBtn:"Close",
    seeMore:"See More",bookNow:"Book Now",
    planSilver:"Silver",planGold:"Gold",planPlatinum:"Platinum",bestSeller:"Best Seller",
    joinSilver:"Join Silver",joinGold:"Join Gold",joinPlatinum:"Join Platinum",
    silver1:"1 Session / month",silver2:"5% Off extra sessions",silver3:"Guest Pass",
    silver4:"Priority Support",silver5:"Extended Duration",
    gold1:"2 Sessions / month",gold2:"15% Off extra sessions",gold3:"1 Guest Pass / month",
    gold4:"Priority Support",gold5:"30 days validity",
    plat1:"4 Sessions / month",plat2:"25% Off extra sessions",plat3:"2 Guest Pass / month",
    plat4:"Priority Support",plat5:"5+30 days validity",
    hygCertified:"Certified Therapists",hygCertifiedP:"Professional and certified team",
    hygNatural:"Pure Natural Oils",hygNaturalP:"100% natural oils used",
    hygDisposable:"Disposable Sheets",hygDisposableP:"Fresh sheets every session",
    hygSanitized:"Sanitized Rooms",hygSanitizedP:"Deep sanitized after every client",
    tcAcceptLabel:"I have read and agree to the",tcLinkText:"Terms & Conditions",
    tcError:"Please accept the Terms & Conditions to proceed.",
    thDeepTissue:"Deep Tissue Therapy",thDeepTissueShort:"Targeted deep pressure for chronic muscle tension",
    thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 mins",
    thTilTel:"Til Tel Massage",thTilTelShort:"Traditional sesame warmth",
    thTilTelPrice:"₹1,499",thTilTelDur:"60 mins",
    thBackPain:"Back Pain Massage",thBackPainShort:"Instant back pain relief",
    thBackPainPrice:"₹999",thBackPainDur:"30 mins"
  },

  hi:{
    tagline:"माउली आयुर्वेदिक मसाज थेरेपी",
    heroEyebrow:"प्राचीन आयुर्वेदिक पद्धति",heroLine1:"पुनः ऊर्जावान करें",heroLine2:"आत्मा और शरीर को",
    heroSub:"अपने शरीर और मन को संपूर्ण स्वास्थ्य प्रदान करें",
    heroBook:"अपना सत्र बुक करें",heroCatalogue:"कैटलॉग देखें",
    top3Badge:"सबसे लोकप्रिय थेरेपी",top3Title:"हमारी सबसे पसंदीदा सेवाएं",
    seeAllTherapies:"सभी थेरेपी देखें →",
    whyBadge:"हमें क्यों चुनें",whyTitle:"माउली आयुर्वेदिक मसाज क्यों?",
    w1h:"विशेषज्ञ थेरेपिस्ट",w1p:"अनुभवी और प्रमाणित स्टाफ",
    w2h:"शुद्ध आयुर्वेदिक तेल",w2p:"100% प्राकृतिक और जड़ी-बूटी से बने तेल",
    w3h:"शांत माहौल",w3p:"शोर-शराबे से दूर एक शांत वातावरण",
    w4h:"स्वच्छता पहले",w4p:"डिस्पोजेबल शीट, अंडरगारमेंट और सैनिटाइज़्ड कमरे",
    w5h:"प्रमाणित केंद्र",w5p:"सरकार प्रमाणित आयुर्वेदिक केंद्र",
    w6h:"7 दिन खुला",w6p:"सोम–रवि: सुबह 10 – रात 9 बजे",
    w7h:"3 प्राइवेट केबिन",w7p:"हर केबिन में पूरी privacy — सिर्फ आप और आपका सुकून",
    w8h:"फैन + सेंट्रल AC",w8p:"हर केबिन में 1 dedicated fan और centralised AC",
    w9h:"प्रीमियम बाथरूम",w9p:"Combined bathroom with geyser, hot & cold shower",
    benefitsBadge:"स्वास्थ्य लाभ",benefitsTitle:"आपको क्या मिलेगा?",
    b1h:"तनाव और चिंता से राहत",b1p:"तनाव, अवसाद और चिंता से मुक्ति",
    b2h:"बेहतर रक्त संचार",b2p:"बेहतर रक्त संचार और ऊर्जा स्तर",
    b3h:"त्वचा की चमक",b3p:"त्वचा की प्राकृतिक चमक बढ़ाना",
    b4h:"दर्द से राहत",b4p:"जोड़, पीठ और मांसपेशियों के दर्द से राहत",
    b5h:"अच्छी नींद",b5p:"नींद बेहतर होगी, अनिद्रा से मुक्ति",
    learnMore:"और जानें →",
    reviewsTitle:"हमारे ग्राहक क्या कहते हैं?",seeReviews:"सभी समीक्षाएं देखें",
    ctaTitle:"आज ही अपनी वेलनेस यात्रा शुरू करें",
    ctaSub:"हमसे बात करें और अपना परफेक्ट थेरेपी प्लान बनाएं",ctaBook:"सत्र बुक करें",
    navHome:"होम",navTherapies:"वेलनेस थेरेपी",navGallery:"गैलरी",
    navMembership:"वेलनेस सदस्यता",navAbout:"हमारे बारे में",navContact:"संपर्क करें",navMore:"और",
    navTerms:"नियम और शर्तें",navPrivacy:"गोपनीयता नीति",
    offerTag:"सीमित प्रस्ताव",offerTitle:"पहले 50 सदस्यों के लिए मुफ्त फेशियल!",
    offerDesc:"आज जॉइन करें + पहले सत्र पर 20% छूट पाएं।",
    footerBio:"पुणे का प्रीमियर आयुर्वेदिक वेलनेस सेंटर।",
    quickLinks:"त्वरित लिंक",contactInfo:"संपर्क जानकारी",trustBadges:"विश्वास और न्यूज़लेटर",
    newsletterDesc:"वेलनेस टिप्स के लिए सब्सक्राइब करें",subscribe:"सब्सक्राइब",
    therapiesH1:"वेलनेस थेरेपी",therapiesSub:"प्राचीन आयुर्वेदिक कला से संपूर्ण स्वास्थ्य",
    therapiesBadge:"सभी सेवाएं",therapiesTitle:"हमारी वेलनेस थेरेपी",
    galleryH1:"गैलरी",gallerySub:"हमारा शांत और सुंदर वातावरण देखें",
    followUs:"हमें सोशल मीडिया पर फॉलो करें",virtualTour:"वर्चुअल टूर",
    virtualTourLabel:"माउली स्पा — वर्चुअल टूर",photoGallery:"फोटो गैलरी",
    memberH1:"वेलनेस सदस्यता",memberSub:"हर बार पे करने की झंझट छोड़ें",
    limitedOffer:"सीमित समय प्रस्ताव:",limitedOfferDesc:"पहले 50 सदस्यों के लिए जॉइन करते ही एक FREE फेशियल मिलेगा!",
    savingsCalc:"स्मार्ट बचत कैलकुलेटर",
    calcSubtitle:"अपनी मसाज और प्लान चुनें — सटीक बचत देखें",
    calcChooseTherapy:"थेरेपी चुनें (₹1,499+)",calcChoosePlan:"सदस्यता प्लान चुनें",
    normalPrice:"सामान्य मूल्य",memberPrice:"सदस्य मूल्य",annualSaving:"वार्षिक बचत",
    memberTestTitle:"खुश सदस्य",
    faqTitle:"अक्सर पूछे जाने वाले सवाल",
    faq1q:"क्या सदस्यता रद्द कर सकते हैं?",
    faq1a:"हाँ, कभी भी रद्द कर सकते हैं। अनुपयोगी सत्रों का pro-rata refund मिलेगा। 3 महीने के अंदर रद्द करने पर 10% service charge लागू होगा।",
    faq2q:"अनुपयोगी सत्र अगले महीने ले जा सकते हैं?",faq2a:"बिल्कुल! सत्र expire नहीं होते।",
    faq3q:"क्या सदस्यता किसी और को gift कर सकते हैं?",faq3a:"हाँ! Gift card available है।",
    cfaq1q:"क्या pre-booking ज़रूरी है?",cfaq1a:"Walk-in available है, लेकिन advance booking recommended है।",
    cfaq2q:"क्या parking available है?",cfaq2a:"हाँ, The Business Hub में ample parking available है।",
    aboutH1:"माउली स्पा के बारे में",ourStory:"हमारी कहानी",aboutTitle:"माउली स्पा की कहानी",
    aboutSubtitle:"माउली आयुर्वेदिक मसाज थेरेपी की इकाई",
    aboutP1:"माउली स्पा की शुरुआत एक सपने से हुई — एक ऐसी जगह बनाना जहाँ लोग daily life की भागदौड़ से बाहर आ सकें।",
    aboutP2:"प्राचीन Ayurvedic traditions और modern wellness को मिला कर एक sanctuary create किया है।",
    aboutP3:"हमारा mission सिर्फ massage देना नहीं — बल्कि sustained wellness लाना है।",
    statYears:"वर्ष",statClients:"ग्राहक",statTherapies:"थेरेपी",statRating:"रेटिंग",
    ourVision:"हमारी दृष्टि",visionDesc:"Stress-free lifestyle promote करना और हर client को संपूर्ण स्वास्थ्य की ओर guide करना।",
    ourMission:"हमारा मिशन",missionDesc:"प्राचीन Ayurvedic wisdom को modern comfort के साथ combine करना।",
    ourValues:"हमारे मूल्य",valuesDesc:"Authenticity, purity, care और continuous improvement।",
    ourTeam:"हमारी टीम",
    contactH1:"संपर्क करें",contactSub:"हम आपका स्वागत करने के लिए इंतजार कर रहे हैं",
    startJourney:"अपनी वेलनेस यात्रा शुरू करें",
    contactFormDesc:"अपना नाम और नंबर डालें — हम 15 मिनट में contact करेंगे!",
    fName:"आपका नाम *",fPhone:"मोबाइल नंबर *",
    fIdProof:"कोई भी सरकारी ID लेकर आएं (Physical Verification के लिए) *",
    fService:"रुचि की सेवा",fDate:"पसंदीदा तारीख",fTime:"पसंदीदा समय",fMsg:"संदेश",
    submitBtn:"अपनी वेलनेस यात्रा शुरू करें 🌿",
    formSuccessMsg:"आपका message मिल गया। हम 15 मिनट में call करेंगे!",
    quickFaqs:"त्वरित प्रश्न",findUs:"हमें ढूंढें",getDirections:"दिशा निर्देश →",
    moreH1:"माउली स्पा से और",moreSub:"और विकल्प देखें",
    referTitle:"रेफर करें और छूट पाएं",referDesc:"अपने दोस्त को refer करें और दोनों को discount पाएं!",
    referHoverText:"दोस्त को refer करें और साथ में discount पाएं!",
    rs1:"अपने दोस्त को Mauli Spa refer करें",rs2:"दोस्त के visit के बाद आपको discount मिलेगा",
    rs3:"और दोस्त को भी first visit पर special discount!",
    referYouGet:"आपको: अगली सेवा पर 10% छूट",referFriendGet:"दोस्त को: पहली visit पर 5% छूट",
    referNow:"अभी refer करें",referTerms:"*नियम लागू। केवल ₹1,500 से ऊपर।",
    joinTeamTitle:"टीम में शामिल हों",joinTeamDesc:"Mauli Spa के बढ़ते परिवार का हिस्सा बनें!",
    joinTeamHoverText:"हमारे बढ़ते wellness परिवार का हिस्सा बनें!",
    salariedTitle:"वेतनभोगी",sal1:"निश्चित मासिक वेतन",sal2:"PF और ESI लाभ",sal4:"प्रशिक्षण प्रदान",
    freelanceTitle:"फ्रीलांसर",fr1:"लचीले घंटे",fr2:"प्रति-15 दिन भुगतान",
    fr3:"हमारे center से काम करें",fr4:"अपनी Therapy Skills को बेहतर बनाएं",applyNow:"अभी आवेदन करें",
    learningTitle:"लर्निंग सेंटर",learningDesc:"Ayurveda और wellness के बारे में सीखें।",
    learningHoverText:"आयुर्वेदिक healing की कला सीखें!",
    l1h:"आयुर्वेद मूल बातें",l1p:"आयुर्वेदिक सिद्धांतों का परिचय",
    l2h:"मसाज तकनीक",l2p:"Professional massage skills सीखें",
    l3h:"तेल और जड़ी-बूटी ज्ञान",l3p:"Pure Ayurvedic oils और herbs",
    l4h:"प्रमाणन पाठ्यक्रम",l4p:"Ayurvedic therapist के रूप में प्रमाणित हों",
    comingSoon:"जल्द आ रहा है",learnEnroll:"अभी नामांकन करें",
    qTherapies:"सभी थेरेपी",qMembership:"सदस्यता",qCatalogue:"ई-कैटलॉग",qGallery:"गैलरी",
    termsH1:"नियम और शर्तें",privacyH1:"गोपनीयता नीति",
    legalUpdated:"अंतिम अपडेट: 1 मई 2026 · संस्करण 1.1",closeBtn:"बंद करें",
    seeMore:"और देखें",bookNow:"अभी बुक करें",
    planSilver:"सिल्वर",planGold:"गोल्ड",planPlatinum:"प्लैटिनम",bestSeller:"बेस्ट सेलर",
    joinSilver:"सिल्वर जॉइन करें",joinGold:"गोल्ड जॉइन करें",joinPlatinum:"प्लैटिनम जॉइन करें",
    silver1:"1 सत्र / माह",silver2:"अतिरिक्त सत्र पर 5% छूट",silver3:"गेस्ट पास",
    silver4:"प्राथमिकता सहायता",silver5:"विस्तारित अवधि",
    gold1:"2 सत्र / माह",gold2:"अतिरिक्त सत्र पर 15% छूट",gold3:"1 गेस्ट पास / माह",
    gold4:"प्राथमिकता सहायता",gold5:"30 दिन वैधता",
    plat1:"4 सत्र / माह",plat2:"25% छूट",plat3:"2 गेस्ट पास / माह",
    plat4:"प्राथमिकता सहायता",plat5:"5+30 दिन वैधता",
    hygCertified:"प्रमाणित थेरेपिस्ट",hygCertifiedP:"पेशेवर और प्रमाणित टीम",
    hygNatural:"शुद्ध प्राकृतिक तेल",hygNaturalP:"100% प्राकृतिक तेल का उपयोग",
    hygDisposable:"डिस्पोजेबल शीट",hygDisposableP:"हर सत्र में नई शीट",
    hygSanitized:"सैनिटाइज़्ड कमरे",hygSanitizedP:"हर client के बाद गहरी सफाई",
    tcAcceptLabel:"मैंने पढ़ा है और सहमत हूँ",tcLinkText:"नियम और शर्तें",
    tcError:"आगे बढ़ने के लिए कृपया नियम और शर्तें स्वीकार करें।",
    thDeepTissue:"डीप टिशू मसाज",thDeepTissueShort:"पुरानी मांसपेशियों के तनाव के लिए गहरा दबाव",
    thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 मिनट",
    thTilTel:"तिल तेल मसाज",thTilTelShort:"पारंपरिक तिल तेल की गर्माहट",
    thTilTelPrice:"₹1,499",thTilTelDur:"60 मिनट",
    thBackPain:"पीठ दर्द मसाज",thBackPainShort:"पीठ दर्द से तुरंत राहत",
    thBackPainPrice:"₹999",thBackPainDur:"30 मिनट"
  },

  mr:{
    tagline:"माउली आयुर्वेदिक मसाज थेरपी",
    heroEyebrow:"प्राचीन आयुर्वेदिक पद्धत",heroLine1:"पुनर्जीवित करा",heroLine2:"आत्मा आणि शरीर",
    heroSub:"आयुर्वेदिक ज्ञानाने संपूर्ण आरोग्य",
    heroBook:"सत्र बुक करा",heroCatalogue:"कॅटलॉग पहा",
    top3Badge:"सर्वाधिक लोकप्रिय थेरपी",top3Title:"आमच्या आवडत्या सेवा",
    seeAllTherapies:"सर्व थेरपी पहा →",
    whyBadge:"आम्हाला का निवडा",whyTitle:"माउली आयुर्वेदिक मसाज का?",
    w1h:"तज्ज्ञ थेरपिस्ट",w1p:"अनुभवी आणि प्रमाणित कर्मचारी",
    w2h:"शुद्ध आयुर्वेदिक तेले",w2p:"100% नैसर्गिक औषधी तेले",
    w3h:"शांत वातावरण",w3p:"गोंगाटापासून दूर शांत जागा",
    w4h:"स्वच्छता प्रथम",w4p:"डिस्पोजेबल शीट, अंडरगारमेंट आणि निर्जंतुकीकरण खोल्या",
    w5h:"प्रमाणित केंद्र",w5p:"सरकार प्रमाणित आयुर्वेदिक केंद्र",
    w6h:"7 दिवस उघडे",w6p:"सोम–रवि: सकाळी 10 – रात्री 9",
    w7h:"3 प्राइवेट केबिन",w7p:"हर केबिन मध्ये पूर्ण privacy",
    w8h:"फैन + सेंट्रल AC",w8p:"हर केबिन मध्ये fan आणि AC",
    w9h:"प्रीमियम बाथरूम",w9p:"Geyser, hot & cold shower आणि mini hotel shop",
    benefitsBadge:"आरोग्य फायदे",benefitsTitle:"आपल्याला काय मिळेल?",
    b1h:"तणाव निवारण",b1p:"तणाव आणि चिंतेपासून मुक्ती",
    b2h:"चांगले रक्त परिसंचरण",b2p:"सुधारित रक्तप्रवाह",
    b3h:"त्वचेची चमक",b3p:"त्वचेची नैसर्गिक चमक",
    b4h:"वेदना निवारण",b4p:"सांधे व पाठ दुखण्यापासून आराम",
    b5h:"चांगली झोप",b5p:"झोपेची गुणवत्ता सुधारेल",
    learnMore:"अधिक जाणून घ्या →",
    reviewsTitle:"आमचे ग्राहक काय म्हणतात?",seeReviews:"सर्व पुनरावलोकने",
    ctaTitle:"आजच वेलनेस प्रवास सुरू करा",
    ctaSub:"आमच्याशी बोला आणि थेरपी प्लान बनवा",ctaBook:"सत्र बुक करा",
    navHome:"मुख्यपृष्ठ",navTherapies:"वेलनेस थेरपी",navGallery:"गॅलरी",
    navMembership:"वेलनेस सदस्यत्व",navAbout:"आमच्याबद्दल",navContact:"संपर्क करा",navMore:"अधिक",
    navTerms:"अटी व शर्ती",navPrivacy:"गोपनीयता धोरण",
    offerTag:"मर्यादित ऑफर",offerTitle:"पहिल्या 50 सदस्यांसाठी मोफत फेशियल!",
    offerDesc:"आज जॉइन करा + 20% सूट.",
    footerBio:"पुण्याचे प्रीमियर आयुर्वेदिक वेलनेस केंद्र.",
    quickLinks:"द्रुत दुवे",contactInfo:"संपर्क माहिती",trustBadges:"विश्वास आणि वृत्तपत्र",
    newsletterDesc:"वेलनेस टिप्ससाठी सदस्यता घ्या",subscribe:"सदस्यता घ्या",
    therapiesH1:"वेलनेस थेरपी",therapiesSub:"प्राचीन आयुर्वेदिक कलेने संपूर्ण आरोग्य",
    therapiesBadge:"सर्व सेवा",therapiesTitle:"आमच्या वेलनेस थेरपी",
    galleryH1:"गॅलरी",gallerySub:"आमचे शांत वातावरण पहा",
    followUs:"सोशल मीडियावर फॉलो करा",virtualTour:"व्हर्च्युअल टूर",
    virtualTourLabel:"माउली स्पा — व्हर्च्युअल टूर",photoGallery:"फोटो गॅलरी",
    memberH1:"वेलनेस सदस्यत्व",memberSub:"प्रत्येक वेळी पैसे देणे बंद करा",
    limitedOffer:"मर्यादित ऑफर:",limitedOfferDesc:"पहिल्या 50 सदस्यांना मोफत फेशियल!",
    savingsCalc:"स्मार्ट बचत कॅल्क्युलेटर",
    calcSubtitle:"मसाज आणि प्लान निवडा — अचूक बचत पहा",
    calcChooseTherapy:"थेरपी निवडा (₹1,499+)",calcChoosePlan:"सदस्यत्व प्लान निवडा",
    normalPrice:"सामान्य किंमत",memberPrice:"सदस्य किंमत",annualSaving:"वार्षिक बचत",
    memberTestTitle:"आनंदी सदस्य",
    faqTitle:"वारंवार विचारले प्रश्न",
    faq1q:"सदस्यत्व रद्द करता येईल का?",
    faq1a:"हो, कधीही रद्द करता येईल. न वापरलेल्या सत्रांचा pro-rata refund मिळेल. 3 महिन्यांच्या आत रद्द केल्यास 10% service charge लागेल.",
    faq2q:"न वापरलेले सत्र पुढे नेता येतील का?",faq2a:"नक्कीच! सत्रे कालबाह्य होत नाहीत.",
    faq3q:"सदस्यत्व भेट म्हणून देता येईल का?",faq3a:"हो! गिफ्ट कार्ड उपलब्ध आहे.",
    cfaq1q:"आगाऊ बुकिंग आवश्यक आहे का?",cfaq1a:"वॉक-इन उपलब्ध आहे, पण आगाऊ बुकिंग शिफारसीय.",
    cfaq2q:"पार्किंग उपलब्ध आहे का?",cfaq2a:"हो, The Business Hub मध्ये पार्किंग उपलब्ध.",
    aboutH1:"माउली स्पाबद्दल",ourStory:"आमची कथा",aboutTitle:"माउली स्पाची कथा",
    aboutSubtitle:"माउली आयुर्वेदिक मसाज थेरपीची शाखा",
    aboutP1:"माउली स्पाची सुरुवात एका स्वप्नाने झाली — दैनंदिन जीवनाच्या गोंधळापासून दूर विश्रांतीची जागा निर्माण करणे.",
    aboutP2:"प्राचीन आयुर्वेदिक परंपरा आणि आधुनिक wellness एकत्र करून sanctuary तयार केले.",
    aboutP3:"आमचे ध्येय फक्त massage नाही — टिकाऊ wellness आणणे हे आहे.",
    statYears:"वर्षे",statClients:"ग्राहक",statTherapies:"थेरपी",statRating:"रेटिंग",
    ourVision:"आमची दृष्टी",visionDesc:"तणावमुक्त जीवनशैली प्रोत्साहित करणे आणि प्रत्येक client ला संपूर्ण आरोग्याकडे मार्गदर्शन.",
    ourMission:"आमचे ध्येय",missionDesc:"प्राचीन आयुर्वेदिक ज्ञान आधुनिक सुविधांसह.",
    ourValues:"आमची मूल्ये",valuesDesc:"प्रामाणिकता, शुद्धता, काळजी आणि सुधारणा.",
    ourTeam:"आमची टीम",
    contactH1:"संपर्क करा",contactSub:"आम्ही स्वागतासाठी तयार आहोत",
    startJourney:"वेलनेस प्रवास सुरू करा",
    contactFormDesc:"नाव आणि नंबर टाका — 15 मिनिटांत संपर्क करू!",
    fName:"आपले नाव *",fPhone:"मोबाइल नंबर *",
    fIdProof:"कोणताही सरकारी ID आणा (Physical Verification साठी) *",
    fService:"इच्छित सेवा",fDate:"पसंतीची तारीख",fTime:"पसंतीची वेळ",fMsg:"संदेश",
    submitBtn:"वेलनेस प्रवास सुरू करा 🌿",
    formSuccessMsg:"संदेश मिळाला. 15 मिनिटांत कॉल करू!",
    quickFaqs:"त्वरित प्रश्न",findUs:"आम्हाला शोधा",getDirections:"दिशा मिळवा →",
    moreH1:"माउली स्पाकडून अधिक",moreSub:"अधिक पर्याय पहा",
    referTitle:"रेफर करा आणि सूट मिळवा",referDesc:"मित्राला refer करा आणि दोघांनाही सूट!",
    referHoverText:"मित्राला refer करा आणि सूट एकत्र मिळवा!",
    rs1:"मित्राला Mauli Spa refer करा",rs2:"मित्राच्या भेटीनंतर सूट मिळेल",
    rs3:"मित्राला पहिल्या भेटीत विशेष सूट!",
    referYouGet:"तुम्हाला: 10% सूट",referFriendGet:"मित्राला: 5% सूट",
    referNow:"आता refer करा",referTerms:"*अटी लागू.",
    joinTeamTitle:"टीममध्ये सहभागी व्हा",joinTeamDesc:"माउली स्पाच्या कुटुंबाचा भाग व्हा!",
    joinTeamHoverText:"आमच्या वाढत्या wellness कुटुंबाचा भाग व्हा!",
    salariedTitle:"वेतनधारी",sal1:"निश्चित मासिक वेतन",sal2:"PF आणि ESI",sal4:"प्रशिक्षण",
    freelanceTitle:"फ्रीलांसर",fr1:"लवचिक वेळ",fr2:"प्रति-15 दिवस देयक",
    fr3:"केंद्रातून काम",fr4:"Therapy Skills सुधारा",applyNow:"आता अर्ज करा",
    learningTitle:"लर्निंग सेंटर",learningDesc:"आयुर्वेद आणि wellness शिका.",
    learningHoverText:"आयुर्वेदिक healing ची कला शिका!",
    l1h:"आयुर्वेद मूलतत्त्वे",l1p:"आयुर्वेदिक तत्त्वांचा परिचय",
    l2h:"मसाज तंत्र",l2p:"व्यावसायिक skills शिका",
    l3h:"तेल आणि औषधी ज्ञान",l3p:"शुद्ध आयुर्वेदिक तेले",
    l4h:"प्रमाणपत्र अभ्यासक्रम",l4p:"Ayurvedic therapist प्रमाणित व्हा",
    comingSoon:"लवकरच येत आहे",learnEnroll:"आता नोंदणी करा",
    qTherapies:"सर्व थेरपी",qMembership:"सदस्यत्व",qCatalogue:"ई-कॅटलॉग",qGallery:"गॅलरी",
    termsH1:"अटी व शर्ती",privacyH1:"गोपनीयता धोरण",
    legalUpdated:"शेवटचे अपडेट: 1 मे 2026 · आवृत्ती 1.1",closeBtn:"बंद करा",
    seeMore:"अधिक पहा",bookNow:"आता बुक करा",
    planSilver:"सिल्व्हर",planGold:"गोल्ड",planPlatinum:"प्लॅटिनम",bestSeller:"बेस्ट सेलर",
    joinSilver:"सिल्व्हर जॉइन करा",joinGold:"गोल्ड जॉइन करा",joinPlatinum:"प्लॅटिनम जॉइन करा",
    silver1:"1 सत्र / महिना",silver2:"5% सूट",silver3:"गेस्ट पास",
    silver4:"प्राधान्य समर्थन",silver5:"वाढीव कालावधी",
    gold1:"2 सत्रे / महिना",gold2:"15% सूट",gold3:"1 गेस्ट पास / महिना",
    gold4:"प्राधान्य समर्थन",gold5:"30 दिवस वैधता",
    plat1:"4 सत्रे / महिना",plat2:"25% सूट",plat3:"2 गेस्ट पास / महिना",
    plat4:"प्राधान्य समर्थन",plat5:"5+30 दिवस वैधता",
    hygCertified:"प्रमाणित थेरपिस्ट",hygCertifiedP:"व्यावसायिक टीम",
    hygNatural:"शुद्ध नैसर्गिक तेले",hygNaturalP:"100% नैसर्गिक तेले",
    hygDisposable:"डिस्पोजेबल शीट",hygDisposableP:"प्रत्येक सत्रात नवीन शीट",
    hygSanitized:"निर्जंतुकीकरण खोल्या",hygSanitizedP:"प्रत्येक ग्राहकानंतर सफाई",
    tcAcceptLabel:"मी वाचले आहे आणि सहमत आहे",tcLinkText:"अटी व शर्ती",
    tcError:"पुढे जाण्यासाठी कृपया अटी व शर्ती स्वीकारा.",
    thDeepTissue:"डीप टिश्यू मसाज",thDeepTissueShort:"जुन्या स्नायू तणावासाठी खोल दाब",
    thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 मिनिटे",
    thTilTel:"तीळ तेल मसाज",thTilTelShort:"पारंपारिक तीळ तेलाची उष्णता",
    thTilTelPrice:"₹1,499",thTilTelDur:"60 मिनिटे",
    thBackPain:"पाठदुखी मसाज",thBackPainShort:"पाठदुखीपासून त्वरित आराम",
    thBackPainPrice:"₹999",thBackPainDur:"30 मिनिटे"
  }
};

/* fallback other languages to English */
['ta','te','bn','gu','kn','pa','ml'].forEach(function(lang){
  if(!T[lang]) T[lang]=Object.assign({},T.en);
});

/* ── TERMS & PRIVACY — English + Hindi + Marathi ──────────── */
const TERMS_EN = `
<h2>1. Acceptance of Terms</h2>
<p><strong>Mauli Spa</strong> is a brand name under Mauli Ayurvedic Massage Therapy, providing authentic Ayurvedic wellness services.</p>
<p>By using Mauli Spa's services, you agree to these Terms and Conditions. These apply to all clients visiting Shop No 112, First Floor, The Business Hub, Karve Road, Kothrud, Pune 411038, or booking online.</p>

<h2>2. Website & IP Maintenance</h2>
<p>Technical management and website updates are exclusively handled by <strong>Leadknight</strong>. Unauthorized access or third-party modifications to the website source code are strictly prohibited and may void the maintenance support.</p>
<p>All content on this website (text, images, logos, videos, layout) is the intellectual property of Mauli Ayurvedic Massage Therapy. Using it without written permission is illegal under the Indian Copyright Act 1957.</p>

<h2>3. Booking &amp; Cancellation Policy</h2>
<ul>
  <li>Advance booking is recommended for a guaranteed slot. Walk-in is subject to availability.</li>
  <li>Cancellations must be made <strong>48 hours before the scheduled appointment</strong> to be eligible for a refund.</li>
  <li><strong>No-show or last-minute cancellation</strong> will result in forfeiture of the booking deposit. No refund will be issued.</li>
  <li><strong>Membership pro-rata refund:</strong> Calculated by deducting the cost of used sessions from total card value. A <strong>10% service charge</strong> applies if cancelled within 3 months for Silver, Gold, or Platinum memberships.</li>
</ul>

<h2>4. Health Disclaimer</h2>
<p><strong>Mauli Spa services are for therapeutic and wellness purposes only. This is NOT a medical or sexual service.</strong></p>
<p>Massage therapy is not a substitute for medical treatment. Clients with serious medical conditions (heart disease, cancer, blood clots, pregnancy, recent surgery, etc.) must consult their physician before booking.</p>

<h2>5. Customer Conduct</h2>
<p><strong>Indecent behaviour, sexually inappropriate advances, or rude conduct will result in immediate service termination. No refund will be provided in such cases.</strong> Management reserves the right to refuse service and report incidents to law enforcement.</p>
<p>By booking, the client confirms they are <strong>not under the influence of alcohol or illegal drugs</strong>. Violation results in immediate service termination with no refund.</p>

<h2>5a. Minor Policy</h2>
<p>Individuals under the age of <strong>18 (minors) are not permitted</strong> to avail services unless accompanied by a parent or legal guardian throughout the session. Valid ID proof of both the minor and guardian is mandatory.</p>

<h2>6. Health &amp; Safety</h2>
<ul>
  <li>Customers <strong>must disclose</strong> any allergies, skin conditions, pregnancy, or health conditions such as high blood pressure, diabetes, or cardiac issues before the session.</li>
  <li>The Spa is <strong>not responsible</strong> if the client has concealed relevant health information that results in an adverse reaction.</li>
  <li>The Spa is not liable for any <strong>normal physiological reactions</strong> (temporary soreness, mild redness, etc.) following therapy.</li>
  <li><strong>Cross-gender massage policy:</strong> Male clients are assigned male therapists and female clients are assigned female therapists, in accordance with local regulatory guidelines.</li>
</ul>

<h2>7. Mandatory ID Proof</h2>
<p><strong>A valid Government-issued ID (Aadhaar Card, PAN Card, Voter ID, Passport, or Driving Licence) is mandatory for every booking and walk-in visit.</strong> Entry may be refused without valid ID.</p>
<p><strong>Note:</strong> IDs are verified physically at the center and are <strong>not stored digitally</strong> on website servers. ID details are recorded only in our on-premises physical register as required by government guidelines.</p>

<h2>8. Privacy &amp; Data</h2>
<p>Customer data (name, phone number, ID type) will be kept secure and <strong>shared with government regulators/Police only if required by law</strong>. We do not sell personal data to third parties.</p>

<h2>9. Limitation of Liability</h2>
<p>The Spa is <strong>not responsible for theft or loss of personal belongings</strong>. Clients are advised to secure their valuables. The Spa is also not liable for normal physiological reactions following therapy.</p>

<h2>10. Gift Vouchers &amp; Membership</h2>
<ul>
  <li>Gift Vouchers and Membership plans are <strong>non-transferable and pro-rata refundable</strong>, subject to Point 3 (Cancellation Policy).</li>
  <li>Unused sessions are carry-forward eligible as per plan terms.</li>
</ul>

<h2>11. Refer &amp; Earn</h2>
<p>Valid only on services above ₹1,500. One referral discount per transaction. Subject to change without prior notice.</p>

<h2>12. Therapist Certification</h2>
<p>All Mauli Spa therapists hold recognized diplomas/certificates in Ayurvedic massage or wellness therapy. Certifications are available for inspection on premises.</p>

<h2>13. Governing Law</h2>
<p>These terms are governed by the laws of Maharashtra, India. Disputes shall be resolved in Pune courts.</p>

<h2>14. Contact</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>
<p style="margin-top:16px;font-size:.85rem;color:#888;">NIC Code: 86901 &nbsp;|&nbsp; UDYAM-MH-26-0887153</p>`;

const TERMS_HI = `
<h2>1. शर्तों की स्वीकृति</h2>
<p><strong>माउली स्पा</strong>, माउली आयुर्वेदिक मसाज थेरेपी का एक ब्रांड नाम है, जो प्रामाणिक आयुर्वेदिक wellness सेवाएं प्रदान करता है।</p>
<p>माउली स्पा की सेवाओं का उपयोग करके आप इन नियमों और शर्तों से सहमत होते हैं। ये सभी clients पर लागू होते हैं जो Shop No 112, First Floor, The Business Hub, Karve Road, Kothrud, Pune 411038 पर आते हैं या ऑनलाइन बुकिंग करते हैं।</p>

<h2>2. वेबसाइट और IP रखरखाव</h2>
<p>तकनीकी प्रबंधन और वेबसाइट अपडेट विशेष रूप से <strong>Leadknight</strong> द्वारा handled किए जाते हैं। वेबसाइट के source code में unauthorized access या third-party modifications सख्त वर्जित है।</p>
<p>इस वेबसाइट पर मौजूद सारा content (text, images, logos, videos aur layout) माउली आयुर्वेदिक मसाज थेरेपी की property है। बिना written permission के इसका उपयोग Indian Copyright Act 1957 के तहत गैर-कानूनी है।</p>

<h2>3. बुकिंग और रद्दीकरण नीति</h2>
<ul>
  <li>Guaranteed slot के लिए advance booking recommended है। Walk-in availability के अनुसार होगी।</li>
  <li>Refund के लिए cancellation <strong>scheduled appointment से 48 घंटे पहले</strong> होनी चाहिए।</li>
  <li><strong>No-show या last-minute cancellation</strong> पर booking deposit जब्त हो जाएगी। कोई refund नहीं दिया जाएगा।</li>
  <li><strong>Membership pro-rata refund:</strong> Used sessions की cost card value से घटाकर calculate होगी। Silver, Gold, Platinum membership के लिए 3 महीने के अंदर cancel करने पर <strong>10% service charge</strong> लागू होगा।</li>
</ul>

<h2>4. स्वास्थ्य अस्वीकरण</h2>
<p><strong>माउली स्पा की सेवाएं केवल therapeutic और wellness उद्देश्यों के लिए हैं। यह कोई medical या sexual service नहीं है।</strong></p>
<p>Massage therapy medical treatment का विकल्प नहीं है। गंभीर medical conditions वाले clients (heart disease, cancer, pregnancy, recent surgery आदि) को booking से पहले अपने physician से consult करना चाहिए।</p>

<h2>5. ग्राहक आचरण</h2>
<p><strong>अशोभनीय व्यवहार, यौन रूप से अनुचित advances, या अभद्र आचरण के परिणामस्वरूप तुरंत service समाप्त कर दी जाएगी। ऐसी स्थिति में कोई refund नहीं दिया जाएगा।</strong></p>
<p>बुकिंग करके client यह confirm करता है कि वह <strong>शराब या अवैध drugs के प्रभाव में नहीं है</strong>।</p>

<h2>5a. नाबालिग नीति</h2>
<p><strong>18 वर्ष से कम आयु के clients (नाबालिग)</strong> को session के दौरान parent या legal guardian के साथ आना अनिवार्य है। नाबालिग और guardian दोनों का valid ID proof mandatory है।</p>

<h2>6. स्वास्थ्य एवं सुरक्षा</h2>
<ul>
  <li>Clients को session शुरू होने से पहले कोई भी allergy, skin condition, pregnancy, या high blood pressure, diabetes जैसी health conditions <strong>अवश्य बताएं</strong>।</li>
  <li>Spa <strong>उत्तरदायी नहीं है</strong> यदि client ने relevant health information छुपाई हो।</li>
  <li>Therapy के बाद <strong>सामान्य physiological reactions</strong> (temporary soreness, mild redness आदि) के लिए Spa उत्तरदायी नहीं है।</li>
  <li><strong>Cross-gender massage नीति:</strong> Male clients के लिए male therapists और female clients के लिए female therapists assigned किए जाते हैं, government guidelines के अनुसार।</li>
</ul>

<h2>7. अनिवार्य ID Proof</h2>
<p><strong>प्रत्येक booking और walk-in visit के लिए valid Government-issued ID (Aadhaar Card, PAN Card, Voter ID, Passport, या Driving Licence) अनिवार्य है।</strong></p>
<p><strong>नोट:</strong> IDs को center पर physically verify किया जाता है और <strong>website servers पर digitally store नहीं किया जाता</strong>। ID details केवल हमारे on-premises physical register में government guidelines के अनुसार दर्ज की जाती हैं।</p>

<h2>8. गोपनीयता एवं डेटा</h2>
<p>Customer data (name, phone number, ID type) सुरक्षित रखा जाएगा और <strong>केवल कानून द्वारा आवश्यक होने पर Government regulators/Police के साथ share किया जाएगा</strong>। Personal data तीसरे पक्ष को नहीं बेचा जाता।</p>

<h2>9. दायित्व की सीमा</h2>
<p>Spa <strong>personal belongings की चोरी या हानि के लिए उत्तरदायी नहीं है</strong>। Clients को अपनी valuables सुरक्षित रखने की सलाह दी जाती है।</p>

<h2>10. Gift Vouchers और Membership</h2>
<ul>
  <li>Gift Vouchers और Membership plans <strong>non-transferable और pro-rata refundable</strong> हैं, Point 3 के अनुसार।</li>
  <li>Unused sessions plan terms के अनुसार carry-forward eligible हैं।</li>
</ul>

<h2>11. Refer और Earn</h2>
<p>केवल ₹1,500 से ऊपर की services पर valid। प्रति transaction एक referral discount। बिना prior notice के बदलाव का अधिकार सुरक्षित है।</p>

<h2>12. Therapist Certification</h2>
<p>माउली स्पा के सभी therapists के पास Ayurvedic massage या wellness therapy में recognized diploma/certificate है। Certifications premises पर inspection के लिए available हैं।</p>

<h2>13. शासन विधि</h2>
<p>ये नियम महाराष्ट्र, भारत के कानूनों द्वारा governed हैं। विवादों का समाधान पुणे न्यायालयों में किया जाएगा।</p>

<h2>14. संपर्क</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>
<p style="margin-top:16px;font-size:.85rem;color:#888;">NIC Code: 86901 &nbsp;|&nbsp; UDYAM-MH-26-0887153</p>`;

const TERMS_MR = `
<h2>1. अटींची स्वीकृती</h2>
<p><strong>माउली स्पा</strong>, माउली आयुर्वेदिक मसाज थेरपीचे एक ब्रँड नाव आहे, जे प्रामाणिक आयुर्वेदिक wellness सेवा पुरवते.</p>
<p>माउली स्पाच्या सेवा वापरून आपण या अटी व शर्तींशी सहमत आहात. या Shop No 112, First Floor, The Business Hub, Karve Road, Kothrud, Pune 411038 येथे येणाऱ्या सर्व clients वर लागू होतात.</p>

<h2>2. वेबसाइट आणि IP देखभाल</h2>
<p>तांत्रिक व्यवस्थापन आणि वेबसाइट अपडेट विशेषत: <strong>Leadknight</strong> द्वारे हाताळले जातात. वेबसाइटच्या source code मध्ये unauthorized access किंवा third-party बदल कडकपणे प्रतिबंधित आहेत.</p>
<p>या वेबसाइटवरील सर्व content (text, images, logos, videos, layout) माउली आयुर्वेदिक मसाज थेरपीची मालमत्ता आहे. Written permission शिवाय वापर Indian Copyright Act 1957 अंतर्गत बेकायदेशीर आहे.</p>

<h2>3. बुकिंग आणि रद्द करण्याचे धोरण</h2>
<ul>
  <li>Guaranteed slot साठी advance booking शिफारसीय आहे. Walk-in उपलब्धतेनुसार असेल.</li>
  <li>Refund साठी cancellation <strong>scheduled appointment च्या 48 तास आधी</strong> असणे आवश्यक आहे.</li>
  <li><strong>No-show किंवा last-minute cancellation</strong> वर booking deposit जप्त केली जाईल. कोणताही refund दिला जाणार नाही.</li>
  <li><strong>Membership pro-rata refund:</strong> वापरलेल्या sessions ची किंमत एकूण card value मधून वजा करून calculate केली जाईल. Silver, Gold, Platinum membership साठी 3 महिन्यांच्या आत cancel केल्यास <strong>10% service charge</strong> लागेल.</li>
</ul>

<h2>4. आरोग्य अस्वीकरण</h2>
<p><strong>माउली स्पाच्या सेवा केवळ therapeutic आणि wellness हेतूंसाठी आहेत. ही कोणतीही medical किंवा लैंगिक सेवा नाही.</strong></p>
<p>Massage therapy ही medical treatment चा पर्याय नाही. गंभीर medical conditions असलेल्या clients नी (heart disease, cancer, pregnancy, recent surgery इ.) booking आधी physician चा सल्ला घ्यावा.</p>

<h2>5. ग्राहक आचरण</h2>
<p><strong>अशोभनीय वर्तन, लैंगिकदृष्ट्या अयोग्य advances, किंवा उद्धट वर्तन यामुळे तत्काळ service संपुष्टात येईल. अशा प्रकरणात कोणताही refund दिला जाणार नाही.</strong></p>
<p>बुकिंग करून client हे confirm करतो की ते <strong>मद्य किंवा अवैध drugs च्या प्रभावाखाली नाहीत</strong>.</p>

<h2>5a. अल्पवयीन धोरण</h2>
<p><strong>18 वर्षांपेक्षा कमी वयाच्या clients (अल्पवयीन)</strong> ना संपूर्ण session दरम्यान parent किंवा legal guardian सोबत येणे अनिवार्य आहे. अल्पवयीन आणि guardian दोघांचेही valid ID proof mandatory आहे.</p>

<h2>6. आरोग्य आणि सुरक्षा</h2>
<ul>
  <li>Clients नी session सुरू होण्यापूर्वी कोणतीही allergy, skin condition, pregnancy, किंवा high blood pressure, diabetes यासारख्या health conditions <strong>अवश्य सांगाव्यात</strong>.</li>
  <li>Client ने relevant health information लपवल्यामुळे होणाऱ्या adverse reaction साठी Spa <strong>जबाबदार नाही</strong>.</li>
  <li>Therapy नंतरच्या <strong>सामान्य physiological reactions</strong> साठी Spa जबाबदार नाही.</li>
  <li><strong>Cross-gender massage धोरण:</strong> Male clients साठी male therapists आणि female clients साठी female therapists नेमले जातात, government guidelines नुसार.</li>
</ul>

<h2>7. अनिवार्य ID Proof</h2>
<p><strong>प्रत्येक booking आणि walk-in visit साठी valid Government-issued ID (Aadhaar Card, PAN Card, Voter ID, Passport, किंवा Driving Licence) अनिवार्य आहे.</strong></p>
<p><strong>नोंद:</strong> IDs center वर physically verify केल्या जातात आणि <strong>website servers वर digitally store केल्या जात नाहीत</strong>. ID details केवळ आमच्या on-premises physical register मध्ये government guidelines नुसार नोंदवल्या जातात.</p>

<h2>8. गोपनीयता आणि डेटा</h2>
<p>Customer data सुरक्षित ठेवले जाईल आणि <strong>केवळ कायद्याने आवश्यक असल्यास Government regulators/Police सोबत share केले जाईल</strong>. Personal data तृतीय पक्षाला विकले जात नाही.</p>

<h2>9. दायित्वाची मर्यादा</h2>
<p>Spa <strong>personal belongings च्या चोरी किंवा नुकसानासाठी जबाबदार नाही</strong>. Clients ना त्यांच्या valuables सुरक्षित ठेवण्याचा सल्ला दिला जातो.</p>

<h2>10. Gift Vouchers आणि Membership</h2>
<ul>
  <li>Gift Vouchers आणि Membership plans <strong>non-transferable आणि pro-rata refundable</strong> आहेत, Point 3 नुसार.</li>
  <li>न वापरलेले sessions plan terms नुसार carry-forward eligible आहेत.</li>
</ul>

<h2>11. Refer आणि Earn</h2>
<p>केवळ ₹1,500 पेक्षा जास्त services साठी valid. प्रति transaction एक referral discount. पूर्व सूचनेशिवाय बदल करण्याचा अधिकार राखीव.</p>

<h2>12. Therapist Certification</h2>
<p>माउली स्पाच्या सर्व therapists कडे Ayurvedic massage किंवा wellness therapy मध्ये recognized diploma/certificate आहे. Certifications premises वर inspection साठी उपलब्ध आहेत.</p>

<h2>13. शासन कायदा</h2>
<p>या अटी महाराष्ट्र, भारताच्या कायद्यांनुसार governed आहेत. विवाद पुण्याच्या न्यायालयात सोडवले जातील.</p>

<h2>14. संपर्क</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>
<p style="margin-top:16px;font-size:.85rem;color:#888;">NIC Code: 86901 &nbsp;|&nbsp; UDYAM-MH-26-0887153</p>`;

const PRIVACY_EN = `
<h2>1. Information We Collect</h2>
<p>We collect name, phone number, email, Government ID type, and service preferences when you book or contact us.</p>
<h2>2. How We Use Your Information</h2>
<ul>
  <li>To confirm and manage appointments</li>
  <li>To send wellness tips (only if subscribed)</li>
  <li>To improve our services</li>
  <li>To comply with legal/regulatory obligations</li>
</ul>
<h2>3. Data Storage &amp; Security</h2>
<p>Your information is stored securely and is <strong>not shared with third parties</strong> without consent, except as required by law (Police/Government regulators).</p>
<h2>4. ID Proof Data</h2>
<p>Government ID information is used solely for identity verification. It is verified physically at the center — not stored digitally on website servers. This information will <strong>only be disclosed to law enforcement authorities if legally required</strong>. Personal data is retained for a <strong>maximum of 90 days</strong> and then securely deleted, unless government regulations require longer retention.</p>
<h2>5. Cookies</h2>
<p>Our website may use cookies to enhance user experience, including remembering your language preference.</p>
<h2>6. WhatsApp Communication</h2>
<p>When you contact us via WhatsApp (operated by Meta Platforms, Inc.), your messages are subject to WhatsApp's privacy policy.</p>
<h2>7. Your Rights (DPDP Act 2023)</h2>
<ul>
  <li>Right to access your personal data</li>
  <li>Right to correction of inaccurate data</li>
  <li>Right to deletion of your data (subject to legal retention requirements)</li>
  <li>Right to opt out of marketing communications</li>
</ul>
<h2>8. Children's Privacy</h2>
<p>Our services are not directed at individuals under 18 without parental/guardian written consent. Minors must be accompanied by an adult at all times.</p>
<h2>9. Contact Us</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>`;

const PRIVACY_HI = `
<h2>1. हम क्या जानकारी एकत्र करते हैं</h2>
<p>जब आप बुकिंग करते हैं या हमसे संपर्क करते हैं, तो हम नाम, फोन नंबर, email, Government ID type, और service preferences collect करते हैं।</p>
<h2>2. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
<ul>
  <li>Appointments confirm और manage करने के लिए</li>
  <li>Wellness tips भेजने के लिए (केवल subscribed होने पर)</li>
  <li>हमारी सेवाएं बेहतर करने के लिए</li>
  <li>कानूनी/नियामक दायित्वों का पालन करने के लिए</li>
</ul>
<h2>3. Data Storage और Security</h2>
<p>आपकी जानकारी सुरक्षित रखी जाती है और बिना सहमति के <strong>third parties के साथ share नहीं की जाती</strong>, सिवाय कानूनी आवश्यकता के (Police/Government regulators)।</p>
<h2>4. ID Proof Data</h2>
<p>Government ID information केवल identity verification के लिए उपयोग होती है। इसे center पर physically verify किया जाता है — website servers पर digitally store नहीं होती। यह जानकारी <strong>केवल law enforcement को कानूनी रूप से आवश्यक होने पर</strong> दी जाएगी। Personal data <strong>maximum 90 दिन</strong> तक retain किया जाता है, फिर securely delete कर दिया जाता है।</p>
<h2>5. Cookies</h2>
<p>हमारी website user experience बेहतर करने के लिए cookies का उपयोग कर सकती है, जिसमें आपकी language preference याद रखना शामिल है।</p>
<h2>6. WhatsApp Communication</h2>
<p>जब आप WhatsApp (Meta Platforms, Inc. द्वारा संचालित) के माध्यम से हमसे संपर्क करते हैं, तो आपके messages WhatsApp की privacy policy के अधीन हैं।</p>
<h2>7. आपके अधिकार (DPDP Act 2023)</h2>
<ul>
  <li>अपने personal data तक पहुंच का अधिकार</li>
  <li>गलत data को सुधारने का अधिकार</li>
  <li>Data deletion का अधिकार (कानूनी retention requirements के अनुसार)</li>
  <li>Marketing communications से opt out करने का अधिकार</li>
</ul>
<h2>8. बच्चों की गोपनीयता</h2>
<p>हमारी सेवाएं बिना parental/guardian written consent के 18 वर्ष से कम आयु के व्यक्तियों के लिए नहीं हैं। Minors को हर समय adult के साथ आना चाहिए।</p>
<h2>9. हमसे संपर्क करें</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>`;

const PRIVACY_MR = `
<h2>1. आम्ही कोणती माहिती गोळा करतो</h2>
<p>जेव्हा आपण बुकिंग करता किंवा आमच्याशी संपर्क करता, तेव्हा आम्ही नाव, फोन नंबर, email, Government ID type, आणि service preferences गोळा करतो.</p>
<h2>2. आम्ही आपली माहिती कशी वापरतो</h2>
<ul>
  <li>Appointments confirm आणि manage करण्यासाठी</li>
  <li>Wellness tips पाठवण्यासाठी (केवळ subscribe केल्यास)</li>
  <li>आमच्या सेवा सुधारण्यासाठी</li>
  <li>कायदेशीर/नियामक जबाबदाऱ्या पूर्ण करण्यासाठी</li>
</ul>
<h2>3. Data Storage आणि Security</h2>
<p>आपली माहिती सुरक्षित ठेवली जाते आणि संमतीशिवाय <strong>third parties सोबत share केली जात नाही</strong>, कायदेशीर आवश्यकता वगळता (Police/Government regulators).</p>
<h2>4. ID Proof Data</h2>
<p>Government ID माहिती केवळ identity verification साठी वापरली जाते. ती center वर physically verify केली जाते — website servers वर digitally store केली जात नाही. ही माहिती <strong>केवळ law enforcement ला कायदेशीरपणे आवश्यक असल्यासच</strong> दिली जाईल. Personal data <strong>जास्तीत जास्त 90 दिवस</strong> retain केले जाते, नंतर securely delete केले जाते.</p>
<h2>5. Cookies</h2>
<p>आमची website user experience सुधारण्यासाठी cookies वापरू शकते, ज्यात आपची language preference लक्षात ठेवणे समाविष्ट आहे.</p>
<h2>6. WhatsApp Communication</h2>
<p>जेव्हा आपण WhatsApp (Meta Platforms, Inc. द्वारे चालवले जाते) द्वारे आमच्याशी संपर्क करता, तेव्हा आपले messages WhatsApp च्या privacy policy च्या अधीन आहेत.</p>
<h2>7. आपले अधिकार (DPDP Act 2023)</h2>
<ul>
  <li>आपल्या personal data ची access मिळवण्याचा अधिकार</li>
  <li>चुकीची माहिती दुरुस्त करण्याचा अधिकार</li>
  <li>Data deletion चा अधिकार (कायदेशीर retention requirements नुसार)</li>
  <li>Marketing communications मधून opt out करण्याचा अधिकार</li>
</ul>
<h2>8. मुलांची गोपनीयता</h2>
<p>आमच्या सेवा parental/guardian written consent शिवाय 18 वर्षांपेक्षा कमी वयाच्या व्यक्तींसाठी नाहीत. Minors ना नेहमी adult सोबत असणे आवश्यक आहे.</p>
<h2>9. आमच्याशी संपर्क करा</h2>
<p>Email: <a href="mailto:maulispa33@gmail.com">maulispa33@gmail.com</a> | Phone: <a href="tel:9156972622">9156972622</a></p>`;

/* ── THERAPY DATA ─────────────────────────────────────────── */
const THERAPY_EN={
  thSpaPack:"Spa Pack",thSpaPackPrice:"₹3,999",thSpaPackDur:"Full Pack",thSpaPackShort:"Complete wellness: cleansing, scrub, steam and full body massage.",thSpaPackLong:"Our signature Spa Pack gives you a complete wellness journey starting with cleansing, scrub, relaxing steam, and deep Ayurvedic massage.",thSpaPackP1:"Deep cleansing and detoxification",thSpaPackP2:"Skin softening and natural glow",thSpaPackP3:"Relief from muscle tension",thSpaPackP4:"Better blood circulation",thSpaPackM1:"Complete relaxation",thSpaPackM2:"Freedom from stress and anxiety",thSpaPackM3:"Freshness for the mind",thSpaPackFor:"For those who want complete rejuvenation.",
  thPotli:"Potli Massage",thPotliPrice:"₹2,999",thPotliDur:"90 mins",thPotliShort:"Warm herbal pouch massage for deep pain relief and relaxation.",thPotliLong:"Warm herbal pouches penetrate deep into muscles relieving chronic pain, arthritis, and stiffness.",thPotliP1:"Relief from joint pain and arthritis",thPotliP2:"Muscle stiffness reduces",thPotliP3:"Circulation improves with deep heat",thPotliP4:"Skin receives nourishing nutrients",thPotliM1:"Deep relaxation",thPotliM2:"Better sleep quality",thPotliM3:"Stress hormones reduce",thPotliFor:"Joint pain, arthritis patients and elderly people.",
  thCouple:"Couple Massage",thCouplePrice:"₹2,699",thCoupleDur:"60 mins each",thCoupleShort:"Shared wellness for two. Relax and reconnect together in perfect harmony.",thCoupleLong:"Couple Massage is a romantic and rejuvenating experience. Side-by-side massage sessions customized to individual needs.",thCoupleP1:"Full body relaxation for both",thCoupleP2:"Muscle tension release",thCoupleP3:"Improved circulation and skin glow",thCoupleM1:"Emotional bonding strengthened",thCoupleM2:"Shared deep relaxation",thCoupleM3:"Relief from stress and daily worries",thCoupleFor:"Couples who want to share quality wellness time together.",
  thMedOil:"Medicinal Oil Massage",thMedOilPrice:"₹2,499",thMedOilDur:"75 mins",thMedOilShort:"Therapeutic Ayurvedic oil massage tailored to your body constitution.",thMedOilLong:"Specific Ayurvedic oils selected per your dosha penetrate deep tissues and accelerate healing naturally.",thMedOilP1:"Dosha balance restored",thMedOilP2:"Deep tissue nourishment",thMedOilP3:"Joint lubrication improved",thMedOilP4:"Toxin removal",thMedOilM1:"Mind-body balance",thMedOilM2:"Mental clarity improved",thMedOilM3:"Anxiety reduced",thMedOilFor:"Those with specific health concerns or seeking authentic Ayurvedic experience.",
  thDeepTissue:"Deep Tissue Massage",thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 mins",thDeepTissueShort:"Targeted deep pressure for chronic muscle tension and pain relief.",thDeepTissueLong:"Deep, firm pressure targets chronic muscle tension and knots. Especially effective for chronic pain and injury recovery.",thDeepP1:"Chronic muscle tension eliminated",thDeepP2:"Injury recovery accelerated",thDeepP3:"Posture improved",thDeepP4:"Blood pressure reduced",thDeepM1:"Deep relaxation",thDeepM2:"Mental peace after pain relief",thDeepM3:"Better body awareness",thDeepFor:"Athletes, office workers with chronic back/neck pain.",
  thAloe:"Aloe Vera Gel Massage",thAloePrice:"₹1,999",thAloeDur:"60 mins",thAloeShort:"Cooling aloe vera massage for deep hydration and soothing relief.",thAloeLong:"Pure aloe vera gel deeply hydrates skin and reduces inflammation. Very soothing in summer or after sunburn.",thAloeP1:"Deep skin hydration",thAloeP2:"Inflammation reduced",thAloeP3:"Sunburn relief",thAloeP4:"Skin texture improved",thAloeM1:"Cooling sensation",thAloeM2:"Immediate relaxation",thAloeM3:"Confidence from skin glow",thAloeFor:"Dry skin, sensitive skin or those wanting natural treatment.",
  thCream:"Cream Massage",thCreamPrice:"₹1,799",thCreamDur:"60 mins",thCreamShort:"Luxurious cream-based massage for nourished and glowing skin.",thCreamLong:"Premium moisturizing cream absorbed into skin during massage. Skin feels instantly soft and nourished.",thCreamP1:"Intense skin moisturization",thCreamP2:"Smooth and soft skin",thCreamP3:"Cell renewal promoted",thCreamP4:"Body aches reduced",thCreamM1:"Pampered feeling",thCreamM2:"Stress release",thCreamM3:"Luxury experience",thCreamFor:"Those wanting dry skin treatment along with relaxation.",
  thTilTel:"Til Tel Massage",thTilTelPrice:"₹1,499",thTilTelDur:"60 mins",thTilTelShort:"Traditional sesame oil massage for warmth and deep nourishment.",thTilTelLong:"Traditional Ayurvedic Abhyanga. Naturally warming, penetrates deep tissues and balances Vata dosha.",thTilP1:"Vata dosha balanced",thTilP2:"Joint strength improved",thTilP3:"Bone density supported",thTilP4:"Warmth in winter",thTilM1:"Grounding and calming effect",thTilM2:"Anxiety reduced",thTilM3:"Better sleep",thTilFor:"Elderly people, those wanting warmth in winter, Vata imbalance.",
  thPowder:"Powder Massage",thPowderPrice:"₹1,299",thPowderDur:"45 mins",thPowderShort:"Udvartana — dry herbal powder massage for detox and weight management.",thPowderLong:"Vigorous massage with dry herbal powder helps break fat tissue, stimulate the lymphatic system, and deep detoxification.",thPowderP1:"Helps in fat reduction",thPowderP2:"Lymphatic drainage",thPowderP3:"Skin exfoliation",thPowderP4:"Cellulite reduced",thPowderM1:"Energized feeling",thPowderM2:"Confidence boost",thPowderM3:"Body awareness",thPowderFor:"Weight management goals, natural detox, oily/thick skin.",
  thFacial:"Facial",thFacialPrice:"₹999",thFacialDur:"60 mins",thFacialShort:"Deep cleansing Ayurvedic facial for glowing, radiant skin.",thFacialLong:"Natural herbs deeply cleanse skin. Dead skin cells removed, pores cleaned, natural glow restored.",thFacialP1:"Deep pore cleansing",thFacialP2:"Dead skin removal",thFacialP3:"Natural glow restored",thFacialP4:"Acne reduced",thFacialM1:"Refreshed and confident feel",thFacialM2:"Self-care satisfaction",thFacialFor:"Dull, tired skin. For instant glow before an event.",
  thBackPain:"Back Pain Massage",thBackPainPrice:"₹999",thBackPainDur:"30 mins",thBackPainShort:"Targeted relief for back pain, muscle tension and spine alignment.",thBackPainLong:"Specifically targets back muscles, spine and lower back. Designed for IT professionals and drivers.",thBackP1:"Instant back pain relief",thBackP2:"Muscle spasm reduced",thBackP3:"Spine alignment",thBackP4:"Posture correction",thBackM1:"Peace after pain relief",thBackM2:"Better concentration",thBackM3:"Work performance improved",thBackFor:"Office workers, IT professionals, drivers.",
  thLegPain:"Leg Pain Massage",thLegPainPrice:"₹999",thLegPainDur:"30 mins",thLegPainShort:"Relief for tired, aching legs — ideal for people on their feet all day.",thLegPainLong:"Perfect for teachers, shopkeepers, nurses. Improves circulation, reduces swelling, relaxes muscles.",thLegP1:"Leg pain and cramps reduced",thLegP2:"Swelling reduced",thLegP3:"Blood circulation boost",thLegP4:"Relief in varicose veins",thLegM1:"Relief from tired feeling",thLegM2:"Energy boost",thLegFor:"Standing jobs, athletes, long working hours.",
  thFoot:"Foot Massage",thFootPrice:"₹499",thFootDur:"20 mins",thFootShort:"Reflexology-based foot massage to rejuvenate your entire body.",thFootLong:"Feet contain pressure points for the entire body. Pressing these stimulates various organs.",thFootP1:"Pain relief through reflex points",thFootP2:"Better sleep",thFootP3:"Digestive health",thFootP4:"Headache relief",thFootM1:"Instant relaxation",thFootM2:"Mental fatigue reduced",thFootM3:"Mood elevated",thFootFor:"Quick relaxation, standing jobs, heel pain.",
  thHead:"Head Massage",thHeadPrice:"₹499",thHeadDur:"25 mins",thHeadShort:"Shiroabhyanga — traditional Indian head massage for stress and hair health.",thHeadLong:"Scalp, neck and shoulder massage with warm oil directly soothes the brain. Effective for migraines, hair fall and insomnia.",thHeadP1:"Migraine and headache relief",thHeadP2:"Hair fall reduced",thHeadP3:"Scalp health improved",thHeadP4:"Neck stiffness released",thHeadM1:"Immediate stress relief",thHeadM2:"Mental clarity",thHeadM3:"Better concentration",thHeadM4:"Help with insomnia",thHeadFor:"Students, professionals, migraine patients, hair health."
};

const THERAPY_HI={thSpaPack:"स्पा पैक",thSpaPackPrice:"₹3,999",thSpaPackDur:"पूरा पैक",thSpaPackShort:"संपूर्ण वेलनेस: सफाई, स्क्रब, स्टीम और पूरे शरीर की मालिश।",thSpaPackLong:"हमारे Spa Pack में complete wellness journey मिलती है।",thSpaPackP1:"गहरी सफाई और detoxification",thSpaPackP2:"त्वचा को नरम करना और प्राकृतिक चमक",thSpaPackP3:"मांसपेशियों के तनाव से राहत",thSpaPackP4:"बेहतर रक्त संचार",thSpaPackM1:"संपूर्ण विश्राम",thSpaPackM2:"तनाव और चिंता से मुक्ति",thSpaPackM3:"मन को ताजगी",thSpaPackFor:"जो पूर्ण rejuvenation चाहते हैं।",thPotli:"पोटली मसाज",thPotliPrice:"₹2,999",thPotliDur:"90 मिनट",thPotliShort:"गर्म जड़ी-बूटियों की पोटली से गहरी दर्द राहत।",thPotliLong:"Herbal heat गहरी muscles में जाकर पुराना दर्द, गठिया और अकड़न दूर करती है।",thPotliP1:"जोड़ों के दर्द और गठिया में राहत",thPotliP2:"मांसपेशियों की अकड़न कम",thPotliP3:"गहरी गर्मी से circulation बेहतर",thPotliP4:"त्वचा को पोषण",thPotliM1:"गहरा विश्राम",thPotliM2:"बेहतर नींद",thPotliM3:"तनाव हार्मोन कम",thPotliFor:"जोड़ों के दर्द, गठिया रोगी और बुजुर्गों के लिए।",thCouple:"कपल मसाज",thCouplePrice:"₹2,699",thCoupleDur:"60 मिनट प्रति व्यक्ति",thCoupleShort:"दो के लिए साझा वेलनेस।",thCoupleLong:"दोनों के लिए side-by-side मसाज।",thCoupleP1:"दोनों के लिए पूर्ण शरीर का विश्राम",thCoupleP2:"मांसपेशियों का तनाव दूर",thCoupleP3:"बेहतर रक्त संचार",thCoupleM1:"भावनात्मक बंधन मजबूत",thCoupleM2:"साझा गहरा विश्राम",thCoupleM3:"तनाव से मुक्ति",thCoupleFor:"Couples के लिए।",thMedOil:"औषधीय तेल मालिश",thMedOilPrice:"₹2,499",thMedOilDur:"75 मिनट",thMedOilShort:"Dosha के हिसाब से Therapeutic Ayurvedic oil massage।",thMedOilLong:"Specific Ayurvedic oils deep tissue में penetrate करके healing accelerate करती हैं।",thMedOilP1:"Dosha संतुलन",thMedOilP2:"Deep tissue पोषण",thMedOilP3:"जोड़ों का स्नेहन बेहतर",thMedOilP4:"विषाक्त पदार्थ निकलना",thMedOilM1:"मन-शरीर संतुलन",thMedOilM2:"मानसिक स्पष्टता",thMedOilM3:"चिंता कम",thMedOilFor:"विशेष स्वास्थ्य समस्याओं वाले।",thDeepTissue:"डीप टिशू मसाज",thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 मिनट",thDeepTissueShort:"पुरानी मांसपेशियों के तनाव के लिए गहरा दबाव।",thDeepTissueLong:"Chronic muscle tension और knots को target करने के लिए deep pressure।",thDeepP1:"पुरानी मांसपेशियों का तनाव दूर",thDeepP2:"चोट से उबरना तेज़",thDeepP3:"मुद्रा बेहतर",thDeepP4:"रक्तचाप कम",thDeepM1:"गहरा विश्राम",thDeepM2:"दर्द से मुक्ति के बाद शांति",thDeepM3:"शरीर के प्रति जागरूकता",thDeepFor:"Athletes, office workers।",thAloe:"एलोवेरा जेल मसाज",thAloePrice:"₹1,999",thAloeDur:"60 मिनट",thAloeShort:"गहरी हाइड्रेशन के लिए cooling aloe vera massage।",thAloeLong:"Pure aloe vera gel skin को deep hydrate करता है।",thAloeP1:"गहरी त्वचा हाइड्रेशन",thAloeP2:"सूजन कम",thAloeP3:"Sunburn से राहत",thAloeP4:"त्वचा की बनावट बेहतर",thAloeM1:"Cooling sensation",thAloeM2:"तुरंत विश्राम",thAloeM3:"आत्मविश्वास",thAloeFor:"Dry skin, sensitive skin।",thCream:"क्रीम मसाज",thCreamPrice:"₹1,799",thCreamDur:"60 मिनट",thCreamShort:"पोषित और चमकदार त्वचा के लिए cream massage।",thCreamLong:"Premium moisturizing cream skin में absorb होती है।",thCreamP1:"गहन त्वचा नमी",thCreamP2:"चिकनी और मुलायम त्वचा",thCreamP3:"Cell renewal",thCreamP4:"शरीर दर्द कम",thCreamM1:"Pampered feeling",thCreamM2:"तनाव दूर",thCreamM3:"Luxury अनुभव",thCreamFor:"Dry skin treatment के साथ relaxation।",thTilTel:"तिल तेल मसाज",thTilTelPrice:"₹1,499",thTilTelDur:"60 मिनट",thTilTelShort:"पारंपरिक तिल तेल की गर्माहट।",thTilTelLong:"पारंपरिक आयुर्वेदिक अभ्यंग।",thTilP1:"वात दोष संतुलन",thTilP2:"जोड़ों की ताकत",thTilP3:"हड्डियों का घनत्व",thTilP4:"सर्दियों में गर्माहट",thTilM1:"Grounding effect",thTilM2:"चिंता कम",thTilM3:"बेहतर नींद",thTilFor:"बुजुर्ग, सर्दियों में गर्माहट चाहने वाले।",thPowder:"पाउडर मसाज",thPowderPrice:"₹1,299",thPowderDur:"45 मिनट",thPowderShort:"Udvartana — detox के लिए dry herbal powder massage।",thPowderLong:"Dry herbal powder से vigorous massage।",thPowderP1:"Fat reduction में help",thPowderP2:"Lymphatic drainage",thPowderP3:"Skin exfoliation",thPowderP4:"Cellulite कम",thPowderM1:"Energized feeling",thPowderM2:"Confidence boost",thPowderM3:"Body awareness",thPowderFor:"Weight management, natural detox।",thFacial:"फेशियल",thFacialPrice:"₹999",thFacialDur:"60 मिनट",thFacialShort:"चमकदार त्वचा के लिए deep cleansing Ayurvedic facial।",thFacialLong:"Natural herbs से skin deep cleanse।",thFacialP1:"Deep pore cleansing",thFacialP2:"Dead skin removal",thFacialP3:"Natural glow",thFacialP4:"Acne कम",thFacialM1:"Refreshed feel",thFacialM2:"Self-care satisfaction",thFacialFor:"Dull, tired skin।",thBackPain:"पीठ दर्द मसाज",thBackPainPrice:"₹999",thBackPainDur:"30 मिनट",thBackPainShort:"पीठ दर्द से तुरंत राहत।",thBackPainLong:"Back muscles, spine और lower back को target करती है।",thBackP1:"पीठ दर्द तुरंत राहत",thBackP2:"Muscle spasm कम",thBackP3:"Spine alignment",thBackP4:"Posture correction",thBackM1:"शांति",thBackM2:"बेहतर concentration",thBackM3:"Work performance",thBackFor:"Office workers, IT professionals, drivers।",thLegPain:"पैर दर्द मसाज",thLegPainPrice:"₹999",thLegPainDur:"30 मिनट",thLegPainShort:"थके, दर्द भरे पैरों के लिए राहत।",thLegPainLong:"Teachers, shopkeepers, nurses के लिए perfect।",thLegP1:"पैर दर्द और cramps कम",thLegP2:"सूजन कम",thLegP3:"Blood circulation boost",thLegP4:"Varicose veins में राहत",thLegM1:"थकान से राहत",thLegM2:"Energy boost",thLegFor:"Standing jobs, athletes।",thFoot:"पैर मसाज",thFootPrice:"₹499",thFootDur:"20 मिनट",thFootShort:"Reflexology-based foot massage।",thFootLong:"पैर में पूरे शरीर के pressure points हैं।",thFootP1:"Reflex points से राहत",thFootP2:"बेहतर नींद",thFootP3:"Digestive health",thFootP4:"Headache relief",thFootM1:"तुरंत विश्राम",thFootM2:"Mental fatigue कम",thFootM3:"Mood बेहतर",thFootFor:"Quick relaxation, heel pain।",thHead:"हेड मसाज",thHeadPrice:"₹499",thHeadDur:"25 मिनट",thHeadShort:"Shiroabhyanga — तनाव और बालों के लिए।",thHeadLong:"गर्म oil से scalp, neck और shoulder massage।",thHeadP1:"Migraine relief",thHeadP2:"Hair fall कम",thHeadP3:"Scalp health",thHeadP4:"Neck stiffness दूर",thHeadM1:"तुरंत तनाव राहत",thHeadM2:"Mental clarity",thHeadM3:"बेहतर concentration",thHeadM4:"Insomnia में help",thHeadFor:"Students, professionals, migraine patients।"};

const THERAPY_MR={thSpaPack:"स्पा पॅक",thSpaPackPrice:"₹3,999",thSpaPackDur:"संपूर्ण पॅक",thSpaPackShort:"संपूर्ण वेलनेस: साफसफाई, स्क्रब, स्टीम आणि मालिश.",thSpaPackLong:"Spa Pack मध्ये साफसफाई, स्क्रब, steam आणि deep Ayurvedic massage.",thSpaPackP1:"खोल साफसफाई",thSpaPackP2:"त्वचेची चमक",thSpaPackP3:"स्नायू आराम",thSpaPackP4:"रक्ताभिसरण",thSpaPackM1:"संपूर्ण विश्रांती",thSpaPackM2:"तणावापासून मुक्ती",thSpaPackM3:"मनाची ताजेपणा",thSpaPackFor:"संपूर्ण rejuvenation साठी.",thPotli:"पोटली मसाज",thPotliPrice:"₹2,999",thPotliDur:"90 मिनिटे",thPotliShort:"उष्ण औषधी पोटलीने खोल वेदना आराम.",thPotliLong:"Herbal heat खोल muscles मध्ये जाऊन जुने दुखणे, संधिवात आराम देते.",thPotliP1:"सांधेदुखी आराम",thPotliP2:"स्नायू कडकपणा कमी",thPotliP3:"रक्ताभिसरण सुधारते",thPotliP4:"त्वचेला पोषण",thPotliM1:"खोल विश्रांती",thPotliM2:"चांगली झोप",thPotliM3:"तणाव कमी",thPotliFor:"सांधेदुखी, संधिवात रुग्ण.",thCouple:"कपल मसाज",thCouplePrice:"₹2,699",thCoupleDur:"60 मिनिटे प्रत्येकी",thCoupleShort:"दोघांसाठी सामायिक वेलनेस.",thCoupleLong:"दोघांसाठी side-by-side massage.",thCoupleP1:"दोघांसाठी विश्रांती",thCoupleP2:"स्नायू तणाव दूर",thCoupleP3:"रक्ताभिसरण",thCoupleM1:"भावनिक बंध",thCoupleM2:"खोल विश्रांती",thCoupleM3:"तणावापासून मुक्ती",thCoupleFor:"Couples साठी.",thMedOil:"औषधी तेल मालिश",thMedOilPrice:"₹2,499",thMedOilDur:"75 मिनिटे",thMedOilShort:"Dosha नुसार Therapeutic Ayurvedic oil massage.",thMedOilLong:"Dosha नुसार specific oils deep tissues मध्ये काम करतात.",thMedOilP1:"Dosha संतुलन",thMedOilP2:"खोल ऊतक पोषण",thMedOilP3:"सांधे वंगण",thMedOilP4:"विषारी पदार्थ",thMedOilM1:"मन-शरीर संतुलन",thMedOilM2:"मानसिक स्पष्टता",thMedOilM3:"चिंता कमी",thMedOilFor:"विशिष्ट आरोग्य समस्या.",thDeepTissue:"डीप टिश्यू मसाज",thDeepTissuePrice:"₹2,199",thDeepTissueDur:"70 मिनिटे",thDeepTissueShort:"जुन्या स्नायू तणावासाठी खोल दाब.",thDeepTissueLong:"Chronic muscle tension साठी deep pressure.",thDeepP1:"जुना स्नायू तणाव दूर",thDeepP2:"दुखापत बरी जलद",thDeepP3:"मुद्रा सुधारते",thDeepP4:"रक्तदाब कमी",thDeepM1:"खोल विश्रांती",thDeepM2:"शांती",thDeepM3:"शरीराची जाणीव",thDeepFor:"Athletes, office workers.",thAloe:"एलोवेरा जेल मसाज",thAloePrice:"₹1,999",thAloeDur:"60 मिनिटे",thAloeShort:"खोल hydration साठी cooling massage.",thAloeLong:"Pure aloe vera gel त्वचेला hydrate करते.",thAloeP1:"खोल hydration",thAloeP2:"जळजळ कमी",thAloeP3:"Sunburn आराम",thAloeP4:"त्वचा पोत",thAloeM1:"Cooling sensation",thAloeM2:"त्वरित विश्रांती",thAloeM3:"आत्मविश्वास",thAloeFor:"कोरडी त्वचा.",thCream:"क्रीम मसाज",thCreamPrice:"₹1,799",thCreamDur:"60 मिनिटे",thCreamShort:"पोषित त्वचेसाठी cream massage.",thCreamLong:"Premium cream त्वचेत शोषली जाते.",thCreamP1:"त्वचा moisturization",thCreamP2:"मुलायम त्वचा",thCreamP3:"Cell renewal",thCreamP4:"दुखणे कमी",thCreamM1:"Pampered feeling",thCreamM2:"तणाव दूर",thCreamM3:"Luxury",thCreamFor:"Dry skin.",thTilTel:"तीळ तेल मसाज",thTilTelPrice:"₹1,499",thTilTelDur:"60 मिनिटे",thTilTelShort:"पारंपारिक तीळ तेल मालिश.",thTilTelLong:"पारंपारिक आयुर्वेदिक अभ्यंग.",thTilP1:"वात दोष संतुलन",thTilP2:"सांधे मजबूती",thTilP3:"हाडांची घनता",thTilP4:"हिवाळ्यात उष्णता",thTilM1:"Grounding effect",thTilM2:"चिंता कमी",thTilM3:"चांगली झोप",thTilFor:"वृद्ध, हिवाळ्यात.",thPowder:"पावडर मसाज",thPowderPrice:"₹1,299",thPowderDur:"45 मिनिटे",thPowderShort:"Udvartana — detox साठी powder massage.",thPowderLong:"Dry herbal powder ने vigorous massage.",thPowderP1:"Fat reduction",thPowderP2:"Lymphatic drainage",thPowderP3:"Skin exfoliation",thPowderP4:"Cellulite कमी",thPowderM1:"Energized",thPowderM2:"आत्मविश्वास",thPowderM3:"शरीर जाणीव",thPowderFor:"Weight management.",thFacial:"फेशियल",thFacialPrice:"₹999",thFacialDur:"60 मिनिटे",thFacialShort:"चमकदार त्वचेसाठी Ayurvedic facial.",thFacialLong:"Natural herbs ने खोल सफाई.",thFacialP1:"Deep pore cleansing",thFacialP2:"Dead skin removal",thFacialP3:"Natural glow",thFacialP4:"Acne कमी",thFacialM1:"Refreshed",thFacialM2:"Self-care",thFacialFor:"Dull skin.",thBackPain:"पाठदुखी मसाज",thBackPainPrice:"₹999",thBackPainDur:"30 मिनिटे",thBackPainShort:"पाठदुखीपासून त्वरित आराम.",thBackPainLong:"Back muscles, spine ला target करते.",thBackP1:"पाठदुखी आराम",thBackP2:"Muscle spasm कमी",thBackP3:"Spine alignment",thBackP4:"Posture",thBackM1:"शांती",thBackM2:"Concentration",thBackM3:"Work performance",thBackFor:"Office workers.",thLegPain:"पाय दुखणे",thLegPainPrice:"₹999",thLegPainDur:"30 मिनिटे",thLegPainShort:"थकलेल्या पायांसाठी आराम.",thLegPainLong:"Teachers, nurses साठी perfect.",thLegP1:"पाय दुखणे कमी",thLegP2:"सूज कमी",thLegP3:"Blood circulation",thLegP4:"Varicose veins",thLegM1:"थकवा आराम",thLegM2:"Energy boost",thLegFor:"Standing jobs.",thFoot:"पाय मसाज",thFootPrice:"₹499",thFootDur:"20 मिनिटे",thFootShort:"Reflexology foot massage.",thFootLong:"पायांमध्ये pressure points आहेत.",thFootP1:"Reflex आराम",thFootP2:"झोप",thFootP3:"Digestive health",thFootP4:"Headache",thFootM1:"त्वरित विश्रांती",thFootM2:"Mental fatigue कमी",thFootM3:"Mood सुधारतो",thFootFor:"Quick relaxation.",thHead:"हेड मसाज",thHeadPrice:"₹499",thHeadDur:"25 मिनिटे",thHeadShort:"Shiroabhyanga — तणाव आणि केसांसाठी.",thHeadLong:"उष्ण oil ने scalp massage.",thHeadP1:"Migraine आराम",thHeadP2:"Hair fall कमी",thHeadP3:"Scalp health",thHeadP4:"Neck stiffness",thHeadM1:"तणाव आराम",thHeadM2:"Mental clarity",thHeadM3:"Concentration",thHeadM4:"Insomnia",thHeadFor:"Students, professionals."};

function getTherapyText(key){
  if(currentLang==='hi') return THERAPY_HI[key]||THERAPY_EN[key]||key;
  if(currentLang==='mr') return THERAPY_MR[key]||THERAPY_EN[key]||key;
  return THERAPY_EN[key]||key;
}

const THERAPIES=[
  {id:'spaPack',nameKey:'thSpaPack',priceKey:'thSpaPackPrice',durKey:'thSpaPackDur',shortKey:'thSpaPackShort',longKey:'thSpaPackLong',physKeys:['thSpaPackP1','thSpaPackP2','thSpaPackP3','thSpaPackP4'],mentKeys:['thSpaPackM1','thSpaPackM2','thSpaPackM3'],forWhomKey:'thSpaPackFor',videoSrc:'assets/therapies/spapack.mp4',imgs:["assets/therapies/spapack4.webp","assets/therapies/spapack.webp","assets/therapies/spapack1.webp","assets/therapies/spapack2.webp","assets/therapies/spapack3.webp","assets/therapies/spapack5.webp"]},
  {id:'potli',nameKey:'thPotli',priceKey:'thPotliPrice',durKey:'thPotliDur',shortKey:'thPotliShort',longKey:'thPotliLong',physKeys:['thPotliP1','thPotliP2','thPotliP3','thPotliP4'],mentKeys:['thPotliM1','thPotliM2','thPotliM3'],forWhomKey:'thPotliFor',videoSrc:'assets/therapies/potlimassage.mp4',imgs:["assets/therapies/potli.webp","assets/therapies/potli1.webp","assets/therapies/potli2.webp","assets/therapies/potli3.webp","assets/therapies/potli4.webp","assets/therapies/potli5.webp"]},
  {id:'couple',nameKey:'thCouple',priceKey:'thCouplePrice',durKey:'thCoupleDur',shortKey:'thCoupleShort',longKey:'thCoupleLong',physKeys:['thCoupleP1','thCoupleP2','thCoupleP3'],mentKeys:['thCoupleM1','thCoupleM2','thCoupleM3'],forWhomKey:'thCoupleFor',videoSrc:'assets/therapies/couple.mp4',imgs:["assets/therapies/couple.webp","assets/therapies/couple1.webp","assets/therapies/couple2.webp","assets/therapies/couple3.webp","assets/therapies/couple4.webp","assets/therapies/couple5.webp"]},
  {id:'medOil',nameKey:'thMedOil',priceKey:'thMedOilPrice',durKey:'thMedOilDur',shortKey:'thMedOilShort',longKey:'thMedOilLong',physKeys:['thMedOilP1','thMedOilP2','thMedOilP3','thMedOilP4'],mentKeys:['thMedOilM1','thMedOilM2','thMedOilM3'],forWhomKey:'thMedOilFor',videoSrc:'assets/therapies/medicionaloil.mp4',imgs:["assets/therapies/medicionaloil.webp","assets/therapies/medicionaloil1.webp","assets/therapies/medicionaloil2.webp","assets/therapies/medicionaloil3.webp","assets/therapies/medicionaloil4.webp","assets/therapies/medicionaloil5.webp"]},
  {id:'deepTissue',nameKey:'thDeepTissue',priceKey:'thDeepTissuePrice',durKey:'thDeepTissueDur',shortKey:'thDeepTissueShort',longKey:'thDeepTissueLong',physKeys:['thDeepP1','thDeepP2','thDeepP3','thDeepP4'],mentKeys:['thDeepM1','thDeepM2','thDeepM3'],forWhomKey:'thDeepFor',videoSrc:'assets/therapies/deeptissue.mp4',imgs:["assets/therapies/deeptissue4.webp","assets/therapies/deeptissue.webp","assets/therapies/deeptissue1.webp","assets/therapies/deeptissue2.webp","assets/therapies/deeptissue3.webp","assets/therapies/deeptissue5.webp"]},
  {id:'aloeVera',nameKey:'thAloe',priceKey:'thAloePrice',durKey:'thAloeDur',shortKey:'thAloeShort',longKey:'thAloeLong',physKeys:['thAloeP1','thAloeP2','thAloeP3','thAloeP4'],mentKeys:['thAloeM1','thAloeM2','thAloeM3'],forWhomKey:'thAloeFor',videoSrc:'assets/therapies/aleoveragel.mp4',imgs:["assets/therapies/aleoveragel.webp","assets/therapies/aleoveragel1.webp","assets/therapies/aleoveragel2.webp","assets/therapies/aleoveragel3.webp","assets/therapies/aleoveragel4.webp","assets/therapies/aleoveragel5.webp"]},
  {id:'cream',nameKey:'thCream',priceKey:'thCreamPrice',durKey:'thCreamDur',shortKey:'thCreamShort',longKey:'thCreamLong',physKeys:['thCreamP1','thCreamP2','thCreamP3','thCreamP4'],mentKeys:['thCreamM1','thCreamM2','thCreamM3'],forWhomKey:'thCreamFor',videoSrc:'assets/therapies/cream.mp4',imgs:["assets/therapies/cream.webp","assets/therapies/cream1.webp","assets/therapies/cream2.webp","assets/therapies/cream3.webp","assets/therapies/cream4.webp","assets/therapies/cream5.webp"]},
  {id:'tilTel',nameKey:'thTilTel',priceKey:'thTilTelPrice',durKey:'thTilTelDur',shortKey:'thTilTelShort',longKey:'thTilTelLong',physKeys:['thTilP1','thTilP2','thTilP3','thTilP4'],mentKeys:['thTilM1','thTilM2','thTilM3'],forWhomKey:'thTilFor',videoSrc:'assets/therapies/tiltel.mp4',imgs:["assets/therapies/tiltel1.webp","assets/therapies/tiltel.webp","assets/therapies/tiltel2.webp","assets/therapies/tiltel3.webp","assets/therapies/tiltel4.webp","assets/therapies/tiltel5.webp"]},
  {id:'powder',nameKey:'thPowder',priceKey:'thPowderPrice',durKey:'thPowderDur',shortKey:'thPowderShort',longKey:'thPowderLong',physKeys:['thPowderP1','thPowderP2','thPowderP3','thPowderP4'],mentKeys:['thPowderM1','thPowderM2','thPowderM3'],forWhomKey:'thPowderFor',videoSrc:'assets/therapies/powdermassage.mp4',imgs:["assets/therapies/powdermassage.webp","assets/therapies/powdermassage1.webp","assets/therapies/powdermassage2.webp","assets/therapies/powdermassage3.webp","assets/therapies/powdermassage4.webp","assets/therapies/powdermassage5.webp"]},
  {id:'facial',nameKey:'thFacial',priceKey:'thFacialPrice',durKey:'thFacialDur',shortKey:'thFacialShort',longKey:'thFacialLong',physKeys:['thFacialP1','thFacialP2','thFacialP3','thFacialP4'],mentKeys:['thFacialM1','thFacialM2'],forWhomKey:'thFacialFor',videoSrc:'assets/therapies/facial.mp4',imgs:["assets/therapies/facial.webp","assets/therapies/facial1.webp","assets/therapies/facial2.webp","assets/therapies/facial3.webp","assets/therapies/facial4.webp","assets/therapies/facial5.webp"]},
  {id:'backPain',nameKey:'thBackPain',priceKey:'thBackPainPrice',durKey:'thBackPainDur',shortKey:'thBackPainShort',longKey:'thBackPainLong',physKeys:['thBackP1','thBackP2','thBackP3','thBackP4'],mentKeys:['thBackM1','thBackM2','thBackM3'],forWhomKey:'thBackFor',videoSrc:'assets/therapies/backpain.mp4',imgs:["assets/therapies/backpain1.webp","assets/therapies/backpain.webp","assets/therapies/backpain2.webp","assets/therapies/backpain3.webp","assets/therapies/backpain4.webp","assets/therapies/backpain5.webp"]},
  {id:'legPain',nameKey:'thLegPain',priceKey:'thLegPainPrice',durKey:'thLegPainDur',shortKey:'thLegPainShort',longKey:'thLegPainLong',physKeys:['thLegP1','thLegP2','thLegP3','thLegP4'],mentKeys:['thLegM1','thLegM2'],forWhomKey:'thLegFor',videoSrc:'assets/therapies/legpain.mp4',imgs:["assets/therapies/legpain.webp","assets/therapies/legpain1.webp","assets/therapies/legpain2.webp","assets/therapies/legpain3.webp","assets/therapies/legpain4.webp","assets/therapies/legpain5.webp"]},
  {id:'foot',nameKey:'thFoot',priceKey:'thFootPrice',durKey:'thFootDur',shortKey:'thFootShort',longKey:'thFootLong',physKeys:['thFootP1','thFootP2','thFootP3','thFootP4'],mentKeys:['thFootM1','thFootM2','thFootM3'],forWhomKey:'thFootFor',videoSrc:'assets/therapies/foot.mp4',imgs:["assets/therapies/foot.webp","assets/therapies/foot1.webp","assets/therapies/foot2.webp","assets/therapies/foot3.webp","assets/therapies/foot4.webp","assets/therapies/foot5.webp"]},
  {id:'head',nameKey:'thHead',priceKey:'thHeadPrice',durKey:'thHeadDur',shortKey:'thHeadShort',longKey:'thHeadLong',physKeys:['thHeadP1','thHeadP2','thHeadP3','thHeadP4'],mentKeys:['thHeadM1','thHeadM2','thHeadM3','thHeadM4'],forWhomKey:'thHeadFor',videoSrc:'assets/therapies/headmassage.mp4',imgs:["assets/therapies/headmassage.webp","assets/therapies/headmassage1.webp","assets/therapies/headmassage2.webp","assets/therapies/headmassage3.webp","assets/therapies/headmassage4.webp","assets/therapies/headmassage5.webp"]}
];

const GALLERY_IMGS=[
  {src:"assets/gallery/maingate.webp",alt:"Spa Room"},{src:"assets/gallery/maingate1.webp",alt:"Massage Room"},
  {src:"assets/gallery/mirror.webp",alt:"Relaxation"},{src:"assets/gallery/maingate2.webp",alt:"Wellness"},
  {src:"assets/gallery/maingate3.webp",alt:"Therapy Room"},{src:"assets/gallery/counter.webp",alt:"Treatment"},
  {src:"assets/gallery/counter1.webp",alt:"Oils"},{src:"assets/gallery/counter2.webp",alt:"Herbs"},
  {src:"assets/gallery/counter3.webp",alt:"Products"},{src:"assets/gallery/counter4.webp",alt:"Steam"},
  {src:"assets/gallery/passageway.webp",alt:"Foot Spa"},{src:"assets/gallery/passageway1.webp",alt:"Facial"},
  {src:"assets/gallery/almira.webp",alt:"Ambience"},{src:"assets/gallery/oilstroage.webp",alt:"Interior"},
  {src:"assets/gallery/passage.webp",alt:"Candles"},{src:"assets/gallery/passage1.webp",alt:"Experience"},
  {src:"assets/gallery/passage2.webp",alt:"Ayurvedic Oils"},{src:"assets/gallery/privatecabin.webp",alt:"Spa Therapy"},
  {src:"assets/gallery/privatecabin1.webp",alt:"Massage Therapy"},{src:"assets/gallery/privatecabin2.webp",alt:"Wellness Room"},
  {src:"assets/gallery/washroom.webp",alt:"Spa Experience"},{src:"assets/gallery/washroom1.webp",alt:"Hot Stone"},
  {src:"assets/gallery/washroom2.webp",alt:"Herbal Treatment"},{src:"assets/gallery/washroom3.webp",alt:"Relaxation Therapy"}
];

const BENEFITS={
  stress:{title:"Stress & Anxiety Relief",img:"assets/home/benefits/stress1.webp",desc:"Massage reduces cortisol (stress hormone) by up to 30%. Regular sessions are very effective for anxiety disorders.",gallery:["assets/home/benefits/stress.webp","assets/home/benefits/stress2.webp","assets/home/benefits/stress3.webp"]},
  circulation:{title:"Better Blood Circulation",img:"assets/home/benefits/batterblood.webp",desc:"Massage dilates blood vessels and significantly improves blood flow throughout the body.",gallery:["assets/home/benefits/batterblood1.webp","assets/home/benefits/batterblood2.webp","assets/home/benefits/batterblood3.webp"]},
  skin:{title:"Skin Glow & Radiance",img:"assets/home/benefits/skinglow.webp",desc:"Ayurvedic oils deeply nourish skin cells. Dead skin cells are removed and natural radiance is restored.",gallery:["assets/home/benefits/menskinglow.webp","assets/home/benefits/skinglow1.webp","assets/home/benefits/skinglow2.webp"]},
  pain:{title:"Pain Relief",img:"assets/home/benefits/painreliefs.webp",desc:"Massage releases natural painkillers (endorphins). Immediate relief from joint pain and muscle soreness.",gallery:["assets/home/benefits/painreliefs1.webp","assets/home/benefits/painreliefs2.webp","assets/home/benefits/painreliefs3.webp"]},
  sleep:{title:"Good Sleep",img:"assets/home/benefits/goodsleep.webp",desc:"Massage boosts serotonin and melatonin levels — both essential for quality sleep.",gallery:["assets/home/benefits/goodsleep1.webp","assets/home/benefits/goodsleep2.webp","assets/home/benefits/goodsleep3.webp"]}
};

/* ── GLOBALS ─────────────────────────────────────────────── */
const LANG_LABELS={en:"EN",hi:"हि",mr:"मर",ta:"த",te:"తె",bn:"বা",gu:"ગ",kn:"ಕ",pa:"ਪ",ml:"മ"};
const FALLBACK_LANG='en';
let currentLang='en', currentHeroIdx=0, heroTimer=null;
let lbImages=[], lbIdx=0;
let tmCarouselIdx=0, tmCarouselEl=null, tmCarouselDots=[];
let currentJobType='salaried';

/* ── SAVINGS CALCULATOR ─────────────────────────────────── */
const PLAN_CONFIG={
  silver:{discount:0.05,sessions:1,label:'Silver Member'},
  gold:{discount:0.15,sessions:2,label:'Gold Member'},
  platinum:{discount:0.25,sessions:4,label:'Platinum Member'}
};

function updateCalc(){
  const therapyVal=parseInt(document.getElementById('calcTherapy')?.value||2199);
  const planKey=document.getElementById('calcPlan')?.value||'gold';
  const plan=PLAN_CONFIG[planKey];
  const sessionsPerYear=plan.sessions*12;
  const memberPrice=Math.round(therapyVal*(1-plan.discount));
  const normalAnnual=therapyVal*sessionsPerYear;
  const memberAnnual=memberPrice*sessionsPerYear;
  const annualSaving=normalAnnual-memberAnnual;

  const fmt=n=>new Intl.NumberFormat('en-IN').format(n);

  // Update main calc display
  setEl('calcNormalPrice',`₹${fmt(therapyVal)}/session`);
  setEl('calcNormalAnnual',`₹${fmt(normalAnnual)}/year (${sessionsPerYear} sessions)`);
  setEl('calcMemberLabel',plan.label);
  setEl('calcMemberPrice',`₹${fmt(memberPrice)}/session`);
  setEl('calcMemberAnnual',`₹${fmt(memberAnnual)}/year`);
  setEl('calcAnnualSaving',`₹${fmt(annualSaving)}`);
  setEl('calcDiscountPct',`${Math.round(plan.discount*100)}% off per session`);

  // Update each plan card saving tag
  ['silver','gold','platinum'].forEach(pk=>{
    const p=PLAN_CONFIG[pk];
    const mp=Math.round(therapyVal*(1-p.discount));
    const saving=therapyVal-mp;
    const el=document.getElementById(pk+'CalcSaving');
    if(el){
      el.innerHTML=`💰 Save ₹${fmt(saving)}/session with ${pk.charAt(0).toUpperCase()+pk.slice(1)}`;
      el.style.display='block';
    }
    // Highlight the selected plan card
    const card=document.getElementById('plan'+pk.charAt(0).toUpperCase()+pk.slice(1)+'Card');
    if(card) card.classList.toggle('calc-selected',pk===planKey);
  });
}

function setEl(id,val){const e=document.getElementById(id);if(e)e.textContent=val;}

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',function(){
  // Hide site loader
  setTimeout(()=>{
    const loader=document.getElementById('siteLoader');
    if(loader){loader.style.opacity='0';setTimeout(()=>loader.style.display='none',400);}
  },600);

  var hash=(window.location.hash||'').replace('#','');
  var validPages=['home','therapies','gallery','membership','about','contact','more'];
  var startPage=validPages.indexOf(hash)>=0?hash:'home';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  var startEl=document.getElementById('page-'+startPage);
  if(startEl) startEl.classList.add('active');
  document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('active',a.getAttribute('data-page')===startPage));

  detectLang();
  initHero();
  initTop3VideoHover();
  renderTherapyCards();
  renderGallery();
  renderLegal();
  initOffer();
  initScrollEffects();
  updateCalc();
  hideTeamSkeletons();

  var fd=document.getElementById('fDate');
  if(fd) fd.min=new Date().toISOString().split('T')[0];

  document.querySelectorAll('.modal-overlay').forEach(m=>{
    m.addEventListener('click',e=>{
      if(e.target===m){m.classList.remove('show');document.body.style.overflow='';}
    });
  });
});

function hideTeamSkeletons(){
  // Hide team skeletons after a short delay (bg-images load fast)
  setTimeout(()=>{
    ['ti1','ti2','ti3','ti4','ti5'].forEach(id=>{
      const el=document.getElementById(id);
      if(el) el.style.display='none';
    });
  },1200);
}

/* ── LANGUAGE ─────────────────────────────────────────────── */
function detectLang(){
  const s=localStorage.getItem('mauliLang')||'en';
  setLang(s);
}
function t(key){
  const lang=T[currentLang]||T[FALLBACK_LANG];
  return lang[key]||(T[FALLBACK_LANG]&&T[FALLBACK_LANG][key])||key;
}
function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    const val=t(k);
    if(val&&val!==k) el.innerHTML=val;
  });
}
function setLang(lang){
  currentLang=lang;
  localStorage.setItem('mauliLang',lang);
  const lbl=document.getElementById('langLabel');
  if(lbl) lbl.textContent=LANG_LABELS[lang]||lang.toUpperCase();
  document.documentElement.lang=lang;
  applyTranslations();
  closeLangMenu();
  renderTherapyCards();
  renderLegal();
  updateCalc();
}
function toggleLangMenu(){var m=document.getElementById('langMenu');if(m)m.classList.toggle('open');}
function closeLangMenu(){var m=document.getElementById('langMenu');if(m)m.classList.remove('open');}
document.addEventListener('click',e=>{if(!e.target.closest('#langWrap'))closeLangMenu();});

/* ── LEGAL RENDERING (multilingual) ─────────────────────── */
function getLegalContent(type){
  if(type==='terms'){
    if(currentLang==='hi') return TERMS_HI;
    if(currentLang==='mr') return TERMS_MR;
    return TERMS_EN;
  } else {
    if(currentLang==='hi') return PRIVACY_HI;
    if(currentLang==='mr') return PRIVACY_MR;
    return PRIVACY_EN;
  }
}
function renderLegal(){
  const tc=document.getElementById('termsContent');
  const pc=document.getElementById('privacyContent');
  if(tc) tc.innerHTML=getLegalContent('terms');
  if(pc) pc.innerHTML=getLegalContent('privacy');
}
function openLegalPopup(type){
  const content=document.getElementById('legalPopupContent');
  if(!content) return;
  const title=type==='terms'?t('termsH1'):t('privacyH1');
  const body=getLegalContent(type);
  content.innerHTML=`<h2 style="font-family:var(--fd);color:var(--green);margin-bottom:16px">${title}</h2><p style="font-size:.82rem;color:#888;margin-bottom:24px;font-style:italic;">${t('legalUpdated')}</p><div class="legal-page">${body}</div>`;
  const modal=document.getElementById('legalPopupModal');
  if(modal){modal.classList.add('show');document.body.style.overflow='hidden';}
}

/* ── HERO ─────────────────────────────────────────────────── */
function initHero(){
  const videos=Array.from(document.querySelectorAll('.hero-video'));
  const bar=document.getElementById('heroBar');
  if(!videos.length) return;
  function showVideo(idx){
    videos.forEach((v,i)=>{v.classList.toggle('active',i===idx);if(i===idx){try{v.play();}catch(e){}}});
    if(bar){bar.style.width='0';setTimeout(()=>bar.style.width='100%',60);}
  }
  function nextVideo(){currentHeroIdx=(currentHeroIdx+1)%videos.length;showVideo(currentHeroIdx);const next=(currentHeroIdx+1)%videos.length;videos[next].preload='auto';try{videos[next].load();}catch(e){}}
  showVideo(0);
  if(bar){bar.style.transition='width 6s linear';setTimeout(()=>bar.style.width='100%',120);}
  if(heroTimer) clearInterval(heroTimer);
  heroTimer=setInterval(nextVideo,6000);
}

/* ── TOP3 VIDEO HOVER ────────────────────────────────────── */
function initTop3VideoHover(){
  document.querySelectorAll('.top3-card-hover').forEach(card=>{
    const vid=card.querySelector('.top3-stroke-video');
    if(!vid) return;
    card.addEventListener('mouseenter',()=>{vid.preload='auto';try{vid.play();}catch(e){}});
    card.addEventListener('mouseleave',()=>{try{vid.pause();vid.currentTime=0;}catch(e){}});
    card.addEventListener('touchstart',()=>{vid.preload='auto';try{vid.play();}catch(e){}},{passive:true});
  });
}

/* ── NAV ─────────────────────────────────────────────────── */
function navTo(page){
  if(page==='terms'){openLegalPopup('terms');return;}
  if(page==='privacy'){openLegalPopup('privacy');return;}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  var el=document.getElementById('page-'+page);
  if(el){el.classList.add('active');}else{document.getElementById('page-home')?.classList.add('active');page='home';}
  try{window.scrollTo({top:0,behavior:'smooth'});}catch(e){window.scrollTo(0,0);}
  if(history.pushState) history.pushState(null,null,'#'+page);
  var nav=document.getElementById('mainNav');var hb=document.getElementById('hamburger');
  if(nav) nav.classList.remove('mobile-open');
  if(hb) hb.classList.remove('open');
  document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('active',a.getAttribute('data-page')===page));
  // Re-trigger calculator if going to membership
  if(page==='membership') updateCalc();
}
window.addEventListener('popstate',()=>{
  var hash=(window.location.hash||'#home').replace('#','');
  var vp=['home','therapies','gallery','membership','about','contact','more'];
  navTo(vp.indexOf(hash)>=0?hash:'home');
});
function setNavActive(el){document.querySelectorAll('.nl').forEach(a=>a.classList.remove('active'));if(el)el.classList.add('active');}
function toggleMobileNav(){var nav=document.getElementById('mainNav');var hb=document.getElementById('hamburger');if(nav)nav.classList.toggle('mobile-open');if(hb)hb.classList.toggle('open');}

/* ── OFFER POPUP ─────────────────────────────────────────── */
function initOffer(){
  if(sessionStorage.getItem('mauliOffer')) return;
  setTimeout(()=>{document.getElementById('offerPopup')?.classList.add('show');document.getElementById('offerBackdrop')?.classList.add('show');},1200);
  setTimeout(()=>closeOffer(),7200);
  document.getElementById('offerPopup')?.addEventListener('click',e=>{if(!e.target.closest('#offerCloseBtn')){closeOffer();navTo('membership');}});
  document.getElementById('offerBackdrop')?.addEventListener('click',closeOffer);
  document.getElementById('offerCloseBtn')?.addEventListener('click',closeOffer);
}
function closeOffer(){document.getElementById('offerPopup')?.classList.remove('show');document.getElementById('offerBackdrop')?.classList.remove('show');sessionStorage.setItem('mauliOffer','1');}

/* ── SCROLL EFFECTS ──────────────────────────────────────── */
function initScrollEffects(){
  const header=document.getElementById('mainHeader');
  const btt=document.getElementById('backToTop');
  window.addEventListener('scroll',()=>{const s=window.scrollY;if(header)header.classList.toggle('scrolled',s>60);if(btt)btt.classList.toggle('show',s>350);},{passive:true});
  const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.why-card,.benefit-card,.plan-card,.more-feature-card,.mq-card').forEach((el,i)=>{
    el.style.opacity='0';el.style.transform='translateY(28px)';
    el.style.transition=`opacity .5s ${i*.07}s ease,transform .5s ${i*.07}s ease`;
    io.observe(el);
  });
}

/* ── THERAPY CARDS ───────────────────────────────────────── */
function renderTherapyCards(){
  const grid=document.getElementById('therapiesGrid');
  const skel=document.getElementById('therapiesSkeletonGrid');
  if(!grid) return;
  const seeMoreTxt=t('seeMore')||'See More';
  const bookNowTxt=t('bookNow')||'Book Now';
  grid.innerHTML=THERAPIES.map((th,i)=>{
    const name=getTherapyText(th.nameKey);
    const price=getTherapyText(th.priceKey);
    const dur=getTherapyText(th.durKey);
    const short=getTherapyText(th.shortKey);
    return `<div class="tc" tabindex="0" aria-label="${name}">
      <div class="tc-media">
        <img src="${th.imgs[0]}" alt="${name}" loading="lazy" class="tc-img">
        <video class="tc-stroke-video" muted loop playsinline preload="none"><source src="${th.videoSrc}" type="video/mp4"></video>
        <div class="tc-overlay-btn"><button class="tc-see-more" onclick="openTherapyModal(${i});event.stopPropagation()"><i class="fas fa-eye"></i> ${seeMoreTxt}</button></div>
      </div>
      <div class="tc-body">
        <h3>${name}</h3><p>${short}</p>
        <div class="tc-meta"><span class="tc-price">${price}</span><span class="tc-dur"><i class="fas fa-clock"></i> ${dur}</span></div>
        <div class="tc-btns">
          <button class="btn-gold btn-sm" onclick="navTo('contact')">${bookNowTxt}</button>
          <button class="btn-outline btn-sm" onclick="openTherapyModal(${i})">${seeMoreTxt}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.tc').forEach((card,i)=>{
    card.addEventListener('mouseenter',()=>{const vid=card.querySelector('.tc-stroke-video');const img=card.querySelector('.tc-img');if(vid&&img){img.style.opacity='0';vid.style.opacity='1';vid.preload='auto';try{vid.play();}catch(e){}}});
    card.addEventListener('mouseleave',()=>{const vid=card.querySelector('.tc-stroke-video');const img=card.querySelector('.tc-img');if(vid&&img){img.style.opacity='1';vid.style.opacity='0';try{vid.pause();vid.currentTime=0;}catch(e){}}});
    card.addEventListener('keydown',e=>{if(e.key==='Enter')openTherapyModal(i);});
  });

  if(skel) skel.style.display='none';
  grid.style.display='grid';
}

/* ── THERAPY MODAL ───────────────────────────────────────── */
function openTherapyModal(idx){
  const th=THERAPIES[idx];if(!th) return;
  tmCarouselIdx=0;
  const modal=document.getElementById('therapyModal');
  const content=document.getElementById('therapyModalContent');
  if(!modal||!content) return;
  const name=getTherapyText(th.nameKey),price=getTherapyText(th.priceKey),dur=getTherapyText(th.durKey);
  const long=getTherapyText(th.longKey),phys=th.physKeys.map(k=>getTherapyText(k)),ment=th.mentKeys.map(k=>getTherapyText(k));
  const forWhom=getTherapyText(th.forWhomKey);
  const physLabel=currentLang==='hi'?'शारीरिक लाभ':currentLang==='mr'?'शारीरिक फायदे':'Physical Benefits';
  const mentLabel=currentLang==='hi'?'मानसिक लाभ':currentLang==='mr'?'मानसिक फायदे':'Mental Benefits';
  const forLabel=currentLang==='hi'?'किसके लिए?':currentLang==='mr'?'कोणासाठी?':'Who is it for?';
  const dotHtml=th.imgs.map((_,i)=>`<span class="tmc-dot${i===0?' active':''}" onclick="tmGoTo(${i})"></span>`).join('');
  const slideHtml=th.imgs.map((src,si)=>`<div class="tm-slide" style="min-width:100%;width:100%;"><img src="${src}" alt="${name} ${si+1}" loading="${si===0?'eager':'lazy'}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>`).join('');
  content.innerHTML=`
    <div class="tm-name">${name}</div>
    <div class="tm-meta"><span class="tm-price">${price}</span><span class="tm-dur"><i class="fas fa-clock"></i> ${dur}</span></div>
    <div class="tm-carousel" style="position:relative;width:100%;overflow:hidden;border-radius:14px;aspect-ratio:16/9;margin-bottom:12px;background:#111;">
      <div class="tm-carousel-track" id="tmTrack" style="display:flex;width:100%;height:100%;transition:transform .45s ease;">${slideHtml}</div>
      <button class="tm-carousel-prev" onclick="tmNav(-1)" aria-label="Previous" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);z-index:10;background:rgba(0,0,0,.55);color:#fff;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;"><i class="fas fa-chevron-left"></i></button>
      <button class="tm-carousel-next" onclick="tmNav(1)" aria-label="Next" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);z-index:10;background:rgba(0,0,0,.55);color:#fff;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div style="display:flex;justify-content:center;gap:6px;margin-bottom:16px;">${dotHtml}</div>
    <p class="tm-desc">${long}</p>
    <div class="tm-benefits">
      <h4>${physLabel}</h4><ul>${phys.map(b=>`<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('')}</ul>
      <h4>${mentLabel}</h4><ul>${ment.map(b=>`<li><i class="fas fa-check-circle"></i> ${b}</li>`).join('')}</ul>
      <h4>${forLabel}</h4><p class="for-whom">${forWhom}</p>
    </div>
    <button class="btn-gold btn-full" style="margin-top:20px" onclick="navTo('contact');closeTherapyModal()">${t('bookNow')||'Book Now'} — ${price}</button>`;
  tmCarouselEl=document.getElementById('tmTrack');
  tmCarouselDots=Array.from(document.querySelectorAll('.tmc-dot'));
  let tsX=0;
  if(tmCarouselEl){
    tmCarouselEl.addEventListener('touchstart',e=>{tsX=e.touches[0].clientX;},{passive:true});
    tmCarouselEl.addEventListener('touchend',e=>{const diff=tsX-e.changedTouches[0].clientX;if(Math.abs(diff)>40)tmNav(diff>0?1:-1);},{passive:true});
  }
  modal.classList.add('show');document.body.style.overflow='hidden';
  if(window._tmInterval) clearInterval(window._tmInterval);
  window._tmInterval=setInterval(()=>tmNav(1),3000);
}
function tmNav(dir){
  const track=document.getElementById('tmTrack');
  const slideCount=track?track.children.length:6;
  tmCarouselIdx=(tmCarouselIdx+dir+slideCount)%slideCount;
  if(tmCarouselEl) tmCarouselEl.style.transform=`translateX(-${tmCarouselIdx*100}%)`;
  tmCarouselDots=Array.from(document.querySelectorAll('.tmc-dot'));
  tmCarouselDots.forEach((d,i)=>d.classList.toggle('active',i===tmCarouselIdx));
}
function tmGoTo(i){tmCarouselIdx=i;if(tmCarouselEl)tmCarouselEl.style.transform=`translateX(-${i*100}%)`;tmCarouselDots=Array.from(document.querySelectorAll('.tmc-dot'));tmCarouselDots.forEach((d,j)=>d.classList.toggle('active',j===i));}
function closeTherapyModal(){var tm=document.getElementById('therapyModal');if(tm)tm.classList.remove('show');document.body.style.overflow='';if(window._tmInterval)clearInterval(window._tmInterval);}

/* ── BENEFIT MODAL ───────────────────────────────────────── */
function openBenefitModal(key){
  const b=BENEFITS[key];if(!b) return;
  const content=document.getElementById('benefitModalContent');if(!content) return;
  content.innerHTML=`<img class="bm-img" src="${b.img}" alt="${b.title}" style="width:100%;border-radius:12px;margin-bottom:16px"><div class="bm-title" style="font-size:1.3rem;font-weight:700;margin-bottom:10px">${b.title}</div><p style="color:var(--text2);line-height:1.8;font-size:.95rem;margin-bottom:16px">${b.desc}</p><div class="bm-gallery" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">${b.gallery.map(src=>`<img src="${src}" alt="${b.title}" loading="lazy" style="width:100%;border-radius:8px;aspect-ratio:3/2;object-fit:cover">`).join('')}</div><button class="btn-gold" style="width:100%" onclick="navTo('contact');closeBenefitModal()">${t('bookNow')||'Book a Session'}</button>`;
  var bm=document.getElementById('benefitModal');if(bm){bm.classList.add('show');document.body.style.overflow='hidden';}
}
function closeBenefitModal(){var bm=document.getElementById('benefitModal');if(bm)bm.classList.remove('show');document.body.style.overflow='';}

/* ── GALLERY ─────────────────────────────────────────────── */
function renderGallery(){
  const grid=document.getElementById('masonryGrid');
  const skel=document.getElementById('gallerySkeletonGrid');
  if(!grid) return;
  lbImages=GALLERY_IMGS;
  grid.innerHTML=GALLERY_IMGS.map((img,i)=>`<div class="masonry-item" onclick="openLightbox(${i})" tabindex="0" role="button" aria-label="${img.alt}"><img src="${img.src}" alt="${img.alt}" loading="lazy"><div class="masonry-item-ov"><i class="fas fa-expand-alt"></i></div></div>`).join('');
  if(skel) skel.style.display='none';
  grid.style.display='block';
}
function openLightbox(idx){lbIdx=idx;const img=document.getElementById('lbImg');const ctr=document.getElementById('lbCounter');if(img)img.src=lbImages[idx].src;if(ctr)ctr.textContent=`${idx+1} / ${lbImages.length}`;var lb=document.getElementById('lightbox');if(lb){lb.classList.add('show');document.body.style.overflow='hidden';}}
function closeLightbox(){var lb=document.getElementById('lightbox');if(lb)lb.classList.remove('show');document.body.style.overflow='';}
function lbNav(dir){lbIdx=(lbIdx+dir+lbImages.length)%lbImages.length;const img=document.getElementById('lbImg');if(img){img.style.opacity='0';setTimeout(()=>{img.src=lbImages[lbIdx].src;img.style.opacity='1';img.style.transition='opacity .3s';},120);}const ctr=document.getElementById('lbCounter');if(ctr)ctr.textContent=`${lbIdx+1} / ${lbImages.length}`;}

/* ── FAQ ─────────────────────────────────────────────────── */
function toggleFaq(btn){
  const ans=btn.nextElementSibling;const open=btn.classList.contains('open');
  btn.closest('.faq-list,.contact-faqs')?.querySelectorAll('.faq-q').forEach(q=>{q.classList.remove('open');if(q.nextElementSibling)q.nextElementSibling.classList.remove('show');});
  if(!open){btn.classList.add('open');ans?.classList.add('show');}
}

/* ── CONTACT FORM ────────────────────────────────────────── */
function submitContactForm(){
  const name=document.getElementById('fName')?.value.trim();
  const phone=document.getElementById('fPhone')?.value.trim();
  const idProof=document.getElementById('fIdProof')?.value;
  const tcCheck=document.getElementById('fTcAccept');
  if(!name){showErr('fName','Name is required');return;}
  if(!phone||phone.length<10){showErr('fPhone','Please enter a valid number');return;}
  if(!idProof){showErr('fIdProof','Please select a Government ID type');return;}
  if(tcCheck&&!tcCheck.checked){
    const tcErr=document.getElementById('tcError');
    if(tcErr)tcErr.style.display='block';
    tcCheck.focus();
    setTimeout(()=>{if(tcErr)tcErr.style.display='none';},3000);
    return;
  }
  const service=document.getElementById('fService')?.value||'';
  const date=document.getElementById('fDate')?.value||'';
  const time=document.getElementById('fTime')?.value||'';
  const msg=document.getElementById('fMsg')?.value||'';
  const waMsg=encodeURIComponent(`Namaskar! Mauli Spa booking.\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n🪪 ID Proof: ${idProof}\n💆 Service: ${service||'TBD'}\n📅 Date: ${date||'Flexible'}\n⏰ Time: ${time}\n💬 Message: ${msg||'None'}\n✅ T&C Accepted: Yes\n\nPlease confirm. Thank you! 🙏`);
  const fw=document.getElementById('contactFormWrap');const fs=document.getElementById('formSuccess');
  if(fw)fw.style.display='none';if(fs)fs.style.display='block';
  setTimeout(()=>window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank'),900);
}
function showErr(id,msg){
  const el=document.getElementById(id);if(!el) return;
  el.style.borderColor='#FC8181';el.focus();
  let e=el.parentNode.querySelector('.ferr');
  if(!e){e=document.createElement('span');e.className='ferr';e.style.cssText='color:#FC8181;font-size:.75rem;margin-top:3px;display:block';el.parentNode.appendChild(e);}
  e.textContent=msg;
  setTimeout(()=>{el.style.borderColor='';if(e.parentNode)e.parentNode.removeChild(e);},2800);
}

/* ── MODALS ──────────────────────────────────────────────── */
function openReferModal(){var m=document.getElementById('referModal');if(m){m.classList.add('show');document.body.style.overflow='hidden';}}
function openJobModal(type){
  currentJobType=type;
  var title=document.getElementById('jobModalTitle');
  if(title)title.textContent=type==='salaried'?'Join as Salaried':'Join as Freelancer';
  var m=document.getElementById('jobModal');if(m){m.classList.add('show');document.body.style.overflow='hidden';}
}
function openLearnModal(){var m=document.getElementById('learnModal');if(m){m.classList.add('show');document.body.style.overflow='hidden';}}
function closeModal(id){var m=document.getElementById(id);if(m)m.classList.remove('show');document.body.style.overflow='';}
function submitRefer(){
  const n=document.getElementById('referName')?.value.trim();const p=document.getElementById('referPhone')?.value.trim();
  if(!n||!p){alert('Please fill all fields');return;}
  const fn=document.getElementById('friendName')?.value.trim()||'';const fp=document.getElementById('friendPhone')?.value.trim()||'';
  const waMsg=encodeURIComponent(`Referral Request!\n👤 My Name: ${n}\n📱 My Phone: ${p}\n👥 Friend Name: ${fn}\n📱 Friend Phone: ${fp}\n\nPlease process our referral discount. Thank you!`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');closeModal('referModal');
}
function submitJob(){
  const n=document.getElementById('jobName')?.value.trim();const p=document.getElementById('jobPhone')?.value.trim();
  if(!n||!p){alert('Please fill required fields');return;}
  const e=document.getElementById('jobEmail')?.value||'';const exp=document.getElementById('jobExp')?.value||'';const about=document.getElementById('jobAbout')?.value||'';
  const waMsg=encodeURIComponent(`Job Application — ${currentJobType.toUpperCase()}\n👤 Name: ${n}\n📱 Phone: ${p}\n📧 Email: ${e}\n⏳ Experience: ${exp} years\n📝 About: ${about}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');closeModal('jobModal');
}
function submitLearn(){
  const n=document.getElementById('learnName')?.value.trim();const p=document.getElementById('learnPhone')?.value.trim();const c=document.getElementById('learnCourse')?.value||'';
  if(!n||!p){alert('Please fill required fields');return;}
  const waMsg=encodeURIComponent(`Learning Enrollment\n👤 Name: ${n}\n📱 Phone: ${p}\n📚 Course: ${c}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');closeModal('learnModal');
}

/* ── NEWSLETTER ─────────────────────────────────────────── */
function subscribeNewsletter(){
  const inp=document.getElementById('nlEmail');
  if(!inp||!inp.value.includes('@')){if(inp){inp.style.borderColor='#FC8181';inp.placeholder='Valid email!';}return;}
  const waMsg=encodeURIComponent(`Newsletter Subscription!\n📧 Email: ${inp.value}`);
  window.open(`https://wa.me/919307360513?text=${waMsg}`,'_blank');
  inp.value='';inp.placeholder='Subscribed! ✓';
}

/* ── KEYBOARD SHORTCUTS ─────────────────────────────────── */
document.addEventListener('keydown',e=>{
  var lb=document.getElementById('lightbox');
  if(lb&&lb.classList.contains('show')){if(e.key==='ArrowRight')lbNav(1);if(e.key==='ArrowLeft')lbNav(-1);if(e.key==='Escape')closeLightbox();}
  var tm=document.getElementById('therapyModal');if(tm&&tm.classList.contains('show')&&e.key==='Escape')closeTherapyModal();
  var bm=document.getElementById('benefitModal');if(bm&&bm.classList.contains('show')&&e.key==='Escape')closeBenefitModal();
  var lpm=document.getElementById('legalPopupModal');if(lpm&&lpm.classList.contains('show')&&e.key==='Escape')closeModal('legalPopupModal');
});

/* ── HERO TOUCH SWIPE ────────────────────────────────────── */
let txStart=0;
const heroEl=document.querySelector('.hero');
if(heroEl){
  heroEl.addEventListener('touchstart',e=>{txStart=e.touches[0].clientX;},{passive:true});
  heroEl.addEventListener('touchend',e=>{
    const diff=txStart-e.changedTouches[0].clientX;
    const videos=document.querySelectorAll('.hero-video');
    if(Math.abs(diff)>50&&videos.length){currentHeroIdx=(currentHeroIdx+(diff>0?1:-1)+videos.length)%videos.length;videos.forEach((v,i)=>v.classList.toggle('active',i===currentHeroIdx));}
  },{passive:true});
}
