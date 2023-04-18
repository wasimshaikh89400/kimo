import apiConfig from "@apiConfig";

export const highlightData = () => {
  console.log(process.env.APP_URL);

  const apiCallConfig = {
    url: `https://web-dev.dev.kimo.ai/v1/highlights`,
  };
  const response = apiConfig.get(apiCallConfig);
  console.log(response);

  return response;
};
