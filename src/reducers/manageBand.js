let id = 0;
export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      ++id;
      return { bands: [...state.bands, { ...action.band, id: id }] };
      break;
    case "DELETE_BAND":
      const newBands = state.bands.filter(band => band.id !== action.id);
      return { bands: newBands };
      break;
    default:
      return state;
  }
}
