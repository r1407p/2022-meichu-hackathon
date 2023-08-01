<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Card/>
  <Card_Title/>
  <Filter/>
  <Link/>
  <Project_Intro/>
  <temp/>
  <Review/>
  
</template>

<script>
import year from './components/year.vue'
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Team/Card.vue'
import Card_Title from './components/Team/Card_Title.vue'
import Filter from './components/Team/Filter.vue'
import Link from './components/Team/Link.vue'
import Project_Intro from './components/Team/Project_Intro.vue'
import Review from './components/Team/Review.vue'
import temp from './components/Team/temp.vue'

export default {
  name: 'App',
  components: {
    year,
    temp,
    Card,
    Card_Title,
    Filter,
    Link,
    Project_Intro,
    Review,
    HelloWorld
  }
}
</script>

<style>
.temp{
  background:#000000;
  display:flex;
  justify-content:space-around;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
