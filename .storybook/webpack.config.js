const path = require('path');

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '');
      return { ...rule, test: new RegExp(test) };
    } else {
      return rule;
    }
  });

  return config;
};
