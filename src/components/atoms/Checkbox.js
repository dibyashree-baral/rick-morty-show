import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const styles = {
  checkboxContainer: {
    display: "inline-block",
    verticalAlign: "top",
    cursor: "pointer",
  },
  name: {
    verticalAlign: "top",
    marginLeft: "16px",
  },
  icon: {
    height: "20px",
    width: "20px",
    visibility: (props) => (props.checked ? "visible" : "hidden"),
  },
  hiddenCheckbox: {
    border: "0",
    height: "1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
    visibility: 'hidden'
  },
  styledCheckbox: {
    display: "inline-block",
    width: "24px",
    height: "24px",
    border: "1px solid #767676",
  },
};

const CheckboxContainer = styled("label")(styles.checkboxContainer);
const Icon = styled("img")(styles.icon);
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })(
  styles.hiddenCheckbox
);
const StyledCheckbox = styled("div")(styles.styledCheckbox);
const Name = styled("span")(styles.name);

const Checkbox = ({
  className,
  checked,
  onChange,
  searchCriteriaName,
  ...props
}) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        checked={!!checked}
        onChange={(event) => onChange(event, searchCriteriaName)}
        {...props}
      />
      <StyledCheckbox>
        <Icon
          checked={checked}
          src={require("../../assets/icons/icon-checkmark.svg")}
          alt="icon"
        />
      </StyledCheckbox>
      <Name>{props.name}</Name>
    </CheckboxContainer>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
};
