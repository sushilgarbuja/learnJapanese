import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HiraganaPage from './pages/HiraganaPage'
import KatakanaPage from './pages/KatakanaPage'
import LessonOnePage from './pages/LessonOnePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'
import Lesson2Vocabulary from './pages/Lesson2page'
import Lesson3Vocabulary from './pages/Lesson3page'
import Lesson4Vocabulary from './pages/Lesson4page'
import Lesson5Vocabulary from './pages/lesson5Page'
import Lesson6Vocabulary from './pages/Lesson6page'
import Lesson7Vocabulary from './pages/Lesson7Page'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hiragana" element={<HiraganaPage />} />
          <Route path="/katakana" element={<KatakanaPage />} />
          <Route path='/lessonone' element={<LessonOnePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/lessontwo' element={<Lesson2Vocabulary />} />
          <Route path='/lessonthree' element={<Lesson3Vocabulary />} />
          <Route path='/lessonfour' element={<Lesson4Vocabulary />} />
          <Route path='/lessonfive' element={<Lesson5Vocabulary />} />
          <Route path='/lessonsix' element={<Lesson6Vocabulary />} />
          <Route path='/lessonseven' element={<Lesson7Vocabulary />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
