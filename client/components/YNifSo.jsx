import React from 'react'

class Radio extends React.Component {
  render () {
    const { question, update, answer, updateIfSo } = this.props
    return (
      <div>
        <h3>{question.question}</h3>
        <form>
          <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
            value='Yes' checked={answer === 'Yes'} />Yes<br />
          <input type='radio' name='answer' onChange={e => update(e, question.id, question.question)}
            value='No' checked={answer === 'No'} />No<br />
          {(answer === question.ifSo.val) && <label>{question.ifSo.question}<br />
            <input type='text' onChange={e => updateIfSo(e, question.id, question.ifSo.question)} />
          </label>}
        </form>
      </div>
    )
  }
}

export default Radio