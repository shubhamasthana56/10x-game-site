'use strict';

/**
 * old-school router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::old-school.old-school');
