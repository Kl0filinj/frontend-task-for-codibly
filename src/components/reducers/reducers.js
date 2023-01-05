export function reducer(state, action) {
  switch (action.type) {
    case 'addData':
      return { ...state, data: action.payload };
    case 'nextPage':
      return { ...state, page: state.page + 1 };
    case 'prevPage':
      return { ...state, page: state.page - 1 };
    case 'setError':
      return { ...state, error: action.payload };
    case 'changeIsLoading':
      return { ...state, isLoading: action.payload };
    default:
      break;
  }
}
