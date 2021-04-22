<template>
<div class="main">
  <div class="options">
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
  </div>
  <adoption-gallery :adoptions="adoptions" />
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
import AdoptionGallery from '@/components/AdoptionGallery.vue';
export default {
  name: 'MyDinos',
  components: {
    AdoptionGallery
  },
  data() {
    return {
      show: false,
      adoptions: [],
      error: '',
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getAdoptions() {
      try {
        this.response = await axios.get("/api/adoptions");
        this.adoptions = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    close() {
      this.show = false;
    },
  },
  created() {
    this.getAdoptions();
    },
}
</script>

<style scoped>
.options {
  display: flex;
  text-align: center;
}

.options h2 {
  font-size: 14px;
  margin-left: auto;
}
</style>