import { Configuration, JarvisV1Api } from '../modules/jarvis-api';

const configuration = new Configuration({
  basePath: 'https://daily.jarvis-stock.tw',
});

export const jarvisApi = new JarvisV1Api(configuration);
