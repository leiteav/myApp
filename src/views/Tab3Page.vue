<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Meu cadastro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Meu cadastro</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ContainerLogin name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ContainerLogin from '@/components/ContainerLogin.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ContainerLogin, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
