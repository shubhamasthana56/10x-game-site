'use strict';

/**
 * best-seller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::best-seller.best-seller');
