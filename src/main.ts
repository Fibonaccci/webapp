import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupNaive } from './plugins';


async function bootstrap() {
  // create a app instanse
  const app = createApp(App);
  // setup store
  setupStore(app);
  // setup router
  setupRouter(app);
  // setup global naive components
  setupNaive(app);
  // mount root element
  app.mount('#app');
}

await bootstrap();

