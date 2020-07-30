let arabic =document.getElementById("IdArabic"); //الزر العربي
let english =document.getElementById("IdEnglish"); // الزر الانجليزي
let title =document.getElementById("Idspan"); // تحديد العنصر h2
let welcome =document.getElementById("IdDIv-Welcome"); // جملة الترحيب الاولى
let about =document.getElementById("IdDIv-About"); // نص عنوان التعريف
let aboutText =document.getElementById("Idpagaph-About"); // نص ملخص المبرمج
let contact =document.getElementById("IdA-About"); // نص زر الايميل
let Copyrights =document.getElementById("IdDive-Footer"); // نص حقوق النشر


//عند الضغط على الزر العربي
arabic.onclick = ()=>{
    setLanguage("arabic"); // يتم استدعاء الدالة التالية
    
    localStorage.setItem("LangKey","arabic")

}
// عند الضغط على الزر الانجليزي
english.onclick = ()=>{
    setLanguage("english"); // يتم استدعاء الدالة التالية
    localStorage.setItem("LangKey","english")
}
onload = ()=>{
    setLanguage( localStorage.getItem("LangKey"));// كل مرة تحمل الصفحة ينفذ الامر التالي
};

//  دالة تغيير اللغة  
function setLanguage(getLanguage){
if (getLanguage === "arabic"){
title.innerHTML="المبرمج هشام علي الشريف";
welcome.innerHTML="مرحبا بكم في موقع مركز النخبة للإلكترونيات";
about.innerHTML="حول المبرمج";
aboutText.innerHTML="انا طالب مبتدئ في تعلم لغات برمجة مواقع الويب";
contact.innerHTML="اتصل بنا";
Copyrights.innerHTML="جميع الحقوق محفوظة - مركز النخبة للالكترونات 2020";
document.body.style.direction="rtl";

}
else if(getLanguage === "english"){
    title.innerHTML="Coder Hesham Ali Ashreif";
    welcome.innerHTML="Welcome to the Elite Electronics Center website" ;
    about.innerHTML="About Coder";
    aboutText.innerHTML="I am a beginner student learning web programming languages ";
    contact.innerHTML="Contact US";
    Copyrights.innerHTML="All rights reserved - Elite Electronics Center 2020 ";
    document.body.style.direction="ltr";

}
}
