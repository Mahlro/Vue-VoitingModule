<template>
    <div class="card table-responsive ">
      <h1 class="fs-3">Список созданных голосований</h1>
      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="title-responsive">Логотип</th>
            <th scope="col" class="title-responsive">Название опроса</th>
            <th scope="col" class="title-responsive">Даты(старт/окончание)</th>
            <th scope="col" class="title-responsive">Лидирующий вариант с показателем %</th>
          </tr>
        </thead>
        <tbody v-for="item, index in $store.state.forms" :key="index">
          <VoiceModuleItem />
        </tbody>
      </table>
      <div class="d-flex justify-content-center">
        <RouterLink to="/voting" target="_blank" class="btn btn-primary btn-sm">
          Создать новое голосование
        </RouterLink>
      </div>
    </div>
</template>

<script>
  import VoiceModuleItem from './VoiceModuleItem.vue';
  import { RouterLink } from 'vue-router';
  export default {
    name: "VoiceModule",
    components:{
      VoiceModuleItem,
    },
  }
</script>

<style scoped>
.title-card-text{
  font-size: 36px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  word-wrap: break-word;
  background-color: #fff;
  border-radius: .25rem;
  box-shadow: 0 6px 12px 5px rgba(0,0,0,0.4);
  padding: 20px 0;
  margin-top: 100px;
}

@media screen and (max-width: 840px){
 .title-responsive{
  font-size: 10px;
 }
}
</style>