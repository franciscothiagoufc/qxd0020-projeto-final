'use strict';

/**
 * card-debit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::card-debit.card-debit');
