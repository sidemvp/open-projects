const composePlugins = require('next-compose-plugins')

const workspacePackages = require('../../workspace-packages.json')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withWorkspacePackages = (nextConfig = {}) => ({
  webpack: (config, options) => {
    const packageAlias = {}

    workspacePackages.forEach((workspacePackage) => {
      packageAlias[workspacePackage.name] = workspacePackage.path
    })

    Object.assign(config.resolve.alias, packageAlias)

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = composePlugins([withBundleAnalyzer, withWorkspacePackages], {
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})
