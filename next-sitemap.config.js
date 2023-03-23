/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  additionalPaths: async (config) => {
    return [
        await config.transform(config),
        {
            loc: '/#Milk-Recording',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
        {
            loc: '/#Benefits',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
        {
            loc: '/#About-Us',
            priority: 0.8,
            lastmod: '2023-03-08',
        },
    ]
 },
}