//* STRUTTUTA BASE VUE

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo App",

      tasks: [
        {
          name: "Task 1",
          state: true,
        },
        {
          name: "Task 2",
          state: false,
        },
        {
          name: "Task 3",
          state: true,
        },
        {
          name: "Task 4",
          state: false,
        },
        {
          name: "Task 5",
          state: true,
        },
      ],
    };
  },

  methods: {
    deleteTasks(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#root");

//* DIRETTIVE VUE
