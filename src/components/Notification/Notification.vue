<template>
  <transition name="animate">
    <div
      class="notification"
      v-if="visible">
      <div>
        <icon v-if="type==='success'" name="check-circle" scale="2"></icon>
        <icon v-if="type==='error'" name="times-circle" scale="2"></icon>
        <icon v-if="type==='info'" name="exclamation-circle" scale="2"></icon>
        <div>{{ title }}</div>
        <div>{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  };
  export default {
    data() {
      return {
        visible: false,
        title: '',
        message: '',
        duration: 1200,
        type: '',
        closed: false,
      };
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;
      },
    },
    mounted() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    }
  };
</script>
<style lang="scss">
.notification {
  display: flex;
  align-items: center;
  justify-content: space-around;
	position: fixed;
	width: 100%;
	height: 50px;
	top: 0px;
	box-shadow: 1px 1px 1px #888888;
	background-color: rgba(0,0,0,.6);
  z-index: 80;
	color: white;
	div:first-of-type {
		display: flex;
		// flex-direction: column;
    justify-content: center;
    align-items: center;
		span{
      font-size: 15px;
			margin-left: 50px;
			margin-right: 20px;
		}
		div {
			margin-left: 20px;
		}
	}
}

.animate-enter-active {
	transition: top .5s
}
.animate-leave-active {
  transition: top 1s
}
.animate-enter, .animate-leave-to {
  top: -80px
}

</style>