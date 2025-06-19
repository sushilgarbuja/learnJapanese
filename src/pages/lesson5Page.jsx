import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    // Movement verbs
    { np: 'गर्नु (जानु)', jp: 'いきます', romaji: 'ikimasu', en: 'to go' },
    { np: 'आउनु', jp: 'きます', romaji: 'kimasu', en: 'to come' },
    { np: 'फर्कनु', jp: 'かえります', romaji: 'kaerimasu', en: 'to return / go home' },

    // Transportation
    { np: 'रेलगाडी', jp: 'でんしゃ', romaji: 'densha', en: 'train' },
    { np: 'माइक्रो / बस', jp: 'バス', romaji: 'basu', en: 'bus' },
    { np: 'विमान', jp: 'ひこうき', romaji: 'hikouki', en: 'airplane' },
    { np: 'कार', jp: 'くるま（車）', romaji: 'kuruma', en: 'car' },
    { np: 'ट्याक्सी', jp: 'タクシー', romaji: 'takushii', en: 'taxi' },
    { np: 'साइकल', jp: 'じてんしゃ（自転車）', romaji: 'jitensha', en: 'bicycle' },
    { np: 'हिँड्दै', jp: 'あるいて', romaji: 'aruite', en: 'on foot' },

    // Locations
    { np: 'घर', jp: 'うち / いえ', romaji: 'uchi / ie', en: 'home / house' },
    { np: 'कार्यालय', jp: 'かいしゃ（会社）', romaji: 'kaisha', en: 'company / office' },
    { np: 'स्कूल', jp: 'がっこう（学校）', romaji: 'gakkou', en: 'school' },
    { np: 'डिपार्टमेन्ट स्टोर', jp: 'デパート', romaji: 'depaato', en: 'department store' },
    { np: 'पार्क', jp: 'こうえん（公園）', romaji: 'kouen', en: 'park' },
    { np: 'होटल', jp: 'ホテル', romaji: 'hoteru', en: 'hotel' },

    // People/With whom
    { np: 'म साथी', jp: 'ともだち（友達）', romaji: 'tomodachi', en: 'friend' },
    { np: 'एक्लै', jp: 'ひとりで', romaji: 'hitori de', en: 'alone' },
    { np: 'कसैसँग', jp: '～と', romaji: '~to', en: 'with ~ (person)' },

    // Time expressions
    { np: 'आज', jp: 'きょう（今日）', romaji: 'kyou', en: 'today' },
    { np: 'हिजो', jp: 'きのう（昨日）', romaji: 'kinou', en: 'yesterday' },
    { np: 'भोली', jp: 'あした（明日）', romaji: 'ashita', en: 'tomorrow' },
    { np: 'यस हप्ता', jp: 'こんしゅう（今週）', romaji: 'konshuu', en: 'this week' },
    { np: 'पछिल्लो हप्ता', jp: 'せんしゅう（先週）', romaji: 'senshuu', en: 'last week' },
    { np: 'अर्को हप्ता', jp: 'らいしゅう（来週）', romaji: 'raishuu', en: 'next week' },

    // Days of the week
    { np: 'सोमबार', jp: 'げつようび（月曜日）', romaji: 'getsuyoubi', en: 'Monday' },
    { np: 'मंगलबार', jp: 'かようび（火曜日）', romaji: 'kayoubi', en: 'Tuesday' },
    { np: 'बुधबार', jp: 'すいようび（水曜日）', romaji: 'suiyoubi', en: 'Wednesday' },
    { np: 'बिहीबार', jp: 'もくようび（木曜日）', romaji: 'mokuyoubi', en: 'Thursday' },
    { np: 'शुक्रबार', jp: 'きんようび（金曜日）', romaji: 'kinyoubi', en: 'Friday' },
    { np: 'शनिबार', jp: 'どようび（土曜日）', romaji: 'doyoubi', en: 'Saturday' },
    { np: 'आइतबार', jp: 'にちようび（日曜日）', romaji: 'nichiyoubi', en: 'Sunday' },
];

export default function Lesson5Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                        Minna no Nihongo – Lesson 5
                    </h2>
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
