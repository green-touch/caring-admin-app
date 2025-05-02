module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@_assets': './src/assets',
          '@_components': './src/components',
          '@_features': './src/features',
          '@_hooks': './src/hooks',
          '@_navigation': './src/navigation',
          '@_pages': './src/pages',
          '@_services': './src/services',
          '@_styles': './src/styles',
          '@_types': './src/types',
          '@_utils': './src/utils',
          '@_zustand': './src/zustand',
          '@_navigation': './src/navigation',
        },
      },
    ],
  ],
};
