import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
    // Force Vite to resolve these dependencies from node_modules
    dedupe: ['react', 'react-dom', 'react-helmet-async', '@tanstack/react-query', '@tanstack/react-query-devtools']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    // Increase chunk size warning limit to 1000kB
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: [],
      output: {
        // Optimize chunk splitting to reduce bundle sizes
        manualChunks: (id) => {
          // Core React ecosystem
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Chart libraries
            if (id.includes('recharts') || id.includes('chart')) {
              return 'charts';
            }
            // UI libraries
            if (id.includes('@radix-ui') || id.includes('lucide') || id.includes('clsx') || id.includes('tailwind')) {
              return 'ui-vendor';
            }
            // Form libraries
            if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
              return 'form-vendor';
            }
            // Query and state management
            if (id.includes('@tanstack') || id.includes('react-query')) {
              return 'query-vendor';
            }
            // File processing libraries
            if (id.includes('pdf') || id.includes('dompurify') || id.includes('marked')) {
              return 'file-processing';
            }
            // Firebase and auth
            if (id.includes('firebase')) {
              return 'firebase';
            }
            // Other vendor libraries
            return 'vendor';
          }
          
          // Application code splitting
          if (id.includes('src/pages')) {
            // Large pages get their own chunks
            if (id.includes('CVBuilder')) return 'cvbuilder';
            if (id.includes('Dashboard')) return 'dashboard';
            if (id.includes('Register')) return 'register';
            if (id.includes('PostJob')) return 'postjob';
            if (id.includes('UserProfile')) return 'userprofile';
            if (id.includes('MarketingRules')) return 'marketing';
            if (id.includes('WiseUp')) return 'wiseup';
            if (id.includes('Interview')) return 'interview';
            if (id.includes('Salary')) return 'salary';
            // Other pages
            return 'pages';
          }
          
          // Service and utility chunks
          if (id.includes('src/services')) {
            return 'services';
          }
          if (id.includes('src/components')) {
            return 'components';
          }
        },
        // Optimize chunk naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace(/\.[^.]*$/, '') || 'chunk'
            : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        }
      }
    }
  },
});
