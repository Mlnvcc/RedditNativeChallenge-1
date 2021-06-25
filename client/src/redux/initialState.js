export const initialState = {
  user: null,
  loader: false,
  content: [],
  addButton: false,
};

const getInitState = () => {
  return initialState;
};

export default getInitState;
