import { Button, Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { categoryData } from "@services/categoryService";
import Colors from "@utils/colors.config";
import CategoryCard from "@components/CategoryCard/CategoryCard";
import {
  CategoryHeaderStyle,
  GuideStyle,
  GuideDetailsStyle,
} from "@components/FooterComponent/FooterComponent.style";
import GuideAvatar from "@components/FooterComponent/GuideAvatar";
import { CategoryPropsTypes } from "@components/FooterComponent/FooterComponent.type";
const FooterComponent = () => {
  const [category, setCategory] = useState<CategoryPropsTypes[]>([]);
  const getCategories = async () => {
    const { data }: any = await categoryData();
    setCategory(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Grid
      container
      sx={{
        background: Colors.FOOTER_BACKGROUND,
        paddingInline: { xs: "5%", md: "10%" },
      }}
      spacing={4}
    >
      <Grid item sm={12} md={6}>
        <CategoryHeaderStyle>Catergories</CategoryHeaderStyle>
        {category.map((ele: CategoryPropsTypes, index: number) => (
          <CategoryCard {...ele} key={index} />
        ))}
      </Grid>
      <Grid item sm={12} md={6}>
        <CategoryHeaderStyle>Travel Guide</CategoryHeaderStyle>
        <Card sx={{ px: 4, pb: 3 }}>
          <Grid container>
            <Grid item xs={9}>
              <GuideStyle>Hadwin Malone</GuideStyle>
              <GuideDetailsStyle>Hadwin Malone</GuideDetailsStyle>
              <Button
                variant="outlined"
                sx={{
                  border: `1px solid ${Colors.SECONDARY_TEXT}`,
                  color: Colors.SECONDARY_TEXT,
                }}
              >
                Contact
              </Button>
            </Grid>
            <Grid item xs={3} sx={{ my: 3 }}>
              <GuideAvatar />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FooterComponent;
