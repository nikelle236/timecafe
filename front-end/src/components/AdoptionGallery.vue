<template>
<div>
  <section class="image-gallery">
    <div class="image" v-for="adoption in adoptions" v-bind:key="adoption._id">
      <h2 class="adoptionTitle">{{adoption.photo.title}}</h2>
      <img :src="adoption.photo.path" />
      <div class="adoptionInfo">
        <div class="adoptInfo">
          <p class="dinoName">Name: {{adoption.dinoName}}</p>
          <h2 class="price">${{adoption.photo.donation}}/mo</h2>
          <button class="remove"> Remove</button>
        </div>
      </div>
    </div>
  </section>
</div>
</template>


<script>

export default {
  name: 'AdoptionGallery',
  props: {
    adoptions: Array
  },
  methods: {
    
  }
}
</script>

<style scoped>
.adoptionInfo {
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

.adoptionTitle {
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

.adoptionInfo p {
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