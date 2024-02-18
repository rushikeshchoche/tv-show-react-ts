export const isProduction = process.env.NODE_ENV === 'production';

const ENV = {
  develop: {
    apiBaseUrl: 'https://api.tvmaze.com/',
  },
  production: {
    apiBaseUrl: 'https://api.tvmaze.com/',
  },
};

export const getEnvironment = isProduction ? ENV.production : ENV.develop;
