import { computed, ref } from "vue";
import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      forms: [
        {
          name: "",
          question: "",
          choice_count: 0,
          canVoterSeeResult: false,
          starts_at: "",
          ends_at: "",
          logo: "",
          bonus: 0,
        },
      ],
      edit: [
        {
          id: Math.floor(Math.random() * 100),
          title: "Редактировать?",
          isVisible: false,
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Удалить?",
          isDeleted: false,
        },
      ],
      pollOptions: [],
    };
  },
  mutations: {
    addOptions() {
      store.state.pollOptions.push({ pollOptionsName: "" });
      console.log(store.state.pollOptions);
    },
    removeOptions(state, index) {
      console.log(index);
      if (index >= 1 || index === 0) {
        store.state.pollOptions.splice(index, 1);
      }
    },
    uploadImage(state, e) {
      this.state.forms.logo = e.target.files[0].name;
      console.log(e.target.files[0]);
    },
  },
});
export default store;

export const collapsed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);
export const SIDEBAR_WIDTH = 250;
export const SIDEBAR_WIDTH_COLLAPSED = 0;
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);
