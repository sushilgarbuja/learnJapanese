import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    { np: 'यो (चीज यहाँ)', jp: 'これ', romaji: 'kore', en: 'This (thing here)' },
    { np: 'त्यो (चीज तपाईं नजिक)', jp: 'それ', romaji: 'sore', en: 'That (thing near you)' },
    { np: 'त्यो (चीज टाढा एउटा)', jp: 'あれ', romaji: 'are', en: 'That (thing over there)' },
    { np: 'यो ~ (यहाँ यो ~)', jp: 'この', romaji: 'kono', en: 'This ~ (this ~ here)' },
    { np: 'त्यो ~ (तपाईं नजिक)', jp: 'その', romaji: 'sono', en: 'That ~ (that ~ near you)' },
    { np: 'त्यो ~ (टाढै)', jp: 'あの', romaji: 'ano', en: 'That ~ (that ~ over there)' },
    { np: 'किताब', jp: '本 / ほん', romaji: 'hon', en: 'Book' },
    { np: 'शब्दकोश', jp: '辞書 / じしょ', romaji: 'jisho', en: 'Dictionary' },
    { np: 'पत्रिका', jp: '雑誌 / ざっし', romaji: 'zasshi', en: 'Magazine' },
    { np: 'समाचारपत्र', jp: '新聞 / しんぶん', romaji: 'shinbun', en: 'Newspaper' },
    { np: 'नोटबुक', jp: 'ノート', romaji: 'nooto', en: 'Notebook' },
    { np: 'कलम (पाकेट नोटबुक)', jp: '手帳 / てちょう', romaji: 'techou', en: 'Pocket notebook' },
    { np: 'व्यावसायिक कार्ड', jp: '名刺 / めいし', romaji: 'meishi', en: 'Business card' },
    { np: '(क्रेडिट) कार्ड', jp: 'カード', romaji: 'kaado', en: 'Card' },
    { np: 'पेन्सिल', jp: '鉛筆 / えんぴつ', romaji: 'enpitsu', en: 'Pencil' },
    { np: 'बॉलपोइन्ट पेन्सिल', jp: 'ボールペン', romaji: 'boorupen', en: 'Ballpoint pen' },
    { np: 'म्याकेनीकल पेन्सिल', jp: 'シャープペンシル', romaji: 'shaapu-penshiru', en: 'Mechanical pencil' },
    { np: 'चावी', jp: '鍵 / かぎ', romaji: 'kagi', en: 'Key' },
    { np: 'घडी', jp: '時計 / とけい', romaji: 'tokei', en: 'Watch, clock' },
    { np: 'छाता', jp: '傘 / かさ', romaji: 'kasa', en: 'Umbrella' },
    { np: 'झोला', jp: '鞄 / かばん', romaji: 'kaban', en: 'Bag, briefcase' },
    { np: 'टेलिभिजन', jp: 'テレビ', romaji: 'terebi', en: 'Television' },
    { np: 'रेडियो', jp: 'ラジオ', romaji: 'rajio', en: 'Radio' },
    { np: 'क्यामेरा', jp: 'カメラ', romaji: 'kamera', en: 'Camera' },
    { np: 'कम्प्युटर', jp: 'コンピューター', romaji: 'konpyuutaa', en: 'Computer' },
    { np: 'कार', jp: '車 / くるま', romaji: 'kuruma', en: 'Car' },
    { np: 'डेस्क', jp: '机 / つくえ', romaji: 'tsukue', en: 'Desk' },
    { np: 'कुर्सी', jp: '椅子 / いす', romaji: 'isu', en: 'Chair' },
    { np: 'चकलेट', jp: 'チョコレート', romaji: 'chokoreeto', en: 'Chocolate' },
    { np: 'कफी', jp: 'コーヒー', romaji: 'koohii', en: 'Coffee' },
    { np: 'उपहार', jp: 'お土産 / おみやげ', romaji: 'omiyage', en: 'Souvenir / Present' },
    { np: 'अङ्ग्रेजी भाषा', jp: '英語 / えいご', romaji: 'eigo', en: 'English (language)' },
    { np: 'जापानी भाषा', jp: '日本語 / にほんご', romaji: 'nihongo', en: 'Japanese (language)' },
    { np: 'भाषा प्रत्यय', jp: '～語 / ご', romaji: '~go', en: '~language (suffix)' },
    { np: 'के?, के भनिले?', jp: '何 / なん', romaji: 'nan', en: 'What' },
    { np: 'त्यस्तै', jp: 'そう', romaji: 'sou', en: 'So; like that' },
    { np: 'उह्… (हिचकिचाहट)', jp: 'あのう', romaji: 'anou', en: 'Er… (hesitation filler)' },
    { np: 'थाहा पाएँ?', jp: 'そうですか', romaji: 'sou desu ka?', en: 'I see? / Is that so?' },
    { np: 'असमर्थना (भन्ने)', jp: 'ちがいます', romaji: 'chigaimasu', en: "No, it isn't / You are wrong" },
    { np: 'अभिवादन अग्रिम', jp: 'これから おせわに なります', romaji: 'korekara osewa ni narimasu', en: 'Thank you in advance for your support' },
    { np: 'प्रतिक्रिया अभिवादन', jp: 'こちらこそ どうぞよろしくおねがいします', romaji: 'kochirakoso douzo yoroshiku onegaishimasu', en: 'Pleased to meet you too' },
];

export default function Lesson2Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Minna no Nihongo – Lesson 2</h2>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vocabulary</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-red-500">
                            <thead className="bg-red-500 text-white">
                                <tr>
                                    <th className="px-4 py-2 border">Nepali</th>
                                    <th className="px-4 py-2 border">Japanese (H/K/K)</th>
                                    <th className="px-4 py-2 border">Romaji</th>
                                    <th className="px-4 py-2 border">English</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocabulary.map((word, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
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
