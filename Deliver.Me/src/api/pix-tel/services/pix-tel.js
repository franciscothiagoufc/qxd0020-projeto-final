'use strict';

/**
 * pix-tel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pix-tel.pix-tel');
