module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          constants: './src/constants',
          navigation: './src/navigation',
          screens: './src/screens',
          utils: './src/utils',
          src: './src',
        },
      },
    ],
  ],
};
