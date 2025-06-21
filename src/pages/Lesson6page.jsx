import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    // Verbs
    { np: 'खानु', jp: 'たべます', romaji: 'tabemasu', en: 'eat' },
    { np: 'पिउनु', jp: 'のみます', romaji: 'nomimasu', en: 'drink' },
    { np: 'धुम्रपान गर्नु', jp: 'すいます', romaji: 'suimasu', en: 'smoke' },
    { np: 'हेर्नु', jp: 'みます', romaji: 'mimasu', en: 'see/look/watch' },
    { np: 'सुन्नु', jp: 'ききます', romaji: 'kikimasu', en: 'hear/listen' },
    { np: 'पढ्नु', jp: 'よみます', romaji: 'yomimasu', en: 'read' },
    { np: 'लेख्नु', jp: 'かきます', romaji: 'kakimasu', en: 'write/paint' },
    { np: 'किन्नु', jp: 'かいます', romaji: 'kaimasu', en: 'buy' },
    { np: 'उठाउनु (फोटो)', jp: 'とります', romaji: 'torimasu', en: 'take (a photo)' },
    { np: 'गर्नु', jp: 'します', romaji: 'shimasu', en: 'do' },
    { np: 'भेट्नु', jp: 'あいます', romaji: 'aimasu', en: 'meet' },

    // Food & Drink
    { np: 'भोजन (चामल)', jp: 'ごはん', romaji: 'gohan', en: 'meal / rice' },
    { np: 'ब्रेकफास्ट', jp: 'あさごはん', romaji: 'asagohan', en: 'breakfast' },
    { np: 'खाजा', jp: 'ひるごはん', romaji: 'hirugohan', en: 'lunch' },
    { np: 'डिनर', jp: 'ばんごはん', romaji: 'bangohan', en: 'dinner' },
    { np: 'ब्रेड', jp: 'パン', romaji: 'pan', en: 'bread' },
    { np: 'अण्डा', jp: 'たまご', romaji: 'tamago', en: 'egg' },
    { np: 'मासु', jp: 'にく', romaji: 'niku', en: 'meat' },
    { np: 'माछा', jp: 'さかな', romaji: 'sakana', en: 'fish' },
    { np: 'तरकारी', jp: 'やさい', romaji: 'yasai', en: 'vegetable' },
    { np: 'फलफूल', jp: 'くだもの', romaji: 'kudamono', en: 'fruit' },

    // Beverages
    { np: 'पानी', jp: 'みず', romaji: 'mizu', en: 'water' },
    { np: 'चिया (हरियो चिया)', jp: 'おちゃ', romaji: 'ocha', en: 'tea (green tea)' },
    { np: 'कालो चिया', jp: 'こうちゃ', romaji: 'koucha', en: 'black tea' },
    { np: 'दूध', jp: 'ぎゅうにゅう', romaji: 'gyuunyuu', en: 'cow’s milk' },
    { np: 'जुस', jp: 'ジュース', romaji: 'juusu', en: 'juice' },
    { np: 'बियर', jp: 'ビール', romaji: 'biiru', en: 'beer' },
    { np: 'साके', jp: 'おさけ', romaji: 'osake', en: 'Japanese rice wine' },

    // Media & Items
    { np: 'भिडियो', jp: 'ビデオ', romaji: 'bideo', en: 'video' },
    { np: ' चलचित्र', jp: 'えいが', romaji: 'eiga', en: 'movie' },
    { np: 'वर्णन', jp: 'てがみ', romaji: 'tegami', en: 'letter' },
    { np: 'रिपोर्ट', jp: 'レポート', romaji: 'repooto', en: 'report' },
    { np: 'फोटो', jp: 'しゃしん', romaji: 'shashin', en: 'photograph' },
    { np: 'दुकान', jp: 'みせ', romaji: 'mise', en: 'store/shop' },
    { np: 'रेस्टुरेन्ट', jp: 'レストラン', romaji: 'resutoran', en: 'restaurant' },
    { np: 'बगैँचा', jp: 'にわ', romaji: 'niwa', en: 'garden' },

    // School/Homework
    { np: 'होमवर्क', jp: 'しゅくだい', romaji: 'shukudai', en: 'homework' },
    { np: 'होमवर्क गर्नु', jp: 'しゅくだいをします', romaji: 'shukudai o shimasu', en: 'do homework' },

    // Sports
    { np: 'टेनीस', jp: 'テニス', romaji: 'tenisu', en: 'tennis' },
    { np: 'फुटबल', jp: 'サッカー', romaji: 'sakkaa', en: 'soccer' },
    { np: 'चेरी ब्लस्सम हेर्नु', jp: 'おはなみをします', romaji: 'ohanami o shimasu', en: 'view cherry blossoms' },

    // Adverbs & Connectors
    { np: 'के ?', jp: 'なに', romaji: 'nani', en: 'what?' },
    { np: 'संगै', jp: 'いっしょに', romaji: 'issho ni', en: 'together' },
    { np: 'केही समय', jp: 'ちょっと', romaji: 'chotto', en: 'a little while / bit' },
    { np: 'सधैं', jp: 'いつも', romaji: 'itsumo', en: 'always' },
    { np: 'कहिलेकाहीं', jp: 'ときどき', romaji: 'tokidoki', en: 'sometimes' },
    { np: 'त्यसपछि', jp: 'それから', romaji: 'sorekara', en: 'after that / and then' },
    { np: 'हो', jp: 'ええ', romaji: 'ee', en: 'yes' },
    { np: 'उत्कृष्ट हो', jp: 'いいですね', romaji: 'ii desu ne', en: 'that’s good' },
    { np: 'म बुझें', jp: 'わかりました', romaji: 'wakarimashita', en: 'I understand' },
    { np: 'के हो?', jp: 'なんですか', romaji: 'nan desu ka', en: 'what is it?' },
    { np: 'पुनः भेटौला', jp: 'ではまた', romaji: 'dewa mata', en: 'see you again' },
];

export default function Lesson6Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
                        Minna no Nihongo – Lesson 6
                    </h2>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Vocabulary
                    </h2>
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
