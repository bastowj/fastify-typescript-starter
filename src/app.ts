import Fastify, { FastifyInstance } from 'fastify';
import * as routes from './routes';
import config from './core/config';
import { swaggerPlugin } from './plugins/swagger';

export const app = async (): Promise<FastifyInstance> => {
  const fastify = Fastify({
    logger: config.logger,
  });
  await fastify.register(swaggerPlugin, {
    prefix: config.apiPrefix,
    docsDir: config.docsDir,
  });

  const routeKeys = Object.keys(routes);
  for (const routeKey of routeKeys) {
    await fastify.register(routes[routeKey], { prefix: config.apiPrefix });
  }
  return fastify;
};
