<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Task
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
  margin-bottom 17px

.ui-title-3
  margin-bottom 0

.ui-checkbox-wrapper
  margin-right 8px
</style>
