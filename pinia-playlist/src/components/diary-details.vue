<template>
      <div class="box">
        <div>
          <p>{{ gunluk.diary}}</p>
          <small class="date">5.10.23</small>
        </div>

        <div>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      </div>

</template>

<script>
    export default {
        props:['gunluk']
    }
</script>