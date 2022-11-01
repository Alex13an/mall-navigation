<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { prefixes, languages, keyboardConfig } from '../config/keyboard';

export default {
  name: 'SimpleKeyboard',
  props: {
    keyboardClass: {
      default: 'simple-keyboard',
      type: String,
    },
    input: {
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      ...keyboardConfig,
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
    });
  },
  methods: {
    onChange(input) {
      this.$emit('onChange', input);
    },
    onKeyPress(button) {
      this.$emit('onKeyPress', button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === '{tab}') this.handleTab();
      if (button === '{shift}' || button === '{lock}') this.handleShift();
    },
    handleShift() {
      const currentLayout = this.keyboard.options.layoutName;
      const currentPrefix = prefixes.find((p) => currentLayout.includes(p));
      const layoutName = currentLayout.replace(currentPrefix, prefixes.filter((p) => p !== currentPrefix)[0]);

      this.keyboard.setOptions({
        layoutName,
      });
    },
    handleTab() {
      const currentLayout = this.keyboard.options.layoutName;

      const currentLang = languages.find((l) => currentLayout.includes(l));
      const lang = languages.filter((l) => l !== currentLang)[0];
      const langLabel = currentLang[0].toLowerCase() + currentLang.slice(1);
      const layoutName = currentLayout.replace(currentLang, lang);

      this.keyboard.setOptions({
        layoutName,
        display: {
          '{tab}': langLabel,
          '{enter}': 'enter',
        },
      });
    },
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    },
  },
};
</script>

<style scoped>
.simple-keyboard {
  color: black;
  max-height: calc(var(--row-size) * 2.2);
  grid-area: keyboard;
}
</style>
