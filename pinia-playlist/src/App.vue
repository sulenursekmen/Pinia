<!-- terminalde json-server kurulumu -->
<!-- npm install -g json-server -->
<!-- json-server -w ./pinia-playlist/data/db.json -->

<template>
 <header>
  <div class="container">
<img src="https://miro.medium.com/v2/resize:fit:1358/1*Rv_MrZ4I8tlXBIOO2s-mvQ.gif" alt="" title="Pinia">
<h1>Kişisel Günlüğüm</h1>
  </div>
 </header>
 <main>
  <div class="container">
    <new-diary></new-diary>
    <div class="data-area">
      <p  v-if="filter==='all'">Toplam {{ diaryStore.totalCount }} kayıt var</p>
      <p v-if="filter==='favs'">Toplam {{ diaryStore.favCount }} kayıt var</p>
      <div>
        <button @click="$event=>filter='all'">Tüm Günlüklerim</button>
        <button @click="$event=>filter='favs'">Sadece beğendiklerim</button>
      </div>
    </div>
    
    <div class="diary-list" v-for="gunluk in diaryStore.diary" v-if="filter==='all'">
     <diary-details :gunluk="gunluk"></diary-details>
    </div>
    
    <div class="diary-list" v-for="gunluk in diaryStore.favs" v-if="filter==='favs'">
     <diary-details :gunluk="gunluk"></diary-details>
    </div>

  </div>
 </main>
</template>

<script>
import {useDiaryStore} from './stores/DiaryStore'
import DiaryDetails from './components/diary-details.vue'
import { ref } from 'vue';
import NewDiary from './components/new-diary.vue';
  export default {
    components:{
      'diary-details':DiaryDetails,
      'new-diary':NewDiary

    },
    //composition api
    setup(){
      const diaryStore=useDiaryStore();
      const filter= ref('all')
      diaryStore.getDiary()
      return {diaryStore,filter}
    }
  }
</script>
