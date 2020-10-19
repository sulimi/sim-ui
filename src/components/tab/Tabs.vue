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
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn && console.warn('Tabs的子标签应该是TabsHead和TabsBody');
        }
      },
      selectTab() {
        this.$children.forEach(v => {
          if (v.$options.name === 'tabs-head') {
            v.$children.forEach(v => {
              if (v.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, v);
              }
            });
          }
        });
      }
    },
    mounted() {
      this.checkChildren();
      this.selectTab();
    }
  };
</script>
<style lang="scss" scoped>

</style>