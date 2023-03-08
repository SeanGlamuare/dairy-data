/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  additionalPaths: async (config) => {
    return [
        await config.transform(config),
        {
            path: '/#Milk-Recording',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
        {
            path: '/#Benefits',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
        {
            path: '/#About-Us',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
    ]
 },
}