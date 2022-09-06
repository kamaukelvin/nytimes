<template>
  <div class="flex mb-5 border-b-2 border-slate-100 pb-5">
    <div class="pr-2 flex-1">
      <h4
        class="font-semibold mb-2 text-sm leading-tight sm:leading-normal hover:text-emerald-600"
      >
        <a href="#">{{ title }}</a>
      </h4>
      <p class="text-sm mt-0">
        {{ truncate(abstract,6) }}
      </p>
      <small class="pt-2 text-xs text-emerald-600 uppercase">{{
        section
      }}</small>
    </div>
    <img :src="image" alt="thumbnail" class="w-24 object-cover h-24" />
  </div>
</template>

<script>
import { truncate } from "../../utils";

export default {
  name: "SideNewsCard",
  components: {},
  data() {
    return {
      truncate,
    };
  },

  props: {
    title: String,
    abstract: String,
    image: String,
    section: String,
  },
};
</script>

<style scoped></style>
