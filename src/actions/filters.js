
// SET_TEXT_FILTER

export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
  });
  export const setKindFilter = (kind = "") => ({
    type: "SET_KIND_FILTER",
    kind,
  });
  export const setClassifiedFilter = (classified = "") => ({
    type: "SET_CLASSIFIED_FILTER",
    classified,
  });
  
  // SORT_BY_DATE
  export const sortByDate = () => ({
    type: "SORT_BY_DATE",
  });
  
  // SORT_BY_AMOUNT
  export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
  });
  
  // SET_START_DATE
  export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
  });
  // SET_END_DATE
  export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
  });