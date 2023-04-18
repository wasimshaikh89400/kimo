import React from "react";
import PropTypes from "prop-types";
import { Box, Card } from "@mui/material";
import {
  TitleComponent,
  BodyComponent,
} from "@/components/HighlightCard/HighlightCard.style";
import BottomSVGIcon from "@/components/HighlightCard/BottomIconSvg";
import { HighlightCardProps } from "@components/HighlightCard/HighlightCard.type";

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Card sx={{ height: 400, position: "relative" }}>
      <img src={image} alt={title} width="auto" height="180" />
      <Box p={3} mt={-4}>
        <TitleComponent>{title}</TitleComponent>
        <BodyComponent>{description}</BodyComponent>
        <Box position="absolute" bottom={20} right={20}>
          <BottomSVGIcon />
        </Box>
      </Box>
    </Card>
  );
};

HighlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HighlightCard;
