'use strict';

/**
 * deliver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::deliver.deliver');
