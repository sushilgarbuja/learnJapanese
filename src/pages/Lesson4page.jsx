import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    { np: 'उठ्नु', jp: 'おきます', romaji: 'okimasu', en: 'get up / wake up' },
    { np: 'सुत्नु', jp: 'ねます', romaji: 'nemasu', en: 'sleep / go to bed' },
    { np: 'काम गर्नु', jp: 'はたらきます', romaji: 'hatarakimasu', en: 'work' },
    { np: 'विश्राम गर्नु', jp: 'やすみます', romaji: 'yasumimasu', en: 'take a rest / holiday' },
    { np: 'अध्ययन गर्नु', jp: 'べんきょうします', romaji: 'benkyōshimasu', en: 'study' },
    { np: 'समाप्त गर्नु', jp: 'おわります', romaji: 'owarimasu', en: 'finish' },
    { np: 'चेन केन्द्र', jp: 'デパート', romaji: 'depāto', en: 'department store' },
    { np: 'बैंक', jp: 'ぎんこう', romaji: 'ginkō', en: 'bank' },
    { np: 'डाक घर', jp: 'ゆうびんきょく', romaji: 'yūbinkyoku', en: 'post office' },
    { np: 'पुस्तकालय', jp: 'としょかん', romaji: 'toshokan', en: 'library' },
    { np: 'कला संग्राहलय', jp: 'びじゅつかん', romaji: 'bijutsukan', en: 'art museum' },
    { np: 'अब', jp: 'いま', romaji: 'ima', en: 'now' },
    { np: 'ओ\'क्लक', jp: '～じ', romaji: '~ji', en: 'o\'clock' },
    { np: 'मिनेट', jp: '～ふん', romaji: '~fun', en: 'minute' },
    { np: 'सेमि', jp: '～はん', romaji: '~han', en: 'half' },
    { np: 'कति बजे?', jp: 'なんじ', romaji: 'nanji', en: 'what time?' },
    { np: 'कति मिनेट?', jp: 'なんぷん', romaji: 'nanpun', en: 'what minute?' },
    { np: 'सुबाह / पूर्वाह्न', jp: 'ごぜん', romaji: 'gozen', en: 'a.m., morning' },
    { np: 'दिउँसो / अपराह्न', jp: 'ごご', romaji: 'gogo', en: 'p.m., afternoon' },
    { np: 'सुबाह', jp: 'あさ', romaji: 'asa', en: 'morning' },
    { np: 'दिउँसो', jp: 'ひる', romaji: 'hiru', en: 'daytime, noon' },
    { np: 'साँझ', jp: 'ばん／よる', romaji: 'ban/yoru', en: 'evening/night' },
    { np: 'आजभोलि', jp: 'きょう', romaji: 'kyō', en: 'today' },
    { np: 'भोली', jp: 'あした', romaji: 'ashita', en: 'tomorrow' },
    { np: 'परबिहान', jp: 'あさって', romaji: 'asatte', en: 'day after tomorrow' },
    { np: 'हिजो', jp: 'きのう', romaji: 'kinō', en: 'yesterday' },
    { np: 'अघिल्लो हिजो', jp: 'おととい', romaji: 'ototoi', en: 'day before yesterday' },
    { np: 'आज बिहान', jp: 'けさ', romaji: 'kesa', en: 'this morning' },
    { np: 'यस साँझ', jp: 'こんばんは', romaji: 'konbanwa', en: 'this evening' },
    { np: 'विश्राम दिन', jp: 'やすみ', romaji: 'yasumi', en: 'rest / holiday' },
    { np: 'दिनको विश्राम', jp: 'ひるやすみ', romaji: 'hiruyasumi', en: 'lunchtime / break' },
    { np: 'हरेक बिहान', jp: 'まいあさ', romaji: 'mai-asa', en: 'every morning' },
    { np: 'हरेक साँझ', jp: 'まいばん', romaji: 'maiban', en: 'every evening' },
    { np: 'हरेक दिन', jp: 'まいにち', romaji: 'mainichi', en: 'every day' },
    { np: 'आइतबार', jp: 'にちようび', romaji: 'nichiyōbi', en: 'Sunday' },
    { np: 'सोमबार', jp: 'げつようび', romaji: 'getsuyōbi', en: 'Monday' },
    { np: 'मङ्गलबार', jp: 'かようび', romaji: 'kayōbi', en: 'Tuesday' },
    { np: 'बुधबार', jp: 'すいようび', romaji: 'suiyōbi', en: 'Wednesday' },
    { np: 'बिहीबार', jp: 'もくようび', romaji: 'mokuyōbi', en: 'Thursday' },
    { np: 'शुक्रबार', jp: 'きんようび', romaji: 'kinyōbi', en: 'Friday' },
    { np: 'शनिबार', jp: 'どようび', romaji: 'doyōbi', en: 'Saturday' },
    { np: 'कुन दिन?', jp: 'なんようび', romaji: 'nanyōbi', en: 'what day?' },
    { np: 'नम्बर', jp: 'ばんごう', romaji: 'bangō', en: 'number' },
    { np: 'कुन नम्बर?', jp: 'なんばん', romaji: 'nanban', en: 'what number?' },
    { np: 'देखि', jp: '～から', romaji: '…kara', en: 'from' },
    { np: 'सम्म', jp: '～まで', romaji: '…made', en: 'until' },
    { np: 'र', jp: '～と～', romaji: '…to…', en: 'and (connect nouns)' },
    { np: 'तपाईंको ठाउँ', jp: 'そちら', romaji: 'sochira', en: 'your place (polite)' },
    { np: 'गाह्रो भयो, हैन?', jp: 'たいへんですね', romaji: 'taihen desu ne', en: 'That’s tough, isn’t it?' },
    { np: 'अनि...,', jp: 'えーと', romaji: 'ēto', en: 'Well, let me see...' },
    { np: 'कृपया', jp: 'おねがいします', romaji: 'onegai shimasu', en: 'please / I request' },
    { np: 'पक्का हो?', jp: 'かしこまりました', romaji: 'kashikomarimashita', en: 'Certainly (sir/madam)' },
    { np: 'सम्पर्क नम्बर', jp: 'おといあわせのばんごう', romaji: 'otoiawase no bangō', en: 'the number being inquired about' },
    { np: 'धेरै धन्यवाद', jp: 'どうもありがとうございました', romaji: 'dōmo arigatō gozaimashita', en: 'thank you very much' },
    { np: 'न्यूयोर्क', jp: 'ニューヨーク', romaji: 'Nyū-Yōku', en: 'New York' },
    { np: 'बेजिङ्ग', jp: 'ペキン', romaji: 'Pekin', en: 'Beijing' },
    { np: 'ब्याङ्कक', jp: 'バンコク', romaji: 'Bankoku', en: 'Bangkok' },
    { np: 'लस एन्जेल्स', jp: 'ロスアンゼルス', romaji: 'Rosu-Anzerusu', en: 'Los Angeles' },
];

export default function Lesson4Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Minna no Nihongo – Lesson 4</h2>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vocabulary</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-red-500">
                            <thead className="bg-red-500 text-white">
                                <tr>
                                    <th className="px-4 py-2 border">Nepali</th>
                                    <th className="px-4 py-2 border">Japanese</th>
                                    <th className="px-4 py-2 border">Romaji</th>
                                    <th className="px-4 py-2 border">English</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocabulary.map((word, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border">{word.np}</td>
                                        <td className="px-4 py-2 border">{word.jp}</td>
                                        <td className="px-4 py-2 border">{word.romaji}</td>
                                        <td className="px-4 py-2 border">{word.en}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
