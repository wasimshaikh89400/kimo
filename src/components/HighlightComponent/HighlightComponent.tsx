import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { HeadingComponent } from "@components/HighlightComponent/HighlightComponent.style";
import { highlightData } from "@services/highlightService";
import HighlightCard from "@components/HighlightCard/HighlightCard";
import Grid from "@mui/material/Grid";
import { HighlightDataTypes } from "@components/HighlightComponent/HighlightComponent.type";
const HighlightComponent = () => {
  const [highlight, setHighlight] = useState<HighlightDataTypes[]>([]);
  const getData = async () => {
    const { data } = await highlightData();
    setHighlight(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <HeadingComponent>Highlights</HeadingComponent>
      <Grid container spacing={3} columns={12}>
        {highlight.map((ele: HighlightDataTypes, index: number) => (
          <Grid
            item
            sm={4}
            key={index}
            sx={{ width: "90%", marginInline: "auto" }}
          >
            <HighlightCard {...ele} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HighlightComponent;
