import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "../../utils/mediaQueries/deviceBreakPoints";
import CharacterDetails from "../atoms/CharacterDetails";
import NameAndInfo from "../atoms/NameAndInfo";

const styles = {
  characterList: {
    height: "440px",
    backgroundColor: "black",
    padding: "16px 12px",
    overflowY: "auto",
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#D8D8D8",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#9D9D9D",
      border: "1px solid #9D9D9D",
      borderRadius: "4px",
    },
    [device.mobileL]: {
      height: "auto",
      backgroundColor: "white",
    },
  },
  card: {
    position: "relative",
    width: "23%",
    display: "inline-block",
    margin: "0 8px 16px",
    height: "410px",

    [device.mobileL]: {
      width: "45%",
      padding: "8px",
      height: "375px",
      backgroundColor: "black",
    },
    [device.mobileM]: { width: "43%" },
  },
  horizontalScroll: {
    [device.tablet]: {
      overflowX: "auto",
      width: "880px",
    },
  },
};

const CharacterList = styled("div")(styles.characterList);
const Card = styled("div")(styles.card);
const HorizontalScroll = styled("div")(styles.horizontalScroll);

const CharacterCard = ({ list }) => (
  <CharacterList>
    <HorizontalScroll>
      {list.map((data, i) => (
        <Card key={i}>
          <NameAndInfo
            imageUrl={data.image}
            name={data.name}
            id={data.id}
            created={data.created}
          />
          <CharacterDetails
            details={[
              {
                key: "STATUS",
                value: data.status,
              },
              { key: "SPECIES", value: data.species },
              { key: "GENDER", value: data.gender },
              { key: "ORIGIN", value: data.origin.name },
              { key: "LAST LOCATION", value: data.location.name },
            ]}
          />
        </Card>
      ))}
    </HorizontalScroll>
  </CharacterList>
);

CharacterCard.propTypes = {
  list: PropTypes.array,
};

export default CharacterCard;
