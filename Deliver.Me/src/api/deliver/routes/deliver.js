'use strict';

/**
 * deliver router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::deliver.deliver');
