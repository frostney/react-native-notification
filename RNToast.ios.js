/**
 * @providesModule RNToast
 * @flow
 */
'use strict';

var NativeRNToast = require('NativeModules').RNToast;
var invariant = require('invariant');

/**
 * High-level docs for the RNToast iOS API can be written here.
 */

var RNToast = {
  test: function() {
    NativeRNToast.test();
  }
};

module.exports = RNToast;
