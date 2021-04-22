<template>
<div id="app">
  <div class="header">
    <div class="company">
      <router-link to="/">
        <div class="logo">
          <img src="/logo.png">
        </div>
      </router-link>
      <div class="title">
        <p>Time Traveler's Cafe</p>
      </div>
    </div>
    <div class="menu">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
    </div>
  </div>
  <div class="subHeader">
    <div class="subTitle">
      <h1>Dinosaur Detour 2021</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <div class="github">
      <p class="footerText">Nikelle Turner's Github <a href="https://github.com/BYU-CS-260-Winter-2021/lab-4-museum-of-ordinary-objects-nikelle236">Repository</a></p>
    </div>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

.menu {
  float: right;
  margin-left: auto;
  width: 200px;
  padding-top: 25px;
}

.link {
  padding: 10px;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

.header {
  display: block;
  background-color: #434e80;
  color: #ffffff;
}

.company {
  display: inline-flex;
  width: 300px;
  margin-right: 0px;
}

.subHeader {
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #6988b6;
  color: #ffffff;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

.title {
  margin-top: 5px;
}

.title p {
  font-size: 20px;
}

.subTitle h1 {
  text-align: center;
  font-size: 40px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

.footer {
  height: 40px;
  padding: 8px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

img {
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  width: 50px;
}

.github {
  text-align: center;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: #e3e3e3;
}

a:hover {
  text-decoration: none;
  color: #6988b6;
}

a:active {
  text-decoration: none;
  color: #1c223d;
}

@media only screen and (min-width: 1024px) {
  .company {
    padding: 0px 75px 0px 75px;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 1200px) {
  .company {
    padding: 0px 75px 0px 75px;
  }
}

@media only screen and (max-width: 1199px) and (min-width: 604px) {
  .company {
    padding: 0px 50px 0px 50px;
  }
  .content {
    padding: 20px 50px;
  }
}

@media only screen and (max-width: 603px) and (min-width: 438px) {
  .company {
    padding: 0px 10px 0px 10px;
    width: 200px;
  }

  .content {
    padding: 20px 25px;
  }

  img {
    padding-top: 20px;
    padding-right: 10px;
    width: 50px;
  }
}

@media only screen and (max-width: 437px) {
  .company {
    padding: 0px 10px 0px 10px;
    width: 150px;
  }
  img {
    padding-top: 30px;
    padding-right: 10px;
    width: 50px;
  }

  .menu {
    float: right;
    width: 150px;
    padding-top: 50px;
    margin-left: 0px;
  }

  .content {
    padding: 20px 10px;
  }
  .link {
  padding: 5px;
}
}
</style>
