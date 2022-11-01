<template>
  <div class="admin-settings">
    <button
      class="admin-settings__toggle admin-button"
      :class="isOpen ? 'admin-settings__toggle_opened' : ''"
      @click="onClick"
    >
      <span class="mif-equalizer admin-settings__icon"></span>
    </button>
    <div v-show="isOpen" class="admin-settings__container">
      <button class="admin-settings__toggler">123</button>
      <button class="admin-settings__toggler">123</button>
      <button class="admin-settings__toggler">123</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onClick() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-settings {
  position: absolute;
  right: calc(var(--gutter) * 1.3);
  top: calc(var(--gutter) * 1.3);
  width: calc(var(--gutter) * 3);
  height: calc(var(--row-size) / 2);
  display: flex;
  justify-content: center;
  &__toggle {
    opacity: 0.1;
    &:hover,
    &_opened {
      opacity: 1;
    }
  }
  &__icon {
    &:before {
      color: white;
      font-size: calc(var(--gutter) * 1.3);
    }
  }
  &__container {
    height: calc(var(--row-size) * 1);
    width: calc(var(--row-size) * 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #1d1d1d;
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1000;
  }
  &__toggler {
    width: calc(var(--row-size) * 1);
    height: calc(var(--row-size) / 4);
    border: 2px solid #00aba9;
    color: white;
    background: none;
  }
}

.admin-button {
  background: none;
  border: none;
  outline: none;
}
</style>
