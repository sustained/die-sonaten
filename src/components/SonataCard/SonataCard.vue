<template>
  <div :class="classList" @click="expandCard">
    <div>
      <sonata-card-header
        :expanded="expanded"
        :number="number"
        :opus="opus"
        :nickname="nickname"
      >
      </sonata-card-header>

      <sonata-card-body
        :expanded="expanded"
        :opus="opus"
        :musical-key="musicalKey"
      />
    </div>
  </div>
</template>

<script>
import SonataCardHeader from "./SonataCardHeader";
import SonataCardBody from "./SonataCardBody";

export default {
  props: ["sonata"],

  components: {
    SonataCardHeader,
    SonataCardBody
  },

  data() {
    return {
      expanded: false
    };
  },

  methods: {
    expandCard() {
      this.expanded = !this.expanded;
    }
  },

  computed: {
    /*
      The key is stored as e.g. `["C", "minor"]` so we join it and we 
      also need to convert the accidentals to the proper characters.
    */
    musicalKey() {
      return this.sonata.key
        .join(" ")
        .replace(/[b]/g, "♭")
        .replace(/[s]/g, "♯");
    },

    /*
      The number of the sonata within the entire set of sonatas (1-32).

      https://en.wikipedia.org/wiki/Template:Beethoven_piano_sonatas
    */
    number() {
      return this.sonata.number;
    },

    /*
      The opus and the cardinal number are stored together in `opus` e.g. `[10, 2]`.

      https://en.wikipedia.org/wiki/Opus_number
    */
    opusNumber() {
      return `Op. ${this.sonata.opus[0]}`;
    },

    /*
      The opus and the cardinal number are stored together e.g. `[10, 2]`.

      Most opera (fun fact - opera is the plural form of opus) have a cardinal number
      (e.g. Opus 27, No. 1 - Piano Sonata No. 13 in E-flat major) but some do not.
    */
    cardinalNumber() {
      if (this.sonata.opus[1]) {
        return `No. ${this.sonata.opus[1]}`;
      }

      return null;
    },

    /*
      The opus number and the cardinal number (if it exists).
    */
    opus() {
      const result = [this.opusNumber];

      if (this.cardinalNumber) {
        result.push(this.cardinalNumber);
      }

      return result.join(" ");
    },

    /*
      How long does it take an average pianist to finish the piece.
    */
    averageDuration() {
      return this.sonata.duration === "Unknown"
        ? this.sonata.duration
        : `${this.duration} mins`;
    },

    /*
      The nickname of the piece, if it has one, or null.
    */
    nickname() {
      return this.sonata.nickname;
    },

    /*
      Which classname corresponds to the musical key.
    */
    classForKey() {
      return [
        this.sonata.key[0].replace("#", "Sharp").replace("b", "Flat"),
        this.sonata.key[1].replace("minor", "Minor").replace("major", "Major")
      ].join("");
    },

    /*
      The list of classes to apply.
    */
    classList() {
      return [
        "card",
        {
          "card--expanded": this.expanded
        },
        `card--${this.classForKey}`
      ];
    }
  }
};
</script>

<style lang="scss"></style>
