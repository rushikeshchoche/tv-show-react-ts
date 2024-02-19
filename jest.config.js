import { defaults } from 'jest-config';

/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};

export default config;