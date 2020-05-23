import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GENDER, SPECIES, STATUS, FILTER_TEXT } from "../../constants/index";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";
import SearchCriteria from "../molecules/SearchCriteria";

const styles = {
  menu: {
    width: "21%",
    float: "left",
    padding: "24px 16px",
    [device.mobileL]: {
      width: "100%",
      overflow: "auto",
      paddingBottom: 0
    },
    [device.tablet]: {
      width: "30%",
    },
  },
  header: {
    margin: 0,
    marginBottom: "16px",
  },
};

const Menu = styled("div")(styles.menu);
const Header = styled("h2")(styles.header);

const FilterCriteria = ({
  handleCheckboxChange,
  checkedGenderState,
  checkedSpeciesState,
  checkedStatusState,
  genderList,
  statusList,
  speciesList,
}) => {
  return (
    <Menu>
      <Header>{FILTER_TEXT}</Header>
      {genderList.length > 0 && (
        <SearchCriteria
          searchCriteriaName={GENDER}
          checkedState={checkedGenderState}
          data={genderList}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
      {speciesList.length > 0 && (
        <SearchCriteria
          searchCriteriaName={SPECIES}
          checkedState={checkedSpeciesState}
          data={speciesList}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
      {statusList.length > 0 && (
        <SearchCriteria
          searchCriteriaName={STATUS}
          checkedState={checkedStatusState}
          data={statusList}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
    </Menu>
  );
};

FilterCriteria.propTypes = {
  handleGenderCheckboxChange: PropTypes.func,
  handleStatusCheckboxChange: PropTypes.func,
  handleSpeciesCheckboxChange: PropTypes.func,
  checkedGenderState: PropTypes.object,
  checkedSpeciesState: PropTypes.object,
  checkedStatusState: PropTypes.object,
  genderList: PropTypes.array,
  statusList: PropTypes.array,
  speciesList: PropTypes.array,
};

export default FilterCriteria;
