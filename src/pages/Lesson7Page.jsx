import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    { jp: 'きります', romaji: 'kirimasu', en: 'cut/slice', np: 'काट्नु' },
    { jp: 'おくります', romaji: 'okurimasu', en: 'send', np: 'पठाउनु' },
    { jp: 'あげます', romaji: 'agemasu', en: 'give', np: 'दिनु' },
    { jp: 'もらいます', romaji: 'moraimasu', en: 'receive', np: 'लिनु' },
    { jp: 'かします', romaji: 'kashimasu', en: 'lend', np: 'धितो दिनु' },
    { jp: 'かります', romaji: 'karimasu', en: 'borrow', np: 'धितो लिनु' },
    { jp: 'おしえます', romaji: 'oshiemasu', en: 'teach', np: 'पढाउनु / सिकाउनु' },
    { jp: 'ならいます', romaji: 'naraimasu', en: 'learn', np: 'सिक्नु' },
    { jp: 'でんわをかけます', romaji: 'denwa o kakemasu', en: 'make a phone call', np: 'फोन गर्नु' },

    { jp: 'はし', romaji: 'hashi', en: 'chopsticks', np: 'चपस्टिक' },
    { jp: 'スプーン', romaji: 'supūn', en: 'spoon', np: 'चम्चा' },
    { jp: 'ナイフ', romaji: 'naifu', en: 'knife', np: 'चक्कु' },
    { jp: 'フォーク', romaji: 'fōku', en: 'fork', np: 'काँटा' },
    { jp: 'はさみ', romaji: 'hasami', en: 'scissors', np: 'कैंची' },
    { jp: 'ファクス', romaji: 'fakkusu', en: 'fax', np: 'फ्याक्स' },
    { jp: 'ワープロ', romaji: 'wāpuro', en: 'word processor', np: 'वर्ड प्रोसेसर' },
    { jp: 'パソコン', romaji: 'pasokon', en: 'personal computer', np: 'कम्प्युटर' },
    { jp: 'パンチ', romaji: 'panchi', en: 'hole punch', np: 'पञ्च मेसिन' },
    { jp: 'ホッチキス', romaji: 'hocchikisu', en: 'stapler', np: 'स्टेपलर' },
    { jp: 'セロテープ', romaji: 'serotēpu', en: 'scotch tape', np: 'सेलोटेप' },
    { jp: 'けしゴム', romaji: 'keshigomu', en: 'eraser', np: 'रबर' },
    { jp: 'かみ', romaji: 'kami', en: 'paper', np: 'कागज' },
    { jp: 'はな', romaji: 'hana', en: 'flower', np: 'फूल' },
    { jp: 'シャツ', romaji: 'shatsu', en: 'shirt', np: 'सर्ट' },
    { jp: 'プレゼント', romaji: 'purezento', en: 'gift', np: 'उपहार' },
    { jp: 'にもつ', romaji: 'nimotsu', en: 'baggage', np: 'सामान' },
    { jp: 'おかね', romaji: 'okane', en: 'money', np: 'पैसा' },
    { jp: 'きっぷ', romaji: 'kippu', en: 'ticket', np: 'टिकट' },
    { jp: 'クリスマス', romaji: 'Kurisumasu', en: 'Christmas', np: 'क्रिसमस' },

    { jp: 'ちち', romaji: 'chichi', en: 'my father', np: 'मेरो बुवा' },
    { jp: 'はは', romaji: 'haha', en: 'my mother', np: 'मेरो आमा' },
    { jp: 'おとうさん', romaji: 'otōsan', en: 'father', np: 'बुवा' },
    { jp: 'おかあさん', romaji: 'okāsan', en: 'mother', np: 'आमा' },

    { jp: 'もう', romaji: 'mō', en: 'already', np: 'पहिल्यै' },
    { jp: 'まだ', romaji: 'mada', en: 'not yet', np: 'अझै' },
    { jp: 'これから', romaji: 'korekara', en: 'from now on', np: 'अबदेखि' },
    { jp: 'すてきですね', romaji: 'suteki desu ne', en: 'How nice!', np: 'सुन्दर रहेछ है' },
    { jp: 'ごめんください', romaji: 'gomen kudasai', en: 'May I come in?', np: 'भित्र जान सक्छु?' },
    { jp: 'いらっしゃい', romaji: 'irasshai', en: 'Welcome', np: 'स्वागत छ' },
    { jp: 'どうぞおあがりください', romaji: 'douzo oagari kudasai', en: 'Please come in', np: 'भित्र आउनुहोस्' },
    { jp: 'しつれいします', romaji: 'shitsurei shimasu', en: 'Excuse me', np: 'माफ गर्नुहोस्' },
    { jp: '～はいかがですか', romaji: '...wa ikaga desu ka', en: 'Would you like...?', np: '...कसरी छ?' },
    { jp: 'いただきます', romaji: 'itadakimasu', en: 'Let’s eat / Thank you (before eating)', np: 'खाना सुरु गरौं' },
    { jp: 'りょこう', romaji: 'ryokō', en: 'trip', np: 'यात्रा' },
    { jp: 'おみやげ', romaji: 'omiyage', en: 'souvenir', np: 'स्मृति चिन्ह' },
    { jp: 'ヨーロッパ', romaji: 'Yooroppa', en: 'Europe', np: 'युरोप' },
    { jp: 'スペイン', romaji: 'Supein', en: 'Spain', np: 'स्पेन' },
];

export default function Lesson7Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                        Minna no Nihongo – Lesson 7
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vocabulary</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-red-400">
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
