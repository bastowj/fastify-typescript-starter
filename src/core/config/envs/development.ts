export default {
  env: 'development',
  apiPrefix: 'api/v1',
  docsDir: 'api-docs',
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  server: {
    host: 'localhost',
    port: 8080,
  },
};
