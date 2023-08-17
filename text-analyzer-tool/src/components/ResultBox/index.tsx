import { FC } from 'react'
import './index.scss'

type ResultBoxProps = {
  words: number
  paragraphs: number
  sentences: number
  characters: number
  pronounCount: number
}

const ResultBox: FC<ResultBoxProps> = ({
  words,
  sentences,
  characters,
  paragraphs,
  pronounCount,
}) => {
  const resultBar = [
    {
      title: 'Words',
      value: words,
    },
    {
      title: 'Characters',
      value: characters,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraphs,
    },
    {
      title: 'Pronouns',
      value: pronounCount,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
