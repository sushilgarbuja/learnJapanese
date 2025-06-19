import React from 'react'


const hiraganaData = [
    { np: "आ", jp: "あ", romaji: "a", en: "a" },
    { np: "इ", jp: "い", romaji: "i", en: "i" },
    { np: "उ", jp: "う", romaji: "u", en: "u" },
    { np: "ए", jp: "え", romaji: "e", en: "e" },
    { np: "ओ", jp: "お", romaji: "o", en: "o" },

    { np: "का", jp: "か", romaji: "ka", en: "ka" },
    { np: "कि", jp: "き", romaji: "ki", en: "ki" },
    { np: "कु", jp: "く", romaji: "ku", en: "ku" },
    { np: "के", jp: "け", romaji: "ke", en: "ke" },
    { np: "को", jp: "こ", romaji: "ko", en: "ko" },

    { np: "सा", jp: "さ", romaji: "sa", en: "sa" },
    { np: "शि", jp: "し", romaji: "shi", en: "shi" },
    { np: "सु", jp: "す", romaji: "su", en: "su" },
    { np: "से", jp: "せ", romaji: "se", en: "se" },
    { np: "सो", jp: "そ", romaji: "so", en: "so" },

    { np: "ता", jp: "た", romaji: "ta", en: "ta" },
    { np: "चि", jp: "ち", romaji: "chi", en: "chi" },
    { np: "तु", jp: "つ", romaji: "tsu", en: "tsu" },
    { np: "ते", jp: "て", romaji: "te", en: "te" },
    { np: "तो", jp: "と", romaji: "to", en: "to" },

    { np: "ना", jp: "な", romaji: "na", en: "na" },
    { np: "नि", jp: "に", romaji: "ni", en: "ni" },
    { np: "नु", jp: "ぬ", romaji: "nu", en: "nu" },
    { np: "ने", jp: "ね", romaji: "ne", en: "ne" },
    { np: "नो", jp: "の", romaji: "no", en: "no" },

    { np: "हा", jp: "は", romaji: "ha", en: "ha" },
    { np: "हि", jp: "ひ", romaji: "hi", en: "hi" },
    { np: "हु", jp: "ふ", romaji: "fu", en: "fu" },
    { np: "हे", jp: "へ", romaji: "he", en: "he" },
    { np: "हो", jp: "ほ", romaji: "ho", en: "ho" },

    { np: "मा", jp: "ま", romaji: "ma", en: "ma" },
    { np: "मि", jp: "み", romaji: "mi", en: "mi" },
    { np: "मु", jp: "む", romaji: "mu", en: "mu" },
    { np: "मे", jp: "め", romaji: "me", en: "me" },
    { np: "मो", jp: "も", romaji: "mo", en: "mo" },

    { np: "या", jp: "や", romaji: "ya", en: "ya" },
    { np: "यु", jp: "ゆ", romaji: "yu", en: "yu" },
    { np: "यो", jp: "よ", romaji: "yo", en: "yo" },

    { np: "रा", jp: "ら", romaji: "ra", en: "ra" },
    { np: "रि", jp: "り", romaji: "ri", en: "ri" },
    { np: "रु", jp: "る", romaji: "ru", en: "ru" },
    { np: "रे", jp: "れ", romaji: "re", en: "re" },
    { np: "रो", jp: "ろ", romaji: "ro", en: "ro" },

    { np: "वा", jp: "わ", romaji: "wa", en: "wa" },
    { np: "ओ", jp: "を", romaji: "wo", en: "wo (used as particle)" },
    { np: "न्", jp: "ん", romaji: "n", en: "n" }
];
function HiraganaPageContent() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-6">
                    Hiragana Chart
                </h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-red-500 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">नेपाली (Nepali)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Japanese (Hiragana)</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">Romanji</th>
                                <th className="px-4 py-3 text-left text-sm sm:text-base">English</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hiraganaData.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    }
                                >
                                    <td className="px-4 py-2 text-sm sm:text-base font-medium text-gray-800">
                                        {row.np}
                                    </td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">
                                        {row.jp}
                                    </td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">
                                        {row.romaji}
                                    </td>
                                    <td className="px-4 py-2 text-sm sm:text-base text-gray-800">
                                        {row.en}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HiraganaPageContent
