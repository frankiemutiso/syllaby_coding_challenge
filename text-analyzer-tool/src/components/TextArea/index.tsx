import { FC } from 'react'
import './index.scss'

type TextAreaProps = {
  input: string
  setInput: (value: string) => void
}

const TextArea: FC<TextAreaProps> = ({ input, setInput }) => {
  return (
    <textarea
      className="text-area"
      placeholder="Paste your text here..."
      autoFocus
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  )
}

export default TextArea
