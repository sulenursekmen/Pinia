import { defineStore } from 'pinia';

export const useDiaryStore = defineStore("diaryStore", {
    state: () => ({
        diary: [
            { id: 1, diary: "bugün hava bulutlu", date: "05.10.2023", isFav: false },
            { id: 2, diary: "bugün hava güzel", date: "04.10.2023", isFav: true }
        ],
    }),
    getters: {
        favs() {
            return this.diary.filter(gunluk => gunluk.isFav);
        },
        favCount() {
            return this.diary.reduce((previous, current) => {
                return current.isFav ? previous + 1 : previous;
            }, 0);
        },
        totalCount(state) {
            return state.diary.length;
        }
    },
    actions: {
        newDiary(entry) {
            this.diary.push(entry);
        },
        toggleFav(id){
            const diary=this.diary.find(diary=>diary.id===id)
            diary.isFav=!diary.isFav
        },
        deleteDiary(id){
            this.diary=this.diary.filter(diary=>{
                return diary.id!==id
            })
        }
    }
});
