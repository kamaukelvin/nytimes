<template>
  <NavBar />
  <div class="container md:mx-auto">
    <h1
      class="text-center mt-9 text-3xl font-extrabold text-gray-900 dark:text-black md:text-3xl lg:text-4xl"
    >
      The Spirit of
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >
        Current Events.</span
      >
    </h1>
    <p
      class="mb-16 text-center text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400"
    >
      Journalism that is independent, honest, and dignified.
    </p>

    <!-- main news section -->
    <section>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div class="lg:col-span-3">
          <div class="bg-white h-72 mb-8">
            <h2 class="font-bold text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              sequi itaque saepe eos.
            </h2>
            <img src="" alt="thumbnail" />
          </div>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
            <div class="lg:col-span-1">
              <div class="p-5">
                <div class="border-b-4 border-neutral-600 mb-8">
                  <h4
                    class="font-semibold mb-2 text-sm md:text-xl uppercase leading-tight sm:leading-normal"
                  >
                    Trending
                  </h4>
                </div>
                <CategoryCard
                  v-for="article in trendingStories"
                  :key="article.short_url"
                  :image="
                    article?.media &&
                    article?.media[0]?.['media-metadata'][0]?.url
                  "
                  :title="article?.title"
                />
                <CategoryCard category="Sports" />
                <CategoryCard category="Lifestyle" />
                <CategoryCard category="Lifestyle" />
              </div>
            </div>
            <div class="lg:col-span-3">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
                <div class="lg:col-span-2"><NewsCard /></div>
                <div class="lg:col-span-2"><NewsCard /></div>
                <div class="lg:col-span-4">
                  <div class="bg-white h-96">Advert here</div>
                </div>
                <div class="lg:col-span-2"><NewsCard /></div>
                <div class="lg:col-span-2"><NewsCard /></div>
                <div class="lg:col-span-2"><NewsCard /></div>
              </div>
            </div>
          </div>
        </div>
        <!-- side news start -->
        <div class="bg-[#f5f5f5] px-5 py-5">
          <div class="border-b-4 border-neutral-600 mb-8">
            <h4
              class="font-semibold mb-2 text-sm md:text-xl uppercase leading-tight sm:leading-normal"
            >
              Top News
            </h4>
          </div>
          <NewsCard
            :date="stories[0]?.created_date"
            :abstract="stories[0]?.abstract"
            :image="stories[0]?.multimedia[0]?.url"
            :title="stories[0]?.title"
            :section="stories[0]?.section"
          />
          <div class="max-w-lg mx-auto my-12">
            <Pagination
              :total-pages="totalPages"
              :total="stories.length"
              :per-page="perPage"
              :current-page="currentPage"
              :has-more-pages="hasMorePages"
              @pagechanged="showMore"
            >
            </Pagination>
          </div>

          <SideNewsCard
            v-for="article in stories"
            :key="article.short_url"
            :section="article?.section"
            :abstract="article?.abstract"
            :image="article?.multimedia && article?.multimedia[0]?.url"
            :title="article?.title"
          />
        </div>
        <!-- side news end-->
      </div>
    </section>
    <!-- main news section end -->
  </div>
</template>

<script>
import {
  CategoryCard,
  SideNewsCard,
  NavBar,
  NewsCard,
  Pagination,
} from "@/components";
import axios from "axios";

export default {
  name: "LandingPage",
  components: {
    CategoryCard,
    SideNewsCard,
    NavBar,
    NewsCard,
    Pagination,
  },
  data() {
    return {
      stories: [],
      trendingStories: [],
      page: 1,
      totalPages: 4,
      total: 40,
      perPage: 10,
      currentPage: 1,
      hasMorePages: true,
    };
  },

  methods: {
    async fetchStories() {
      try {
        let res = await axios.get(
          `${process.env.VUE_APP_ENDPOINT}/home.json?api-key=${process.env.VUE_APP_API_KEY}`
        );

        this.stories = res.data.results;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTrending() {
      try {
        let res = await axios.get(
          `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.VUE_APP_API_KEY}`
        );

        this.trendingStories = res.data.results;
      } catch (err) {
        console.log(err);
      }
    },
    showMore(page) {
      this.page = page;
      this.currentPage = page;
    },
  },

  async mounted() {
    await this.fetchStories();
    await this.fetchTrending();
  },
};
</script>

<style></style>
