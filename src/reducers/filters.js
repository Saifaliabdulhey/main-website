import moment from "moment";

//Filters Reducer

const filtersReducerDefaultState = {
  endDate: moment().endOf('month'),
  sortBy: "date",
  startDate: moment().startOf('month'),
  text: "",
  kind: "",
  classified: "",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SET_KIND_FILTER":
      return {
        ...state,
        kind: action.kind,
      };
    case "SET_CLASSIFIED_FILTER":
      return {
        ...state,
        classified: action.classified,
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };

    // case "SET_START_DATE":
    //   return {
    //     ...state,
    //     startDate: action.startDate,
    //   };
    // case "SET_END_DATE":
    //   return {
    //     ...state,
    //     endDate: action.endDate,
    //   };
    default:
      return state;
  }
};

export default filtersReducer;