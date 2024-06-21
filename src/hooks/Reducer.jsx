export const initialState = {
  training_programs: [],
}

export default function Reducer(state, action) {
  switch (action.type) {
    case 'SET_TRAINING_PROGRAMS':
      return {
        ...state,
        training_programs: action.payload
      }
  }
}
