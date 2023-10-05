import {defineStore} from 'pinia'
//export diger dosyaların kullanmasını saglıyor
export const useDiaryStore=defineStore("diaryStore",{
    state :()=>({
        diary:[
            {id:1, diary:"bugün hava bulutlu", date:"05.10.2023", isFav:false},
            {id:2, diary:"bugün hava güzel", date:"04.10.2023", isFav:true}
        ],
    }),
    getters:{
        favs(){
            return this.diary.filter(gunluk=>gunluk.isFav)
        },
        favCount(){
            return this.diary.reduce((previous,current)=>{
                return current.isFav ? previous + 1  : previous
            },0)
        },
        totalCount:(state)=>{
            return state.diary.length 
        }

    }
});