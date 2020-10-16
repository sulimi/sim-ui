<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" v-show="visible" class="content-wrapper" :class="{['position-'+position]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger">
          <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    data() {
      return {visible: false};
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= 0;
        }
      }
    },
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.toggle);
      } else if (this.trigger === 'hover') {
        this.$refs.popover.addEventListener('mouseenter', this.showContent);
        this.$refs.popover.addEventListener('mouseleave', this.removeEven);
      }
    },
    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.toggle);
      } else if (this.trigger === 'hover') {
        this.$refs.popover.removeEventListener('mouseenter', this.showContent);
        this.$refs.popover.removeEventListener('mouseleave', this.removeEven);
      }
    },
    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs;
        document.body.appendChild(contentWrapper);
        const {top, left, height, width} = triggerWrapper.getBoundingClientRect();
        const {height: cHeight} = contentWrapper.getBoundingClientRect();
        let positions = {
          top: {
            left: left + window.scrollX,
            top: top + window.scrollY
          },
          bottom: {
            left: left + window.scrollX,
            top: top + height + window.scrollY
          },
          left: {
            left: left + window.scrollX,
            top: top - (cHeight - height) / 2 + window.scrollY
          },
          right: {
            left: left + width + window.scrollX,
            top: top - (cHeight - height) / 2 + window.scrollY
          }
        };
        contentWrapper.style.left = positions[this.position].left + 'px';
        contentWrapper.style.top = positions[this.position].top + 'px';
      },
      eventHandler(e) {
        if (this.$refs && (this.$refs.triggerWrapper.contains(e.target) || this.$refs.contentWrapper.contains(e.target))) {
          return;
        }
        this.removeEven();
      },
      showContent() {
        this.visible = true;
        setTimeout(() => {
          this.positionContent();
          document.addEventListener('click', this.eventHandler);
        }, 0);
      },
      removeEven() {
        this.visible = false;
        document.removeEventListener('click', this.eventHandler);
      },
      toggle(even) {
        if (this.$refs.triggerWrapper.contains(even.target)) {
          if (this.visible === true) {
            this.removeEven();
          } else {
            this.showContent();
          }
        }
      }
    },
  };
</script>
<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;

    .trigger {
      display: inline-block;
    }
  }

  .content-wrapper {
    position: absolute;
    border: 1px solid #333;
    background: #fff;
    border-radius: 4px;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.7));
    padding: 0.5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border: 10px solid transparent;
    }

    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      border-bottom: none;

      &::before {
        border-bottom: none;
        top: 100%;
        border-top-color: black;

      }

      &::after {
        border-bottom: none;
        top: calc(100% - 1px);
        border-top-color: white;
      }
    }

    &.position-bottom {
      margin-top: 10px;


      &::before {
        border-top: none;
        bottom: 100%;
        border-bottom-color: black;
      }

      &::after {
        border-top: none;
        bottom: calc(100% - 1px);
        border-bottom-color: white;
      }
    }

    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;


      &::before, &::after {
        border-right: none;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
      }

      &::before {
        border-left-color: black;
      }

      &::after {
        left: calc(100% - 1px);
        border-left-color: white;
      }
    }

    &.position-right {
      margin-left: 10px;


      &::before, &::after {
        border-left: none;
        top: 50%;
        transform: translateY(-50%);
        right: 100%;
      }

      &::before {
        border-right-color: black;
      }

      &::after {
        right: calc(100% - 1px);
        border-right-color: white;
      }
    }


  }

</style>