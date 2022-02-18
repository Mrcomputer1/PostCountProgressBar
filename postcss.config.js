module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(!process.env.ROLLUP_WATCH ? {cssnano: {}} : {}),
  },
}
