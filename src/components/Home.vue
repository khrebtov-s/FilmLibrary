<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
          type="text"
          placeholder="What we will be watch?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          placeholder="Description"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list  
          input.what-watch(
            type="radio"
            id="radio-film"
            value="Film"
            v-model="whatWatch"
          )
          label(
            for="radio-film"
          ) Film

          input.what-watch(
            type="radio"
            id="radio-serial"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radio-serial"
          ) Serial

        .total-time
          .total-time__film(
            v-if="whatWatch === 'Film'"
          )
            span Hours 
            input.time-input(
               type="number"
              v-model="filmHours"
            )

            span Minutes
            input.time-input(
              type="number"
              v-model="filmMinutes"
            )

          .total-time__serial(
            v-if="whatWatch === 'Serial'"
          )
            span.time-title How many season?
            input.time-input(
              type="number"
              v-model="serialSeason"
            )
            span.time-title How many series?
            input.time-input(
              type="number"
              v-model="serialSeries"
            )
            span.time-title How long is one series? (minutes)
            input.time-input(
              type="number"
              v-model="serialSeriesMinutes"
            )
        .tag-list 
        .ui-tag__wrapper
          .ui-tag
            span.tag-title {{ whatWatch }}
            span.button-close
</template>

<script>
export default {
  data() {
    return {
      taskTitle: "",
      taskId: 3,
      taskDescription: "",
      whatWatch: "Film",

      filmHours: 1,
      filmMinutes: 30,
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,
    };
  },
  methods: {
    newTask() {
      if (this.taskTitle === "") {
        return;
      }
      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false,
      };

      console.log(task);

      //reset
      this.taskId += 1;
      this.taskTitle = "";
      this.taskDescription = "";
    },

    getHoursAndMinutes(minutes) {
      let hours = Math.trunc(minutes / 60);
      let min = minutes % 60;
      return hours + " Hours " + min + " Minutes";
    },
  },
  compudet: {
    filmTime() {
      let min = this.filmHours * 60 + this.filmMinutes;
      return this.getHoursAndMinutes(min);
    },
    serialTime() {
      let min =
        this.serialSeason * this.serialSeries * this.serialSeriesMinutes;
      return this.getHoursAndMinutes(min);
    },
  },
};
</script>

<style lang="stylus" scoped>
.option-list
 display flex
 .what-watch
   margin-right .5rem
 label
   margin-right 1.5rem
   &:last-child
     margin-right 0

.total-time
  margin-bottom 20px

.time-title
  display block
  margin-bottom 6px

.time-input
  max-width 80px
  margin-right 10px
</style>
