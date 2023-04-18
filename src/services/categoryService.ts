import apiConfig from "@apiConfig";

export const categoryData = () => {
  const apiCallConfig = {
    url: `https://web-dev.dev.kimo.ai/v1/categories`,
  };
  const response = apiConfig.get(apiCallConfig);

  return response;
};
