<template>
 <header>
  <div class="container">
<img src="https://miro.medium.com/v2/resize:fit:1358/1*Rv_MrZ4I8tlXBIOO2s-mvQ.gif" alt="" title="Pinia">
<h1>Kişisel Günlüğüm</h1>
  </div>
 </header>
 <main>
  <div class="container">
    <div class="diary-list" v-for="gunluk in diaryStore.diary">

     <diary-details :gunluk="gunluk"></diary-details>

    </div>
  </div>
 </main>
</template>

<script>
import {useDiaryStore} from './stores/DiaryStore'
import DiaryDetails from './components/diary-details.vue'
  export default {
    components:{
      'diary-details':DiaryDetails
    },
    //composition api
    setup(){
      const diaryStore=useDiaryStore();
      return {diaryStore}
    }
  }
</script>
