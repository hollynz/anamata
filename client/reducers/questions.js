const initialState = [
  {
    question: 'Are you hungry?',
    id: '1',
    type: 'Radio',
    responses: [
      {
        answer: 'Yes',
        show: '2'
      },
      {
        answer: 'No',
        hide: '2'
      }
    ]
  },
  {
    question: 'Do you want an apple?',
    id: '2',
    type: 'Radio',
    conditional: true,
    responses: [
      {
        answer: 'Yes',
        show: '3'
      },
      {
        answer: 'No',
        hide: '3'
      }
    ]
  },
  {
    question: 'how was the apple?',
    id: '3',
    type: 'Radio',
    conditional: true,
    responses: [
      {
        answer: 'Bad'
      },
      {
        answer: 'OK'
      },
      {
        answer: 'Good'
      }
    ]
  },
  {
    question: 'Are you Thirsty?',
    id: '4',
    responses: [
      {
        answer: 'Yes',
        show: '5'
      },
      {
        answer: 'No',
        hide: '5'
      }
    ]
  },
  {
    question: 'Do you want some water?',
    id: '5',
    type: 'Radio',
    conditional: true,
    responses: [
      {
        answer: 'Yes',
        show: '6'
      },
      {
        answer: 'No',
        hide: '6'
      }
    ]
  },
  {
    question: 'how was the water?',
    id: '6',
    type: 'Radio',
    conditional: true,
    responses: [
      {
        answer: 'Bad'
      },
      {
        answer: 'OK'
      },
      {
        answer: 'Good'
      }
    ]
  }
]

export default function questions (state = initialState, action) {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return action.questions
    default:
      return state
  }
}
