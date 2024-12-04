import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // jsdom 環境を指定
    globals: true, // グローバルで `expect` を使用可能にする
    setupFiles: './setupTests.js', // setup ファイルを指定
  },
});