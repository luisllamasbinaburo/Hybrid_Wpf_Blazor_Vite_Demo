export default {
    build: {      
      manifest: true,
      outDir: '../wwwroot/js',
      rollupOptions: {        
        input: './src/main.ts',
        output: {
            manualChunks: false,
            inlineDynamicImports: true,
            entryFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
          },
      },
    },
  }