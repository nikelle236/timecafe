<template>
<div>
  <section class="image-gallery">
    <div class="image" v-for="photo in photos" v-bind:key="photo._id">
      <h2 class="photoTitle">{{photo.title}}</h2>
      <img :src="photo.path" />
      <div class="photoInfo">
        <p class="photoDescription">{{photo.description}}</p>
        <div class="adoptInfo">
          <p class="numAvailable">Available: {{photo.numDinos}}</p>
          <h2 class="price">${{photo.donation}}/mo</h2>
          <button class="adopt" @click="showNamer(photo._id)"> Adopt</button>
        </div>
        <button class="changeNum" @click="showNumChange(photo._id, photo.dinoName)" v-if="user && user.isAdmin===true">Change Available</button>
      </div>
    </div>
    <namer :photoID="photoID" :show="show" @close="close" @nameFinished="nameFinished" />
    <change-num :dinoName="dinoName" :photoID="photoID" :show="showNum" @close="closeNum" @nameFinished="numFinished" />
  </section>
</div>
</template>


<script>
import Namer from '@/components/Namer.vue';
import ChangeNum from '@/components/ChangeNum.vue';
export default {
  name: 'ImageGallery',
  components: {
    Namer,
    ChangeNum,
  },
  props: {
    photos: Array
  },
  data() {
    return {
      show: false,
      photoID: "",
      error: '',
      dinoName: "",
      showNum: false,
    }
  },
  methods: {
    close() {
      this.show = false;
    },
    closeNum() {
      this.showNum = false;
    },
    showNamer(photoID) {
      this.show = true;
      this.photoID = photoID;
    },
    showNumChange(photoID, dinoName) {
      this.showNum = true;
      this.dinoName = dinoName;
      this.photoID = photoID;
    },
    async nameFinished() {
      this.show = false;
      this.$emit('nameFinished');
    },
    async numFinished() {
      this.showNum = false;
      this.$emit('nameFinished');
    },
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
}
</script>

<style scoped>
.photoInfo {
  display: inline-block;
}

.adoptInfo {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}

.numAvailable {
  text-align: center;
  margin-bottom: 0px;
  padding-top: 8px;
}

.photoTitle {
  text-align: center;
  font-size: 18px;
  margin-bottom: 0;
}

.price {
  background-color: #a9b7cc;
  color: #434e80;
  text-align: center;
  margin: 0;
  padding-top: 5px;
  font-size: 18px;
}

.adopt {
  background-color: #434e80;
  color: white;
  font-size: 20px;
}

.photoInfo p {
  margin-top: 0px;
  font-size: 13px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1em;
  display: grid;
  margin-top: 15px;
}

.image {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  display: inline-block;
  max-width: 300px;
  min-width: 286px;
  background-color: #e3e3e3;
}

.image img {
  width: 100%;
}

@media only screen and (min-width: 1501px) {
  .image-gallery {
    grid-template-columns: 25% 25% 25% 25%;
  }
}

@media only screen and (max-width: 1500px) and (min-width: 1025px) {
  .image-gallery {
    grid-template-columns: 33% 33% 33%;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 700px) {
  .image-gallery {
    grid-template-columns: 50% 50%;
  }
}
</style>