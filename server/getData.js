import { API_ROUTES } from "./config/apiRoutes.js";

export const getOperationName = async () => {
  try {
    const response = await fetch(API_ROUTES.EXTERNAL_MATH_OPERATIONS);
    const data = await response.json();
    console.log(data);
    return data;
  
  } catch (error) {
    console.error("Error querying data:", error);
    return [];
  }
};


export const getData = async () => {

try {
  const response = await fetch(API_ROUTES.EXTERNAL_QUESTIONS);
  const data = await response.json();
  console.log(data);
  return data;
} catch (error) {
  console.error("Error querying data:", error);
  return [];
}
};