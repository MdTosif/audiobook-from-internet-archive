import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    solid(),
    VitePWA({
      
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'My Audiobook App',
        short_name: 'AudiobookApp',
        description: 'An application to listen to audiobooks from the Internet Archive.',
        theme_color: '#000000',
        icons: [
          {
            src: 'audiobook.jpeg',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
