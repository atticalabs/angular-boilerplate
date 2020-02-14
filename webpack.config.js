const path = require('path');

const purgecss = require("@fullhuman/postcss-purgecss")({
  css: ["./src/*.css"],
  content: ["./src/**/*.html", './src/**/*.component.ts'],
  defaultExtractor: content =>
    content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = (config) => {
  console.log('\x1b[36m%s\x1b[0m', `===== Running ${config.mode} mode =====`);

  config.module.rules.push({
    test: /\.css$/,
    include: [path.resolve(__dirname, 'src')],
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            ...(config.mode === 'production' ? [purgecss] : [])
          ]
        }
      }
    ]
  });
  return config;
};
