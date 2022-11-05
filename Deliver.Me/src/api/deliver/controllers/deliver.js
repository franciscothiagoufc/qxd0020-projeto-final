'use strict';

/**
 * deliver controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::deliver.deliver');
