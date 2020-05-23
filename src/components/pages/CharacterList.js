import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCharactersList,
  getSortedList,
} from "../../redux/actions/rickNmontyShow";
import { getList, getSelectedSearchCriteria } from "../../utils/rickNmontyShow";

import {
  GENDER,
  SPECIES,
  STATUS,
  URL,
  LOADING_TEXT,
} from "../../constants/index";
import CharacterWithFilterCriteria from "../organisms/CharacterWithFilterCriteria";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
      checkedSpecies: new Map(),
      checkedGender: new Map(),
      checkedStatus: new Map(),
      genderSearch: [],
      speciesSearch: [],
      statusSearch: [],
      nameSearch: "",
      dropdownSelectedOption: "",
    };
  }

  componentDidMount() {
    this.setState({ showLoader: true });
    this.props
      .getCharactersList(URL)
      .then(() => {
        this.setState({ showLoader: false });
      })
      .catch((err) => {
        this.setState({ showLoader: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.statusSearch.length !== this.state.statusSearch.length ||
      prevState.speciesSearch.length !== this.state.speciesSearch.length ||
      prevState.genderSearch.length !== this.state.genderSearch.length
    )
      this.fetchFilteredList();
  }

  handleCheckboxChange = (event, selectedCriteria) => {
    event.persist();
    let searchCriteria = [];
    switch (selectedCriteria) {
      case GENDER:
        searchCriteria = [...this.state.genderSearch];
        if (event.target.checked) {
          searchCriteria.push(event.target.name);
        } else {
          searchCriteria = searchCriteria.filter(
            (data) => data !== event.target.name
          );
        }
        this.updateState(
          "checkedGender",
          event.target,
          "genderSearch",
          searchCriteria
        );
        break;
      case SPECIES:
        searchCriteria = [...this.state.speciesSearch];
        if (event.target.checked) {
          searchCriteria.push(event.target.name);
        } else {
          searchCriteria = searchCriteria.filter(
            (data) => data !== event.target.name
          );
        }
        this.updateState(
          "checkedSpecies",
          event.target,
          "speciesSearch",
          searchCriteria
        );
        break;
      case STATUS:
        searchCriteria = [...this.state.statusSearch];
        if (event.target.checked) {
          searchCriteria.push(event.target.name);
        } else {
          searchCriteria = searchCriteria.filter(
            (data) => data !== event.target.name
          );
        }
        this.updateState(
          "checkedStatus",
          event.target,
          "statusSearch",
          searchCriteria
        );
        break;
      default:
        break;
    }
  };

  updateState = (
    checkedFieldName,
    eventDetails,
    updateCriteriaName,
    searchCriteria
  ) => {
    this.setState({
      [checkedFieldName]: this.state[checkedFieldName].set(
        eventDetails.name,
        eventDetails.checked
      ),
      [updateCriteriaName]: searchCriteria,
    });
  };

  onNameChange = (e) => {
    this.setState({
      nameSearch: e.target.value,
    });
  };

  onNameSearchClick = (e) => {
    e.preventDefault();
    this.fetchFilteredList();
    this.setState({
      nameSearch: "",
    });
  };

  removeSelectedCriteria = (name, criteriaName) => {
    let searchCriteria = [];
    switch (criteriaName) {
      case GENDER:
        searchCriteria = [...this.state.genderSearch];
        searchCriteria = searchCriteria.filter((data) => data !== name);
        this.setState((prevState) => ({
          checkedGender: prevState.checkedGender.set(name, false),
          genderSearch: searchCriteria,
        }));
        break;
      case SPECIES:
        searchCriteria = [...this.state.speciesSearch];
        searchCriteria = searchCriteria.filter((data) => data !== name);
        this.setState((prevState) => ({
          checkedSpecies: prevState.checkedSpecies.set(name, false),
          speciesSearch: searchCriteria,
        }));
        break;
      case STATUS:
        searchCriteria = [...this.state.statusSearch];
        searchCriteria = searchCriteria.filter((data) => data !== name);
        this.setState((prevState) => ({
          checkedStatus: prevState.checkedStatus.set(name, false),
          statusSearch: searchCriteria,
        }));
        break;
      default:
        break;
    }
  };

  fetchCharactersList = (url) =>
    this.props.getCharactersList(url, this.state.dropdownSelectedOption);

  fetchFilteredList = () => {
    const {
      genderSearch,
      speciesSearch,
      statusSearch,
      nameSearch,
    } = this.state;
    const params = {};

    for (let query of genderSearch) {
      params.gender = query;
    }

    for (let query of statusSearch) {
      params.status = query;
    }

    for (let query of speciesSearch) {
      params.species = query;
    }

    if (nameSearch) params.name = nameSearch;

    this.props.getCharactersList(
      URL,
      params,
      this.state.dropdownSelectedOption
    );
  };

  onDropdownSelection = (dropdownSelectedOption) => {
    this.setState({ dropdownSelectedOption: dropdownSelectedOption.value });
    this.props.getSortedList(dropdownSelectedOption.value);
  };

  render() {
    const {
      info,
      totalList,
      currentResultList: charactersList,
      error,
    } = this.props.charactersListDetails;
    const {
      showLoader,
      checkedSpecies,
      checkedGender,
      checkedStatus,
      nameSearch,
      dropdownSelectedOption,
    } = this.state;
    const speciesList = getList(totalList, SPECIES);
    const genderList = getList(totalList, GENDER);
    const statusList = getList(totalList, STATUS);
    const selectedSpeciesSearchCriteria = getSelectedSearchCriteria(
      checkedSpecies
    );
    const selectedGenderSearchCriteria = getSelectedSearchCriteria(
      checkedGender
    );
    const selectedStatusSearchCriteria = getSelectedSearchCriteria(
      checkedStatus
    );
    return (
      <CharacterWithFilterCriteria
        handleCheckboxChange={this.handleCheckboxChange}
        checkedGender={checkedGender}
        checkedSpecies={checkedSpecies}
        checkedStatus={checkedStatus}
        genderList={genderList}
        statusList={statusList}
        speciesList={speciesList}
        selectedGenderSearchCriteria={selectedGenderSearchCriteria}
        selectedStatusSearchCriteria={selectedStatusSearchCriteria}
        selectedSpeciesSearchCriteria={selectedSpeciesSearchCriteria}
        charactersList={charactersList}
        error={error}
        dropdownSelectedOption={dropdownSelectedOption}
        onDropdownSelection={this.onDropdownSelection}
        onNameChange={this.onNameChange}
        onNameSearchClick={this.onNameSearchClick}
        nameSearch={nameSearch}
        removeSelectedCriteria={this.removeSelectedCriteria}
        info={info}
        fetchCharactersList={this.fetchCharactersList}
        showLoader={showLoader}
        title={LOADING_TEXT}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  charactersListDetails: state.getCharactersList.charactersListDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getCharactersList: bindActionCreators(getCharactersList, dispatch),
  getSortedList: bindActionCreators(getSortedList, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withRouter(CharacterList));
