import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [input, setInput] = useState<string>('')
  const [words, setWords] = useState<number>(0)
  const [characters, setCharacters] = useState<number>(0)
  const [paragraphs, setParagraphs] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [pronounCount, setPronounCount] = useState<number>(0)
  const [averageReadingTime, setAverageReadingTime] = useState<number>(0)

  useEffect(() => {
    const countWords = (input: string) => {
      const words = input.trim().split(' ')
      let wordCount = 0

      words.forEach((word) => {
        if (word.length > 0) {
          wordCount += 1
        }
      })

      setWords(wordCount)
    }
    const countCharacters = (input: string) => {
      setCharacters(input.length)
    }

    const countSentences = () => {}

    const countPronouns = (input: string) => {
      let tempPronounCount = 0

      const words = input.trim().split(' ')

      words.forEach((word) => {
        const characters = ['.', '?', ',', '!']

        let tempWord = word

        characters.forEach((character) => {
          if (tempWord.includes(character)) {
            tempWord.replace(character, '')
          }
        })

        if (tempWord.length > 0 && pronouns.includes(tempWord)) {
          tempPronounCount += 1
        }
      })

      setPronounCount(tempPronounCount)
    }

    const countParagraphs = (input: string) => {
      const paragraphs = input.trim().split('\n')
      let paragraphCount = 0

      paragraphs.forEach((paragraph) => {
        if (paragraph.length > 0) {
          paragraphCount += 1
        }
      })

      setParagraphs(paragraphCount)
    }

    countWords(input)
    countCharacters(input)
    countParagraphs(input)
    countPronouns(input)
  }, [input])

  useEffect(() => {
    const calculateAverageReadingTime = (wordCount: number) => {
      setAverageReadingTime(Math.floor(wordCount / 225))
    }
    calculateAverageReadingTime(words)
  }, [words])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            words={words}
            paragraphs={paragraphs}
            characters={characters}
            sentences={sentences}
            pronounCount={pronounCount}
          />
          <TextArea input={input} setInput={setInput} />
          <BottomResultBox averageReadingTime={averageReadingTime} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
