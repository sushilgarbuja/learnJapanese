import React from 'react'

const katakanaData = [
    { np: "आ", jp: "ア", romaji: "a", en: "a" },
    { np: "इ", jp: "イ", romaji: "i", en: "i" },
    { np: "उ", jp: "ウ", romaji: "u", en: "u" },
    { np: "ए", jp: "エ", romaji: "e", en: "e" },
    { np: "ओ", jp: "オ", romaji: "o", en: "o" },

    { np: "का", jp: "カ", romaji: "ka", en: "ka" },
    { np: "कि", jp: "キ", romaji: "ki", en: "ki" },
    { np: "कु", jp: "ク", romaji: "ku", en: "ku" },
    { np: "के", jp: "ケ", romaji: "ke", en: "ke" },
    { np: "को", jp: "コ", romaji: "ko", en: "ko" },

    { np: "सा", jp: "サ", romaji: "sa", en: "sa" },
    { np: "शि", jp: "シ", romaji: "shi", en: "shi" },
    { np: "सु", jp: "ス", romaji: "su", en: "su" },
    { np: "से", jp: "セ", romaji: "se", en: "se" },
    { np: "सो", jp: "ソ", romaji: "so", en: "so" },

    { np: "ता", jp: "タ", romaji: "ta", en: "ta" },
    { np: "चि", jp: "チ", romaji: "chi", en: "chi" },
    { np: "तु", jp: "ツ", romaji: "tsu", en: "tsu" },
    { np: "ते", jp: "テ", romaji: "te", en: "te" },
    { np: "तो", jp: "ト", romaji: "to", en: "to" },

    { np: "ना", jp: "ナ", romaji: "na", en: "na" },
    { np: "नि", jp: "ニ", romaji: "ni", en: "ni" },
    { np: "नु", jp: "ヌ", romaji: "nu", en: "nu" },
    { np: "ने", jp: "ネ", romaji: "ne", en: "ne" },
    { np: "नो", jp: "ノ", romaji: "no", en: "no" },

    { np: "हा", jp: "ハ", romaji: "ha", en: "ha" },
    { np: "हि", jp: "ヒ", romaji: "hi", en: "hi" },
    { np: "हु", jp: "フ", romaji: "fu", en: "fu" },
    { np: "हे", jp: "ヘ", romaji: "he", en: "he" },
    { np: "हो", jp: "ホ", romaji: "ho", en: "ho" },

    { np: "मा", jp: "マ", romaji: "ma", en: "ma" },
    { np: "मि", jp: "ミ", romaji: "mi", en: "mi" },
    { np: "मु", jp: "ム", romaji: "mu", en: "mu" },
    { np: "मे", jp: "メ", romaji: "me", en: "me" },
    { np: "मो", jp: "モ", romaji: "mo", en: "mo" },

    { np: "या", jp: "ヤ", romaji: "ya", en: "ya" },
    { np: "यु", jp: "ユ", romaji: "yu", en: "yu" },
    { np: "यो", jp: "ヨ", romaji: "yo", en: "yo" },

    { np: "रा", jp: "ラ", romaji: "ra", en: "ra" },
    { np: "रि", jp: "リ", romaji: "ri", en: "ri" },
    { np: "रु", jp: "ル", romaji: "ru", en: "ru" },
    { np: "रे", jp: "レ", romaji: "re", en: "re" },
    { np: "रो", jp: "ロ", romaji: "ro", en: "ro" },

    { np: "वा", jp: "ワ", romaji: "wa", en: "wa" },
    { np: "ओ", jp: "ヲ", romaji: "wo", en: "wo (used as particle)" },
    { np: "न्", jp: "ン", romaji: "n", en: "n" }
];
function KatakanaPageContent() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-6">
                    Katakana Chart
                </h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">नेपाली (Nepali)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Japanese (Katakana)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Romanji</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">English</th>
                            </tr>
                        </thead>
                        <tbody>
                            {katakanaData.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="px-4 py-2 text-sm sm:text-base font-medium text-gray-800">{row.np}</td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">{row.jp}</td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">{row.romaji}</td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">{row.en}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default KatakanaPageContent
