<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: Array,

    },
    data() {
      return {
        eventBus: new Vue(),
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    mounted() {
      this.eventBus.$emit('onSelected', this.selected);
      this.eventBus.$on('addSelected', (name) => {
        let selectedCopy=JSON.parse(JSON.stringify(this.selected))
        if (this.single){
          selectedCopy = [name]
        }else {
          selectedCopy.push(name);
        }
        this.$emit('update:selected', selectedCopy);
        this.eventBus.$emit('onSelected', selectedCopy);
      });
      this.eventBus.$on('removeSelected', (name) => {
        let selectedCopy=JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name);
        selectedCopy.splice(index,1)
        this.$emit('update:selected', selectedCopy);
        this.eventBus.$emit('onSelected', selectedCopy);
      });
    }
  };
</script>
<style lang="scss" scoped>
  .collapse {
    border: 1px solid #ddd;
    border-bottom: none;
    border-radius: 4px;
    width: 100%;
  }
</style>