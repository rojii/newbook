/**
 * api.js - an orderbook API for general
 * https://github.com/rojii/newbook
 * Copyright (c) 2022, Jonathan Jose Gonzales Gutierrez (MIT License).
 */

'use strict';

const assert = require('bsert');
const EventEmitter = require('events');
const bcurl = require('bcurl');
const blgr = require('blgr');
const {coinbase, gemini, kraken} = require('./constants');

class API extends EventEmitter {
  constructor(options) {
    super();

    this.options = new APIOptions(options);
    this.logger = this.options.logger;

    this.coinbase = this.options.coinbase;
    this.kraken = this.options.kraken;
    this.gemini = this.options.gemini;

    this.init();
  }

  init() {
    this.logger.open();
    this.logger.info('Placeholder logger for this orderbook');
  }
}


class APIOptions {
  constructor(options) {

    this.logger = new blgr('debug');

    this.coinbase = bcurl.client(coinbase);
    this.gemini = bcurl.client(gemini);
    this.kraken = bcurl.client(kraken);

    if (options)
      this.fromOptions(options);
  }

  fromOptions(options) {
    return this;
  }

  static fromOptions(options) {
    return new this().fromOptions(options);
  }
}

/**
 * helpers
 */

function noop(){}

module.exports = API;
