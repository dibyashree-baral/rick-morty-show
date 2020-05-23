import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";

const styles = {
  keyValueWrapper: {
    borderBottom: "1px solid #FFF",
    padding: "8px 0",
    "&:after": {
      clear: "both",
      content: "''",
      display: "table",
    },
    "&:last-of-type": {
      borderWidth: 0,
    },
  },
  key: {
    color: "white",
    margin: 0,
    padding: 0,
    border: 0,
    display: "inline-block",
    width: "15%",
    fontSize: "12px",
  },
  value: {
    textAlign: "right",
    float: "right",
    color: "yellow",
    width: "60%",
    [device.mobileM]: { width: "40%" },
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  details: {
    height: "60%",
    width: "100%",
    padding: "4px 8px",
    backgroundColor: "grey",
    borderRadius: "0 0 10px 10px",
  },
};

const Details = styled("div")(styles.details);
const KeyValueWrapper = styled("div")(styles.keyValueWrapper);
const Key = styled("span")(styles.key);
const Value = styled(Key)(styles.value);

const CharacterDetails = ({ details }) => (
  <Details>
    {details.map((data, i) => (
      <KeyValueWrapper key={i + 1}>
        <Key>{data.key}</Key>
        <Value title={data.value}>{data.value}</Value>
      </KeyValueWrapper>
    ))}
  </Details>
);

CharacterDetails.propTypes = {
  details: PropTypes.array,
};

export default CharacterDetails;
