'use strict';

/**
 * pix-random service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pix-random.pix-random');
