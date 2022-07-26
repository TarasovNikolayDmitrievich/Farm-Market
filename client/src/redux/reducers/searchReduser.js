const GET_CARDS = 'GET_CARDS'

function cardsReduser(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_CARDS: {
      return payload
    }
    default: {
      return state
    }
  }
}

export default cardsReduser
