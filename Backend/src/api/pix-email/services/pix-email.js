'use strict';

/**
 * pix-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pix-email.pix-email');
