import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const vocabulary = [
    { np: 'यो (स्थान यहाँ)', jp: 'ここ', romaji: 'koko', en: 'Here, this place' },
    { np: 'त्यो (स्थान तपाईं नजिक)', jp: 'そこ', romaji: 'soko', en: 'There, that place near you' },
    { np: 'त्यो (स्थान टाढा)', jp: 'あそこ', romaji: 'asoko', en: 'That place over there' },
    { np: 'कहाँ?', jp: 'どこ', romaji: 'doko', en: 'Where?' },
    { np: 'यो तर्फ (सम्मान)', jp: 'こちら', romaji: 'kochira', en: 'This way, this place (polite)' },
    { np: 'त्यो तर्फ (सम्मान)', jp: 'そちら', romaji: 'sochira', en: 'That way, that place near you (polite)' },
    { np: 'त्यो तर्फ टाढा (सम्मान)', jp: 'あちら', romaji: 'achira', en: 'That way over there (polite)' },
    { np: 'कुन?', jp: 'どちら', romaji: 'dochira', en: 'Which way, where (polite)' },
    { np: 'कक्षा', jp: 'きょうしつ', romaji: 'kyoushitsu', en: 'Classroom' },
    { np: 'भोजनालय', jp: 'しょくどう', romaji: 'shokudou', en: 'Dining hall / canteen' },
    { np: 'कार्यालय', jp: 'じむしょ', romaji: 'jimusho', en: 'Office' },
    { np: 'सभा कक्ष', jp: 'かいぎしつ', romaji: 'kaigishitsu', en: 'Meeting/conference room' },
    { np: 'स्वागतम् डेस्क', jp: 'うけつけ', romaji: 'uketsuke', en: 'Reception desk' },
    { np: 'लबी', jp: 'ロビー', romaji: 'robi-', en: 'Lobby' },
    { np: 'कोठा', jp: 'へや', romaji: 'heya', en: 'Room' },
    { np: 'ट्वाइलेट', jp: 'トイレ／おてあらい', romaji: 'toire / otearai', en: 'Toilet / restroom' },
    { np: 'सीढी', jp: 'かいだん', romaji: 'kaidan', en: 'Staircase' },
    { np: 'एलिभेटर', jp: 'エレベーター', romaji: 'erebe-ta-', en: 'Elevator / lift' },
    { np: 'एस्केलेटर', jp: 'エスカレーター', romaji: 'esukare-ta-', en: 'Escalator' },
    { np: 'भुट्टा बास', jp: 'ちか', romaji: 'chika', en: 'Basement' },
    { np: '–तल्ला', jp: '～かい', romaji: '~kai/~gai', en: '–th floor' },
    { np: 'कुन तल्ला?', jp: 'なんがい', romaji: 'nangai', en: 'What floor?' },
    { np: '–येन्', jp: '～えん', romaji: '~en', en: '–yen (currency)' },
    { np: 'कति?', jp: 'いくら', romaji: 'ikura', en: 'How much?' },
    { np: 'शत', jp: 'ひゃく', romaji: 'hyaku', en: 'Hundred' },
    { np: 'हजार', jp: 'せん', romaji: 'sen', en: 'Thousand' },
    { np: 'दस हजार', jp: 'まん', romaji: 'man', en: 'Ten thousand' },
    { np: 'माफ गर्नुहोस्', jp: 'すみません', romaji: 'sumimasen', en: 'Excuse me' },
    { np: '–छ', jp: '～でございます', romaji: '...de gozaimasu', en: 'Polite form of desu' },
    { np: '–हेर्नुस', jp: '～をみせてください', romaji: '...o misete kudasai', en: 'Please show me ~' },
    { np: 'अनि', jp: 'じゃ', romaji: 'ja', en: 'Well then / in that case' },
    { np: '–देउ', jp: '～をください', romaji: '...o kudasai', en: 'Give me ~, please' },
    { np: 'देश (इटली)', jp: 'イタリア', romaji: 'itaria', en: 'Italy' },
    { np: 'देश (स्विट्जरल्यान्ड)', jp: 'スイス', romaji: 'suisu', en: 'Switzerland' },
    { np: 'देश (फ्रान्स)', jp: 'フランス', romaji: 'furansu', en: 'France' },
];

export default function Lesson3Vocabulary() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Minna no Nihongo – Lesson 3</h2>
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
