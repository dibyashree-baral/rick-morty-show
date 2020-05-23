import React from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";
import PropTypes from "prop-types";
import "react-dropdown/style.css";

const style = {
  dropdown: {
    "&.Dropdown-wrapper": {
      display: "inline-block",
      width: "50%",
      textAlign: "right",
      [device.mobileL]: {
        width: "100%",
        textAlign: "left",

      },
    },
    "& .Dropdown-control": {
      color: "#252525",
      fontSize: "16px",
      border: "1px solid #252525",
      padding: "4px 52px 4px 4px",
      display: "inline-block",
      width: "60%",
      textAlign: "left",
      [device.mobileL]: {
        width: "100%"
      },
      [device.tablet]: {width: "90%",},
      "& .Dropdown-arrow-wrapper": {
        "& .Dropdown-arrow": {
          display: "inline-block",
          content: "''",
          height: "16px",
          width: "16px",
          border: 0,
          borderBottom: "2px solid #929292",
          borderRight: "2px solid #929292",
          transform: "rotate(45deg)",
          top: "2px",
        },
      },
    },
    "& .Dropdown-menu": {
      backgroundColor: "#FFFFFF",
      boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
      right: 0,
      textAlign: "left",
      width: "60%",
      [device.mobileL]: {
        width: "100%"
      },
      "&:after": {
        clear: "both",
        content: "''",
        display: "table",
      },
      "& .Dropdown-option.is-selected": {
        backgroundColor: "#D8D8D8",
        color: "#090909",
        "&::after": {
          display: "inline-block",
          content: "''",
          height: "14px",
          width: "6px",
          float: "right",
          marginRight: "12px",
          borderBottom: "2px solid #0074d9",
          borderRight: "2px solid #0074d9",
          transform: "rotate(45deg)",
        },
      },
      "& .Dropdown-option": {
        "&:hover": {
          backgroundColor: "#D8D8D8",
          color: "#090909",
        },
      },
    },
  },
};
const DropdownWrapper = styled(Dropdown)(style.dropdown);

const DropdownMenu = ({ options, placeholder, onChange, value }) => (
  <DropdownWrapper
    className="Dropdown-wrapper"
    options={options}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

DropdownMenu.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  value: PropTypes.string,
};

export default DropdownMenu;
