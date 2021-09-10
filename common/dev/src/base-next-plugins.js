const workspacePackages = require('../../../workspace-packages.json')

exports.withWorkspacePackages = (nextConfig = {}) => ({
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

exports.baseNextConfig = {
  experimental: {
    externalDir: true,
    esmExternals: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
