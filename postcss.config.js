const purgecss = ['@fullhuman/postcss-purgecss',{
  content: ["./node_modules/megadraft/dist/**/*.css", "./components/**/*.js", "./pages/**/*.js"],

  defaultExtractor: content => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    return broadMatches.concat(innerMatches)
  }
}]

module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}