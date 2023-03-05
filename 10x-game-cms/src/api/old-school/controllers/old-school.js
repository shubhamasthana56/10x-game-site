'use strict';

/**
 * old-school controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::old-school.old-school');
