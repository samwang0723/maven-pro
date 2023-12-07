import { Configuration, ConfigurationParameters, JarvisV1Api } from '../modules/jarvis-api';

let jarvisApi = null;

export const updateJarvisApiConfig = (accessToken: string) => {
  const newConfigParams: ConfigurationParameters = {
    basePath: 'https://daily.jarvis-stock.tw',
    apiKey: (name: string) => {
      if (name === 'Authorization') {
        return `Bearer ${accessToken}`;
      }
      return '';
    },
  };
  const newConfiguration = new Configuration(newConfigParams);
  jarvisApi = new JarvisV1Api(newConfiguration);
};

// Function to get the current instance of jarvisApi
export const getJarvisApi = () => {
  if (!jarvisApi) {
    // Optionally initialize jarvisApi if it's not already initialized
    updateJarvisApiConfig('');
  }
  return jarvisApi;
};

// Initialize jarvisApi with default configuration
updateJarvisApiConfig('');

