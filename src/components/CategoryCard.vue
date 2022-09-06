<template>
  <div class="overflow-hidden mb-5">
    <img :src="image" alt="thumbnail" class="w-full object-cover h-36" />
    <div class="py-4">
      <h4
        class="font-semibold mb-2 text-sm leading-tight sm:leading-normal hover:text-emerald-600"
      >
        <a href="#">{{ title }} </a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  components: {},
  props: {
    image: String,
    title: String,
  },
};
</script>

<style scoped></style>
