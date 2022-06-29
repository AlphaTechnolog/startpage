<script setup lang="ts">
import { ref } from 'vue'
import { useDate } from './composables/useDate'

interface Service {
  name: string;
  icon: string;
  url: string;
}

const services = ref<Array<Service>>([
  { name: 'Github', icon: 'fa-brands fa-github', url: 'https://github.com' },
  { name: 'Google', icon: 'fa-brands fa-google', url: 'https://www.google.com' },
  { name: 'Youtube', icon: 'fa-brands fa-youtube', url: 'https://youtube.com' },
])

const { hour, minutes } = useDate()

const openService = (service: Service): void => {
  // @ts-ignore
  window.location = service.url
}
</script>

<template>
  <div class="main-box">
    <h1 class="date">{{ hour }}:{{ minutes }}</h1>
    <p class="welcome">Welcome Gabriel!</p>
    <div class="services">
      <button
        class="service-item"
        v-for="(service, index) in services"
        :title="service.name"
        :key="index"
        @click="openService(service)"
      >
        <i :class="service.icon" />
      </button>
    </div>
  </div>
</template>
