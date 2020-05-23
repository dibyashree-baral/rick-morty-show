export const getList = (list, criteriaName) =>
  list && list.length > 0
    ? [...new Set(list.map((item) => item[criteriaName.toLowerCase()]))]
    : [];

export const getSelectedSearchCriteria = (selectedCriteria) => {
  let searchCriteriaList = [];
  selectedCriteria.forEach(
    (value, key) => value && searchCriteriaList.push(key)
  );
  return searchCriteriaList;
};

