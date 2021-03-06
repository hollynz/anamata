import React from 'react'

class TextForm extends React.Component {
  tooltip (question) {
    const length = question.tooltip.wordArr.length
    return (
      <div className='tooltipQuestion'>{question.tooltip.wordArr.map((word, i) =>
        <div key={i} className='tooltipSection'>
          {question.tooltip.questionArr[i]} <div className='tooltip'>{word}<p className='tooltiptext'>{question.tooltip.defArr[i]}</p></div> {i === length - 1 && question.tooltip.questionArr[i + 1]}
        </div>
      )}
      </div>
    )
  }

  render () {
    const { question, update, answer } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        </div>
        <form onSubmit={e => e.preventDefault()} className='textFormAnswer' data-aos='fade-left'>
          <textarea className='textinput' name="Text1" cols="40" rows="5" placeholder='type here' value={answer} onChange={e => update(e, question.id, question)}></textarea>
        </form>
      </div>
    )
  }
}

export default TextForm
