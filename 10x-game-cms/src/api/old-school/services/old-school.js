'use strict';

/**
 * old-school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old-school.old-school');
