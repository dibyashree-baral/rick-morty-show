import React from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";

const styles = {
  imageWrapper: {
    background: (props) => `url(${props.background})`,
    backgroundSize: "cover",
    height: "40%",
    position: "relative",
    width: "100%",
    borderRadius: "10px 10px 0 0",
    [device.tablet]: {
      backgroundSize: "contain",
    },
    [device.mobileL]: {
      backgroundSize: "contain",
    },
  },
  nameAndIdInfo: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.65)",
    backgroundClip: "content-box",
    color: "#FFF",
    maxHHeight: "45%",
    width: "100%",
  },
  name: {
    margin: 0,
    marginLeft: "8px",
    fontFamily:"Roboto-Thin",
    fontSize: "18px"
  },
  info: {
    margin: "0 0 8px 8px",
    fontSize: "12px",
    fontFamily: "Roboto-Thin"
  },
};

const ImageWrapper = styled("div")(styles.imageWrapper);
const NameAndIdInfo = styled("div")(styles.nameAndIdInfo);
const Name = styled("h3")(styles.name);
const Info = styled("p")(styles.info);

const NameAndInfo = ({ imageUrl, name, id, created }) => (
  <ImageWrapper background={imageUrl}>
    <NameAndIdInfo>
      <Name>{name}</Name>
      <Info>
        id: {id} - Created {moment(created, "YYYYMMDD").fromNow()} ago
      </Info>
    </NameAndIdInfo>
  </ImageWrapper>
);

NameAndInfo.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  created: PropTypes.string,
};

export default NameAndInfo;
