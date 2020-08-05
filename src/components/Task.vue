<template lang="pug">
.content-wrapper
  section
    .container
      .task-item__header
        h1.ui-title-1 Task
        .buttons-list
          .button.button--round.button-default(@click="filter = 'active'") Active
          .button.button--round.button-default(@click="filter = 'completed'") Completed
          .button.button--round.button-default(@click="filter = 'all'") All
  section
    .container
      .task-list
        .task-item(
          v-for="task in tasksFilter",
          :key="task.id",
          :class="{ completed: task.completed }"
        )
          .ui-card.ui-card--shadow
            .task-item__info
              .tasl-item__main-info
                span.ui-label.ui-label--light {{ task.whatWatch }}
                span Total Tome: {{ task.time }}
              span.button-close
            .task-item__content
              .task-item__title
                .ui-checkbox-wrapper
                  input.ui-checkbox(type="checkbox", v-model="task.completed")
                span.ui-titile-3 {{ task.title }}
              .task-item__body
                p.ui-text-regular {{ task.description }}
              .task-item__footer
                .tag-list 
                  .ui-tag__wrapper(v-for="tag in task.tags", :key="tag.title")
                    .ui-tag.active
                      span.tag-title {{ tag.title }}
                      span.button-close
</template>

<script>
export default {
  data() {
    return {
      filter: "active",
    };
  },
  computed: {
    tasksFilter() {
      if (this.filter === "active") {
        return this.$store.getters.taskNotCompleted;
      } else if (this.filter === "completed") {
        return this.$store.getters.taskCompleted;
      } else if (this.filter === "all") {
        return this.$store.getters.tasks;
      }
      return this.filter === "active";
    },
  },
};
</script>

<style lang="stylus" scoped>
.task-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .button {
    margin-right: 8px;
  }

  .ui-title-1 {
    margin-bottom: 0;
  }
}

.task-item {
  margin-bottom: 20px;

  .ui-checkbox:checked:before {
    border-color: #909399;
  }

  &.completed {
    .ui-titile-3, .ui-text-regular, .ui-tag {
      text-decoration: line-through;
      color: #909399;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.ui-label {
  margin-right: 8px;
}

.task-item__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.button-close {
  width: 20px;
  height: @width;
}

.task-item__title {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
}

.ui-title-3 {
  margin-bottom: 0;
}

.ui-checkbox-wrapper {
  margin-right: 8px;
}
</style>
