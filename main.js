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

      newTask: {
        name: "",
        state: false,
      },
    };
  },

  methods: {
    deleteTasks(index) {
      this.tasks.splice(index, 1);
    },

    AddTasck() {
      const nuovaTask = { ...this.newTask };

      if (!nuovaTask.name) {
        alert("non hai inserito");
        return;
      }
      this.tasks.push(nuovaTask);

      this.newTask.name = "";
    },

    changeState(index) {
      this.tasks.state.invert;
    },
  },
});

app.mount("#root");

//* DIRETTIVE VUE
