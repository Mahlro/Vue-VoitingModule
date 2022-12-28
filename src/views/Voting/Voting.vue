<template>
  <div>
    <LeftSideMenu />
      <div class="d-flex flex-column align-items-center container">
        <div class="bg-white p-4 wrapper">
          <div class="d-flex justify-content-center title-form">
            <h1>Форма создания голосования</h1>
          </div>
          <form class="d-flex flex-column  gap-4" @submit.prevent="onSubmit">
            <div class="d-flex">
              <input type="text" class="form-control" placeholder="Название" aria-label="Название" v-model="$store.state.forms.name"/>
            </div>
            <div class="form-floating d-flex justify-content-center">
              <textarea class="form-control" id="floatingTextarea" v-model="$store.state.forms.question"/>
              <label for="floatingTextarea">Вопрос</label>
            </div>
            <div class="d-flex">
              <input type="number" class="form-control" placeholder="Количество допустимых ответов" v-model="$store.state.forms.choice_count"/>
            </div>
            <div class="d-flex flex-column align-items-center gap-3">
              <span>Может-ли голосующий видеть результат?</span>
              <input type="checkbox" name="checkbox" v-model="$store.state.forms.canVoterSeeResult"/>
            </div>
            <div class="d-flex flex-column align-items-center gap-3">
              <span>Дата и время начало голосования: </span>
              <input type="date" class="border p-2" placeholder="Количество допустимых ответов" v-model="$store.state.forms.starts_at"/>
            </div>
            <div class="d-flex flex-column align-items-center gap-3">
              <span>Дата и время окончания голосования: </span>
              <input type="date" class="border p-2" placeholder="Количество допустимых ответов" v-model="$store.state.forms.ends_at"/>
            </div>
            <div class="mb-3">
              <label for="formFileSm" class="form-label">Выберите свой логотип</label>
              <input class="form-control form-control-sm" id="formFileSm" type="file" @change="uploadImage" v-module="$store.state.forms.logo">
            </div>
            <div class="d-flex">
              <input type="number" class="form-control" placeholder="Поле для определение количества баллов"  v-model="$store.state.forms.bonus"/>
            </div>
            <div class="d-flex align-items-center flex-column gap-3">
              <span>Опции голосования:</span>
              <div>
                <button 
                type="button"
                class="btn btn-success btn-sm" 
                @click="addOptions"
                >+</button>
              </div>
            </div>
            <div v-for="item,index in $store.state.pollOptions" :key="index">
               <div class="d-flex">
                <input type="text" class="form-control" placeholder="Поле для добавления опций"  v-model="item.pollOptions"/>
                <button type="button" @click="removeOptions(index)" class="btn btn-danger btn-sm">x</button>
              </div> 
            </div>
            <div class="d-flex flex-column align-items-center gap-3">
              <RouterLink :to="{path: '/'}" class="btn btn-primary btn-sm">Добавить форму в список созданных голосований</RouterLink>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
  import LeftSideMenu from '../../components/LeftSideMenu/LeftSideMenu.vue';
  import { mapMutations } from 'vuex';

  export default {
    name: "Voting",
    components: {
      LeftSideMenu,
    },
    methods:{
      ...mapMutations(["addOptions", "removeOptions", "uploadImage"]),
      removeOptions(index){
        this.$store.commit('removeOptions', index);
      },
    }
  }
</script>

<style scoped>
.container{
  padding: 40px 0;
}
.wrapper{
  width: 800px;
  border-radius: 3px;
  box-shadow: 0 6px 12px 5px rgba(0,0,0,0.4);
}
.title-form{
  font-size: 24px;
}
@media screen and (max-width: 565px){
  .title-form{
    font-size: 20px
  }
  .wrapper{
    max-width: 350px;
  }
}
@media screen and (min-width: 566px ){
  .title-form{
    font-size: 20px
  }
  .wrapper{
    max-width: 500px;
  }
}
@media screen and (min-width: 768px ){
  .title-form{
    font-size: 20px
  }
  .wrapper{
    max-width: 700px;
  }
}
</style>