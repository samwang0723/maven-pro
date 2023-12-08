import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './jarvis.v1.swagger.json',
  apiFile: './src/features/apis/baseApi.ts',
  apiImport: 'baseSplitApi',
  outputFile: './src/features/apis/jarvisApi.ts',
  exportName: 'jarvisApi',
  hooks: true,
}

export default config
