import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Checkbox from "../atoms/Checkbox";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";

const styles = {
  searchCriteriaContainer: {
    border: "1px solid black",
    padding: 0,
    paddingBottom: "16px",
    marginBottom: "20px",
    maxHeight: "150px",
    maxWidth: "300px",
    [device.mobileL]: {
      maxWidth: "none",
      "&:last-of-type": {
        marginBottom: 0,
      },
    },
    overflowY: "auto",
    overflowX: "auto",
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#D8D8D8",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#9D9D9D",
      border: "1px solid #9D9D9D",
      borderRadius: "4px",
    },
  },
  div: {
    margin: "12px 0",
    paddingLeft: "16px",
    [device.tablet]: {
      display: "inline-block",
      minWidth: "150px",
    },
  },
  header: {
    margin: 0,
    position: "sticky",
    top: 0,
    left: 0,
    backgroundColor: "#FFF",
    padding: "10px 16px 10px 16px",
    fontSize: "20px",
    fontFamily: "Roboto-Light"
  },
};

const SearchCriteriaContainer = styled("div")(styles.searchCriteriaContainer);
const Div = styled("div")(styles.div);
const Header = styled("h3")(styles.header);

const SearchCriteria = ({
  searchCriteriaName,
  handleCheckboxChange,
  checkedState,
  data,
}) => {
  return (
    <SearchCriteriaContainer>
      <Header>{searchCriteriaName}</Header>
      {data.map((item, i) => {
        return (
          <Div key={item + 1}>
            <Checkbox
              name={item}
              checked={checkedState.get(item) || false}
              onChange={handleCheckboxChange}
              searchCriteriaName={searchCriteriaName}
            />
          </Div>
        );
      })}
    </SearchCriteriaContainer>
  );
};

SearchCriteria.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default SearchCriteria;
