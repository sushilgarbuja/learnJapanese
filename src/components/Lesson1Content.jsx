import React from 'react'

const vocabData = [
    { np: "हामी", jp: "わたしたち", romaji: "watashitachi", en: "We" },
    { np: "म", jp: "わたし（私）", romaji: "watashi", en: "I" },
    { np: "तपाईं", jp: "あなた", romaji: "anata", en: "You" },
    { np: "त्यो मान्छे / ऊ", jp: "あのひと（あの人）", romaji: "ano hito", en: "That person (he/she)" },
    { np: "सबै जना", jp: "みなさん（皆さん）", romaji: "minasan", en: "All of you / everyone" },
    { np: "श्री/सुश्री", jp: "～さん", romaji: "~san", en: "Mr./Ms." },
    { np: "बच्चालाई सम्बोधन", jp: "～ちゃん", romaji: "~chan", en: "–chan (for kids/friends)" },
    { np: "केटालाई सम्बोधन", jp: "～くん", romaji: "~kun", en: "–kun (for boys/younger males)" },
    { np: "नागरिकता प्रत्यय", jp: "～じん（～人）", romaji: "~jin", en: "–nationality suffix" },
    { np: "शिक्षक", jp: "せんせい（先生）", romaji: "sensei", en: "Teacher" },
    { np: "प्रशिक्षक", jp: "きょうし（教師）", romaji: "kyoushi", en: "Instructor" },
    { np: "विद्यार्थी", jp: "がくせい（学生）", romaji: "gakusei", en: "Student" },
    { np: "कम्पनी कर्मचारी", jp: "かいしゃいん（会社員）", romaji: "kaishain", en: "Company employee" },
    { np: "विशेष कम्पनी कर्मचारी", jp: "しゃいん（社員）", romaji: "shain", en: "Employee (of a company)" },
    { np: "बैंक कर्मचारी", jp: "ぎんこういん（銀行員）", romaji: "ginkouin", en: "Bank employee" },
    { np: "चिकित्सक", jp: "いしゃ（医者）", romaji: "isha", en: "Doctor" },
    { np: "अनुसन्धानकर्ता", jp: "けんきゅうしゃ（研究者）", romaji: "kenkyuusha", en: "Researcher / Scholar" },
    { np: "ईन्जिनियर", jp: "エンジニア", romaji: "enjinia", en: "Engineer" },
    { np: "विश्वविद्यालय", jp: "だいがく（大学）", romaji: "daigaku", en: "University" },
    { np: "अस्पताल", jp: "びょういん（病院）", romaji: "byouin", en: "Hospital" },
    { np: "बिजुली / प्रकाश", jp: "でんき（電気）", romaji: "denki", en: "Electricity / Light" },
    { np: "को", jp: "の", romaji: "no", en: "of (possessive)" },
    { np: "हो", jp: "です", romaji: "desu", en: "is / am / are" },
    { np: "हैन", jp: "いいえ", romaji: "iie", en: "No" },
    { np: "हो (सहमतिभाव)", jp: "はい", romaji: "hai", en: "Yes" },
    { np: "नेपाल", jp: "ねふぇる", romaji: "neferu", en: "Nepal" },
    { np: "जापान", jp: "にほん", romaji: "nihon", en: "Japan" },
    { np: "भारत", jp: "びょうたい", romaji: "byoutai", en: "India" },
];

const grammarNotes = [
    { point: "は (wa): Topic marker particle.", example: "わたしは がくせいです。(watashi wa gakusei desu.)→ I am a student." },
    { point: "です (desu): Polite ending for sentences.", example: "" },
    { point: "か (ka): Question marker added at the end.", example: "あのひとは せんせいですか？(ano hito wa sensei desu ka?)→ Is that person a teacher?" }
];

const exampleSentences = [
    "わたしは がくせいです。(watashi wa gakusei desu.)→ I am a student.",
    "あのひとは いしゃです。(ano hito wa isha desu.)→ That person is a doctor.",
    "こちらは サントスさんです。(kochira wa santos san desu.)→ This is Mr. Santos.",
    "あのひとは せんせいですか？(ano hito wa sensei desu ka?)→ Is that person a teacher?"
];

const greetings = [
    "はじめまして (Hajimemashite) – Nice to meet you",
    "～と もうします (~ to moushimasu) – I am called ~",
    "よろしく おねがいします (Yoroshiku onegaishimasu) – Please treat me kindly"
];

function Lesson1Content() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-center text-red-500 mb-6">Minna no Nihongo – Lesson 1</h1>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vocabulary</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-red-500">
                            <thead className="bg-red-500 text-white">
                                <tr>
                                    <th className="px-4 py-2 border">Nepali</th>
                                    <th className="px-4 py-2 border">Japanese</th>
                                    <th className="px-4 py-2 border">Romanji</th>
                                    <th className="px-4 py-2 border">English</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vocabData.map((item, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "hover:bg-gray-50" : ""}>
                                        <td className="px-4 py-2 border">{item.np}</td>
                                        <td className="px-4 py-2 border">{item.jp}</td>
                                        <td className="px-4 py-2 border">{item.romaji}</td>
                                        <td className="px-4 py-2 border">{item.en}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Grammar Notes</h2>
                    <ul className="space-y-3 list-disc list-inside">
                        {grammarNotes.map((note, idx) => (
                            <li key={idx}>
                                <strong>{note.point}</strong> {note.example && <span>Example: {note.example}</span>}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Example Sentences</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {exampleSentences.map((sentence, idx) => (
                            <li key={idx}>{sentence}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Greetings & Introductions</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {greetings.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Lesson1Content
