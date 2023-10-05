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
      <p  v-if="filter==='all'">Toplam {{ totalCount }} kayıt var</p>
      <p v-if="filter==='favs'">Toplam {{ favCount }} kayıt var</p>
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
    
    <p><button @click="diaryStore.$reset">Reset</button></p>


  </div>
 </main>
</template>

<script>
import {useDiaryStore} from './stores/DiaryStore'
import DiaryDetails from './components/diary-details.vue'
import { ref } from 'vue';
import NewDiary from './components/new-diary.vue';
import {storeToRefs} from 'pinia';
  export default {
    components:{
      'diary-details':DiaryDetails,
      'new-diary':NewDiary

    },
    //composition api
    setup(){
      const diaryStore=useDiaryStore();
      //storeToRefs sadece getirilebilir degerler icin kullanılır action icin kullanılamaz
      const {diary,loading,favs,totalCount,favCount} = storeToRefs(diaryStore);

      const filter= ref('all')
      diaryStore.getDiary()
      return {diaryStore,filter,diary,loading,favs,totalCount,favCount}
    }
  }
</script>
