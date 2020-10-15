<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        eventBus: new Vue()
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0;
        }
      },
    },
    mounted() {
      this.$children.forEach(v=>{
        if (v.$options.name === 'g-tabs-head'){
          v.$children.forEach(v=>{
            if (v.name===this.selected){
              this.eventBus.$emit('update:selected', this.selected, v);
            }
          })
        }
      })

    }
  };
</script>
<style lang="scss" scoped>
  .tabs {

  }
</style>