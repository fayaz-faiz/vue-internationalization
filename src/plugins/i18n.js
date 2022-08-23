import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Traslateapp:'Traslate App',
        fName:'First Name : ',
        lName:'Last Name : ',
        fNamePlaceholder:'Enter First name',
        lNamePlaceholder:'Enter Last name',
        submitbtn:'Submit',
        country: 'Country : ',
        selectedCountry:'Please select your country',
        India:'India',
        Canada:'Canada',
        USA:'USA',
        Textarea : 'Text area :',
        fayaz:'Fayaz..',
        tooltip:'Enter your name...',
        japanese:'japanese',
        English:'English',
        abc:'Hello'
    },
    'es': {
        Traslateapp:'アプリを翻訳',
        fName:'ファーストネーム',
        lName:'苗字',
        fNamePlaceholder:'名を入力してください',
        lNamePlaceholder:'姓を入力',
        submitbtn:'参加する',
        country : '国',
        selectedCountry:'あなたの国を選択してください',
        India:'インド',
        Canada:'カナダ',
        USA:'アメリカ合衆国',
        Textarea : 'テキストエリア :',
        fayaz:'ファヤーズ',
        tooltip:'アメリカ合衆国',
        japanese:'日本',
        English:'English',
        abc:'日本'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;
