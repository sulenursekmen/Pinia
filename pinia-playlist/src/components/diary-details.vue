<template>
      <div class="box">
        <div>
          <p>{{ gunluk.diary}}</p>
          <small class="date">5.10.23</small>
        </div>

        <div>
          <i class="fa-regular fa-heart" :class="{active:gunluk.isFav}" @click="$event=>diaryStore.toggleFav(gunluk.id)" ></i>
          <i class="fa-solid fa-trash"  @click="$event=>diaryStore.deleteDiary(gunluk.id)"></i>
        </div>
      </div>

</template>

<script>
import { useDiaryStore } from '../stores/DiaryStore';

    export default {
        props:['gunluk'],
        setup(){
            const diaryStore=useDiaryStore()
            return {diaryStore}
        }
    }
</script>