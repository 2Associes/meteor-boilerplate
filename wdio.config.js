require('@babel/register') // Adds ES6 modules support

const SimpleDDP = require('simpleddp')
const ws = require('isomorphic-ws')
const chai = require('chai')

// https://webdriver.io/docs/configurationfile.html
exports.config = {
  // ==================================
  // Where should your test be launched
  // ==================================
  runner: 'local',
  // =====================
  // Server Configurations
  // =====================
  hostname: 'localhost',
  port: 4444,
  path: '/',
  services: ['chromedriver'],
  // ==================
  // Specify Test Files
  // ==================
  specs: [
    'tests/*.js'
  ],
  // Patterns to exclude.
  // exclude: [],
  // ============
  // Capabilities
  // ============
  // The property basically handles how many capabilities from the same test should run tests.
  maxInstances: 1,
  // Or set a limit to run tests with a specific capability.
  capabilities: [{
    browserName: 'chrome',
    maxInstances: 1
  }],
  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the `baseUrl`
  // gets prepended directly.
  baseUrl: 'http://localhost:3000',
  // Default timeout for all waitForXXX commands.
  waitforTimeout: 10000,
  // Framework you want to run your specs with.
  // The following are supported: 'mocha', 'jasmine', and 'cucumber'
  // See also: https://webdriver.io/docs/frameworks.html
  // Make sure you have the wdio adapter package for the specific framework installed before running any tests.
  framework: 'mocha',
  // Test reporters for stdout.
  reporters: [
    'spec',
    ['junit', {
      outputDir: './reports/wdio/',
      outputFileFormat({ cid }) {
        return `test-results-${cid}.xml`
      }
    }]
  ],
  // Options to be passed to Mocha.
  // See the full list at: http://mochajs.org
  mochaOpts: {
    timeout: 120000, // 2 minutes
    slow: 10000,
    bail: true
  },
  // =====
  // Hooks
  // =====
  beforeSession: function (config) {
    // Allow interaction with Meteor Server during tests
    // To learn more about this, see https://github.com/TheBrainFamily/chimpy/issues/152#issuecomment-600141534

    // Create connection with Meteor Server
    const server = new SimpleDDP({
      endpoint: 'ws://localhost:3000/websocket',
      SocketConstructor: ws,
      reconnectInterval: 5000
    })

    // Replicate Chimp's server.execute function
    /**
     * Execute code on server.
     * @param {function} func - Function to execute on server
     * @param {...*} args - Arguments to be passed to func
     * @returns {*} func result value if any
     */
    server.execute = async function (func, ...args) {
      let result
      const timeout = config.waitforTimeout || 500

      setTimeout(function () {
        if (!result) {
          throw new Error(`[ddp] Server.execute timeout after ${timeout} ms`)
        }
      }, timeout)

      try {
        result = await server.call('xolvio/backdoor', func.toString(), args)
      } catch (exception) {
        if (exception.error === 404) {
          throw new Error('[ddp] You need to install xolvio:backdoor in your meteor app before you can use server.execute()')
        } else {
          throw exception
        }
      }

      if (result.error) {
        console.error(result)
        throw new Error(`[ddp] Error in server.execute: ${result.error.message}`)
      } else {
        return result.value
      }
    }

    // Attach server to global context
    global.server = server
  },
  before: function () {
    // Attach assertion library to global context
    global.assert = chai.assert
  }
}
