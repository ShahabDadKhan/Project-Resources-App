import { createApp } from 'vue';

import App from '../src/App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialouge from './components/UI/BaseDialouge.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialouge', BaseDialouge);

app.mount('#app');
