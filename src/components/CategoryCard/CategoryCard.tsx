import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import BottomSVGIcon from "@components/HighlightCard/BottomIconSvg";
import { Box, Divider } from "@mui/material";
import Colors from "@utils/colors.config";
import {
  CategoryPropsTypes,
  ActivityTypes,
} from "@components/CategoryCard/CategoryCard.type";

export default function ControlledAccordions({
  name,
  activities,
}: CategoryPropsTypes) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<BottomSVGIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ pt: 1, my: 1 }}
        >
          <Typography
            sx={{
              fontFamily: "IBM Plex Mono",
              fontSize: 16,
              fontWeight: 400,
              color: Colors.PRIMARY_TEXT,
            }}
          >
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -3 }}>
          {activities.map((ele: ActivityTypes, index: number) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontFamily: "IBM Plex Mono",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 4,
                }}
              >
                {ele.title}
              </Typography>
              {index !== activities.length - 1 && <Divider />}
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
