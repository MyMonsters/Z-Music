const devBaseURL = 'http://101.34.205.91:3000';
const proBaseURL = 'http://101.34.205.91:3000';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIME_OUT = 5000;
