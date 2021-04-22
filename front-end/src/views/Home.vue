<template>
  <div class="home">
    <div class="container">
      <p>Thank you for visiting the Time Traveler's Cafe non-profit for the preservation of history.
        As part of our species de-extinction project, this year we will be cryo-podding dinosaurs from the 
        Mesozoic Era and returning them to present time for study. Housing dinosaurs in a modern enviroment
        is expensive; please consider symbolicly adopting one of our relocated dinos to help
        fund this project. We'll even let you name it! 
      </p>
      <hr>
    </div>
    <AllDinos v-if="user" />
    <image-gallery v-else :photos="photos" />
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import AllDinos from '@/components/AllDinos.vue';
import ImageGallery from '@/components/ImageGallery.vue';
export default {
  name: 'Home',
  components: {
    ImageGallery,
    AllDinos,
  },
  data() {
    return {
      photos: [],
      error: '',
    }
  },
  methods: {
    async getPhotos() {
      try {
        let response = await axios.get("/api/photos/all");
        this.photos = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  },
  async created() {
    try {
      this.getPhotos();
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
    margin-bottom: 15px;
  }
</style>

