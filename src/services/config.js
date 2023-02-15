const devBaseURL = 'http://101.34.205.91:7878';
const proBaseURL = 'http://101.34.205.91:7878';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIME_OUT = 5000;
