<template>
  <div class="overflow-hidden relative mb-5 lg:mb-10">
    <img
      :src="image"
      alt="thumbnail"
      class="w-full object-cover h-24 sm:h-24 md:h-48"
    />

    <h4
      class="font-semibold my-2 text-md md:text-xl lg:text-lg leading-tight sm:leading-normal"
    >
      {{ title }}
    </h4>
    <div class="text-sm">
      {{ abstract }}
    </div>
    <footer class="text-xs flex items-center mt-5">
      <div class="flex-1">
        <p class="leading-none text-blue-500 font-bold uppercase">
          {{ section }}
        </p>
      </div>

      <svg
        class="opacity-75 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="12"
        height="12"
        viewBox="0 0 97.16 97.16"
        style="enable-background: new 0 0 97.16 97.16"
        xml:space="preserve"
      >
        <path
          d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"
        />
        <path
          d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"
        />
      </svg>
      <p class="leading-none text-xs">{{ date }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: String,
    abstract: String,
    section: String,
    image: String,
    date: String,
  },
};
</script>

<style scoped></style>
