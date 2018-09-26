import React from 'react'

class Radio extends React.Component {
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
    // eslint-disable-next-line
    const { question, update, answer } = this.props
    return (
      <div>
        {question.tooltip ? this.tooltip(question) : <h3>{question.question}</h3>}
        <form>
          { question.responses.map((response, i) => (
            <div key={i}>
              <input type='radio' name='answer' onChange={e => update(e, question.id, question)}
                value={response.answer} checked={answer === response.answer} />{response.answer}
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default Radio
