import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const styles = {
  selectedCriteriaButton: {
    height: "30px",
    width: "auto",
    fontSize: "18px",
    border: "none",
    background: "#eee",
    cursor: "pointer",
    marginRight: "8px",
    marginBottom: "8px",
  },
  crossIcon: {
    fontSize: "22px",
    verticalAlign: "middle",
    paddingLeft: "4px",
  },
};

const SelectedCriteriaButton = styled("button")(styles.selectedCriteriaButton);
const CrossIcon = styled("span")(styles.crossIcon);

const SelectedFilterButton = ({
  selectedSearchCriteria,
  removeSelectedCriteria,
  criteriaName,
}) => {
  return selectedSearchCriteria.map((data, i) => (
    <SelectedCriteriaButton
      key={data + i}
      onClick={() => removeSelectedCriteria(data, criteriaName)}
    >
      {data}
      <CrossIcon>&times;</CrossIcon>
    </SelectedCriteriaButton>
  ));
};

SelectedFilterButton.prototypes = {
  selectedSearchCriteria: PropTypes.array,
  removeSelectedCriteria: PropTypes.func,
  criteriaName: PropTypes.string,
};

export default SelectedFilterButton;
