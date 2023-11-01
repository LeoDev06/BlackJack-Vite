import {defineConfig} from 'vite';

/*
  Esto se hace para poder configurar la url de acceso al 
  proyecto cuando lo lanzamos en github-pages, esto con el
  fin de no hacer cambios manualmente en las urls del index.html

  Ejemplo:
  De esto 
  <script type="module" crossorigin src="/assets/index-71146251.js"></script>
  a esto
  <script type="module" crossorigin src="/BlackJack-Vite/assets/index-71146251.js"></script>

*/

export default defineConfig({
  base:'/BlackJack-Vite/',
  plugins: []
});