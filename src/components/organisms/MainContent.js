import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchIcon from "../../assets/icons/icon-search.svg";
import {
  GENDER,
  SPECIES,
  STATUS,
  SELECTED_FILTER_TITLE,
  SEARCH_NAME_TEXT,
  NO_FILTER_SELECTED_TEXT,
} from "../../constants/index";
import DropdownMenu from "../atoms/DropdownMenu";
import PagerButtons from "../atoms/PagerButtons";
import CharacterCard from "../molecules/CharacterCard";
import SelectedFilterButton from "../atoms/SelectedFilterButton";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";

const styles = {
  main: {
    width: "79%",
    float: "left",
    padding: "24px 16px",
    [device.mobileL]: {
      width: "100%",
    },
    [device.tablet]: {
      width: "70%",
    },
  },
  header: {
    margin: 0,
    marginBottom: "16px",
    fontSize: "22px",
    fontFamily: "Roboto-Bold"
  },
  searchButton: {
    background: `url(${SearchIcon}) no-repeat center`,
    backgroundSize: "50%",
    height: "37px",
    width: "10%",
    verticalAlign: "top",
    border: "1px solid grey",
    borderLeft: 0,
    cursor: "pointer",
    [device.tablet]: {
      width: "15%",
      backgroundSize: "65%",
    },
  },
  form: {
    display: "inline-block",
    width: "45%",
    verticalAlign: "bottom",
    [device.mobileL]: {
      width: "100%",
      marginBottom: "16px",
    },
  },
  searchInput: {
    height: "37px",
    width: "70%",
    border: "1px solid grey",
    background: "#f1f1f1",
    padding: "8px",
    fontSize: "16px",
    fontFamily: "Roboto-Thin",
    [device.mobileL]: {
      width: "90%",
    },
    [device.tablet]: { width: "85%" },
  },
  searchButtonWrapper: {
    marginBottom: "16px",
  },
  inputAndDropdownWrapper: {
    marginBottom: "16px",
  },
  inputLabel: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px"
  },
  error: {
    textAlign: "center",
    marginTop: "92px",
    color: "red",
  },
  nothingSelectedText: {
    height: "30px",
    margin: 0,
    marginBottom: "8px",
    fontSize: "16px",
    fontFamily: "Roboto-Thin"
  },
};

const Main = styled("div")(styles.main);
const Header = styled("h2")(styles.header);
const SearchButton = styled("button")(styles.searchButton);
const Form = styled("form")(styles.form);
const SearchInput = styled("input")(styles.searchInput);
const SearchButtonWrapper = styled("div")(styles.searchButtonWrapper);
const InputAndDropdownWrapper = styled("div")(styles.inputAndDropdownWrapper);
const InputLabel = styled("label")(styles.inputLabel);
const Error = styled("p")(styles.error);
const NothingSelectedText = styled("p")(styles.nothingSelectedText);

const MainContent = ({
  selectedGenderSearchCriteria,
  selectedStatusSearchCriteria,
  selectedSpeciesSearchCriteria,
  removeSelectedCriteria,
  fetchCharactersList,
  charactersList,
  onNameSearchClick,
  onNameChange,
  onDropdownSelection,
  value,
  error,
  info,
  name,
}) => {
  return (
    <Main>
      <Header>{SELECTED_FILTER_TITLE}</Header>
      {selectedGenderSearchCriteria.length > 0 ||
      selectedStatusSearchCriteria.length > 0 ||
      selectedSpeciesSearchCriteria.length > 0 ? (
        <>
          <SearchButtonWrapper>
            <SelectedFilterButton
              selectedSearchCriteria={selectedGenderSearchCriteria}
              removeSelectedCriteria={removeSelectedCriteria}
              criteriaName={GENDER}
            />
            <SelectedFilterButton
              selectedSearchCriteria={selectedStatusSearchCriteria}
              removeSelectedCriteria={removeSelectedCriteria}
              criteriaName={STATUS}
            />
            <SelectedFilterButton
              selectedSearchCriteria={selectedSpeciesSearchCriteria}
              removeSelectedCriteria={removeSelectedCriteria}
              criteriaName={SPECIES}
            />
          </SearchButtonWrapper>
        </>
      ) : (
        <NothingSelectedText>{NO_FILTER_SELECTED_TEXT}</NothingSelectedText>
      )}

      {
        <InputAndDropdownWrapper>
          <Form>
            <InputLabel>{SEARCH_NAME_TEXT}</InputLabel>
            <SearchInput
              type="text"
              placeholder="Search.."
              name="search"
              value={name}
              onChange={(e) => onNameChange(e)}
            />
            <SearchButton onClick={(e) => onNameSearchClick(e)} />
          </Form>
          <DropdownMenu
            options={["Ascending", "Descending"]}
            value={value}
            onChange={onDropdownSelection}
            placeholder="Sort by ID"
          />
        </InputAndDropdownWrapper>
      }

      {charactersList && charactersList.length > 0 && (
        <>
          <CharacterCard list={charactersList} />
          <PagerButtons fetchCharactersList={fetchCharactersList} info={info} />
        </>
      )}
      {error && <Error>{error}</Error>}
    </Main>
  );
};

MainContent.propTypes = {
  selectedGenderSearchCriteria: PropTypes.array,
  selectedStatusSearchCriteria: PropTypes.array,
  selectedSpeciesSearchCriteria: PropTypes.array,
  fetchCharactersList: PropTypes.func,
  charactersList: PropTypes.array,
  info: PropTypes.object,
};

export default MainContent;
