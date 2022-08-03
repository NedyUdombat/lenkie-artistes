/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
type CommonEnvsType = {
  ENVIRONMENT: string | undefined;
  BASE_URL: string | undefined;
  PROXY_URL: string | undefined;
};

const commonEnvs: CommonEnvsType = {
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
  BASE_URL: process.env.REACT_APP_BASE_URL,
  PROXY_URL: process.env.REACT_APP_PROXY_URL,
};

const config: Record<string, any> = Object.freeze({
  production: {
    ...commonEnvs,
  },
  local: {
    ...commonEnvs,
  },
  development: {
    ...commonEnvs,
  },
  staging: {
    ...commonEnvs,
  },
});

export default config[commonEnvs.ENVIRONMENT!];
