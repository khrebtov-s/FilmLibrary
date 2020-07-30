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
              span Total Film Times 

            .total-time__serial(
              v-if="whatWatch === 'Serial'"
            )
              span Total Serial Times 
          
          .ui-tag__wrapper
            .ui-tag
              span.tag-title {{ whatWatch }}
              span.button-close
    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.complited }"
          )
            .ui-card.ui-card--shadow
              .task-item__info
                .tasl-item__main-info
                  span.ui-label.ui-label--light {{ task.whatWatch }}
                  span Total Tome:
                span.button-close
              .task-item__content
                .task-item__header
                  .ui-checkbox-wrapper
                    input.ui-checkbox(
                      type='checkbox'
                      v-model="task.completed"
                    )
                  span.ui-titile-3 {{ task.title }}
                .task-item__body
                  p.ui-text-regular {{ task.description }}
</template>

<script>
export default {
  data() {
    return {
      taskTitle: "",
      taskId: 3,
      taskDescription: "",
      whatWatch: "Film",
      tasks: [
        {
          id: "1",
          title: "GrowthBusters: Hooked on Growth",
          description:
            "I directed this documentary challenging the myths linking growth with prosperity and fulfillment. It explores how our beliefs about economic, consumption and population growth prevent rational responses to evidence we’ve outgrown the planet. I’m biased, but this film belongs on the list because of its honesty about overpopulation and exploration of the topic’s taboo. GrowthBusters includes interviews with a host leading thinkers like Paul Ehrlich, William Rees and Herman Daly. It also chronicles my own David vs. Goliath adventures in growthbusting: “My mission is to make it okay to be against growth.”",
          whatWatch: "Film",
          completed: false,
          editing: false,
        },
        {
          id: "2",
          title: "Game of thrones",
          description: "Best serials",
          whatWatch: "Serial",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  methods: {
    newTask() {
      if (this.taskTitle === "") {
        return;
      }
      this.tasks.push({
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false,
      });

      //reset
      this.taskId += 1;
      this.taskTitle = "";
      this.taskDescription = "";
    },
  },
};
</script>

<style lang="stylus" scoped>
.task-item
  margin-bottom 20px
  &:last-child
    margin-bottom 0

.ui-label
  margin-right 8px

.task-item__info
  display flex
  align-items center
  justify-content space-between
  margin-bottom 20px

.button-close
  width 20px
  height @width

.task-item__header
  display flex
  align-items center

.ui-title-3
  margin-bottom 0

.ui-checkbox-wrapper
  margin-right 8px

.task-item__header
  margin-bottom 17px

.option-list
  display flex
  .what-watch
    margin-right .5rem
  label
    margin-right 1.5rem
    &:last-child
      margin-right 0
</style>
