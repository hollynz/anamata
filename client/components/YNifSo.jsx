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
    const { question, update, answer, updateIfSo } = this.props
    return (
      <div className='qDiv' data-aos='fade-right'>
        <div className='speech-bubble'>
          <h3>{question.question}</h3>
        </div>
        <form data-aos='fade-left'>
          <div className='radio'>
            <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
              value='Yes' checked={answer === 'Yes'} />Yes
            <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
              value='No' checked={answer === 'No'} />No
          </div>
          {(answer === question.ifSo.val) && <label>{question.ifSo.question}<br />
            <input type='text' onChange={e => updateIfSo(e, question.id, question.ifSo.question)} />
          </label>}
        </form>
      </div>
    )
  }
}

export default Radio
