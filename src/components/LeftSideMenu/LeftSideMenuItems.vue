<template>
  <nav v-for="item in items" :key="item.id">
    <ul class="m-0 p-0 mx-4" v-if="!collapsed">
      <a href="#" class="">
        <li class="text-light link">{{ item.title }}</li>
      </a>
    </ul>
  </nav>
</template>

<script>
import { collapsed } from '../../store/store';
export default {
  setup(){
    return{
      collapsed
    }
  },
  data() {
    return {
      items: [
        {
          id: Math.ceil(Math.random() * 100),
          title: "Dashboard",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "Пользователи",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "База болельщиков",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "Комуникации",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "Матчи",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "События",
        },
         {
          id: Math.ceil(Math.random() * 100),
          title: "Продавцы",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "Положения",
        },
        {
          id: Math.ceil(Math.random() * 100),
          title: "Опросы",
        },
      ]
    }
  }
 }
</script>

<style scoped>
  .link{
    font-size: 14px;
  }
</style>