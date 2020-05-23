import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FilterCriteria from "./FilterCriteria";
import MainContent from "./MainContent";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";
import Loader from "../atoms/Loader";

const styles = {
  div: {
    height: "100vh",
    overflow: "-moz-scrollbars-none",
    overflow: "auto",
    "&:-ms-overflow-style": "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&:after": {
      clear: "both",
      content: "''",
      display: "table",
    },
    [device.mobileL]: {},
  },
};

const Div = styled("div")(styles.div);

const CharacterWithFilterCriteria = ({ ...props }) => (
  <Div>
    {props.showLoader ? (
      <Loader/>
    ) : (
      <>
        <FilterCriteria
          handleCheckboxChange={props.handleCheckboxChange}
          checkedGenderState={props.checkedGender}
          checkedSpeciesState={props.checkedSpecies}
          checkedStatusState={props.checkedStatus}
          genderList={props.genderList}
          statusList={props.statusList}
          speciesList={props.speciesList}
        />
        <MainContent
          selectedGenderSearchCriteria={props.selectedGenderSearchCriteria}
          selectedStatusSearchCriteria={props.selectedStatusSearchCriteria}
          selectedSpeciesSearchCriteria={props.selectedSpeciesSearchCriteria}
          charactersList={props.charactersList}
          error={props.error}
          value={props.dropdownSelectedOption}
          onDropdownSelection={props.onDropdownSelection}
          onNameChange={props.onNameChange}
          onNameSearchClick={props.onNameSearchClick}
          name={props.nameSearch}
          removeSelectedCriteria={props.removeSelectedCriteria}
          info={props.info}
          fetchCharactersList={props.fetchCharactersList}
        />
      </>
    )}
  </Div>
);

CharacterWithFilterCriteria.propTypes = {
  handleCheckboxChange: PropTypes.func,
  checkedGender: PropTypes.array,
  checkedSpecies: PropTypes.array,
  checkedStatus: PropTypes.array,
  genderList: PropTypes.array,
  statusList: PropTypes.array,
  speciesList: PropTypes.array,
  selectedGenderSearchCriteria: PropTypes.array,
  selectedStatusSearchCriteria: PropTypes.array,
  selectedSpeciesSearchCriteria: PropTypes.array,
  charactersList: PropTypes.array,
  error: PropTypes.string,
  dropdownSelectedOption: PropTypes.array,
  onDropdownSelection: PropTypes.func,
  onNameChange: PropTypes.func,
  onNameSearchClick: PropTypes.func,
  nameSearch: PropTypes.string,
  removeSelectedCriteria: PropTypes.func,
  info: PropTypes.object,
  fetchCharactersList: PropTypes.func,
};

export default CharacterWithFilterCriteria;
