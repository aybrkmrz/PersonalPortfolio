/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  // output: 'export' // BUNU YORUMA AL
  i18n,
  trailingSlash: true, // bazı sunucular için gerekli
}

module.exports = nextConfig 