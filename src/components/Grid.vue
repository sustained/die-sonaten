<template>
  <div class="grid" ref="grid">
    <sonata v-for="sonata in sonatas" :sonata="sonata" :key="sonata.number" />
  </div>
</template>

<script>
import SonataCard from "@/components/SonataCard/SonataCard";
import { wrapGrid } from "animate-css-grid";
import sonatas from "@/services/sonata";

const VALID_EASING_MODES = [
  "linear",
  "easeIn",
  "easeOut",
  "easeInOut",
  "circIn",
  "circOut",
  "circInOut",
  "backIn",
  "backOut",
  "backInOut",
  "anticipate"
];

export default {
  props: {
    stagger: {
      type: [Number, String],
      default() {
        return 0;
      }
    },

    duration: {
      type: [Number, String],
      default() {
        return 600;
      }
    },

    easing: {
      type: String,
      validator(value) {
        return VALID_EASING_MODES.includes(value);
      },
      default() {
        return "easeIn";
      }
    }
  },

  data() {
    return {
      sonatas
    };
  },

  components: { sonata: SonataCard },

  mounted() {
    wrapGrid(this.$refs.grid, {
      easing: this.easing,
      stagger: parseInt(this.stagger),
      duration: parseInt(this.duration)
    });
  }
};
</script>
