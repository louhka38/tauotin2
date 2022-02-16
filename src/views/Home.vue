<template>
  <div class="container">
    <div id="wholeUI" class="justify-content-center flex">
      <div class=" justify-content-center static p-4 border-round" style="min-width: 300px; max-width: 800px;">
        <h1>Tauotin</h1>
        <img v-if="viewDisplayed == 'setupTimer'" alt="Tauotin logo" src="../assets/logo_setup.svg">
        <img v-if="viewDisplayed == 'workTimer'" alt="Tauotin logo" src="../assets/logo_work.png">
        <img v-if="viewDisplayed == 'breakTimer'" alt="Tauotin logo" src="../assets/logo_break.svg">
        <div id="changing">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState(["viewDisplayed"])
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
.container {
  display: block;
  margin: auto;
  height: 740px;
  width: 360px;
  background-color: #75b1a9;
  border-width: 5px;
  border-radius: 12px;
  border-style: outset;
  border-color: #d9b44a;
}
img {
  height: 150px;
  margin-bottom: 45px;
}
#wholeUI {
  font-family: 'Montserrat', sans-serif;
}
#changing {
  background-color: #acd0c0;
  border-width: 5px;
  border-radius: 6px;
  border-style: outset;
  border-color: #d9b44a;
}
</style>