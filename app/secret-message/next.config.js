const composePlugins = require('next-compose-plugins')
const { withWorkspacePackages, baseNextConfig } = require('mvp-common-dev/src/base-next-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = composePlugins([withBundleAnalyzer, withWorkspacePackages], baseNextConfig)
