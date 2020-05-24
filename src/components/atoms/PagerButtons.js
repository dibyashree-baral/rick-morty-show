import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { NEXT_BUTTON, PREV_BUTTON } from "../../constants/index";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";

const styles = {
  prevBtn: {
    float: "left",
    width: "135px",
    height: "32px",
    fontSize: "16px",
    border: 'none',
    cursor: 'pointer',
    color: "#FFF",
    background: "#0074d9",
    "&:disabled": {
      background: "#cccccc",
      color: "#666666",
      cursor:"not-allowed"
    },
    "&:hover":{ background: "#00aad9"},
    [device.mobileL]: {
      width: "90px",
      height: "40px",
    },
    [device.tablet]: {
      width: "120px",
      height: "40px",
    },
  },
  nextBtn: {
    float: "right",
  },
  btnWrapper: {
    marginTop: "16px",
    "&:after": {
      clear: "both",
      content: "''",
      display: "table",
    },
  },
};

const BtnWrapper = styled("div")(styles.btnWrapper);
const PrevBtn = styled("button")(styles.prevBtn);
const NextBtn = styled(PrevBtn)(styles.nextBtn);

const PagerButtons = ({ info, fetchCharactersList }) =>
  info && (
    <BtnWrapper>
      <PrevBtn
        disabled={info.prev == null}
        onClick={() => fetchCharactersList(info.prev)}
      >
        {PREV_BUTTON}
      </PrevBtn>
      <NextBtn
        disabled={info.next == null}
        onClick={() => fetchCharactersList(info.next)}
      >
        {NEXT_BUTTON}
      </NextBtn>
    </BtnWrapper>
  );
PagerButtons.propTypes = {
  fetchCharactersList: PropTypes.func,
  info: PropTypes.object,
};

export default PagerButtons;
