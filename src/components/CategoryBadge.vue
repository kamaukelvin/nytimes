<template>
  <span class="bg-pink text-[11px] font-light py-2 px-3.5 uppercase">
   {{category}}
  </span>
</template>

<script>
export default {
  name: "CategoryBadge",
   props: {
    category: String
  }
};
</script>

<style scoped></style>
