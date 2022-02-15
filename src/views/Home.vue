<template>
  <div class="container">
    <div id="kokoUI" class="justify-content-center flex">
      <div class=" justify-content-center static p-4 border-round" style="min-width: 300px; max-width: 800px;">
        <h1>Tauotin</h1>
        <img v-if="viewDisplayed == 'setupTimer'" alt="Tauotin logo" src="../assets/logo_setup.svg">
        <img v-if="viewDisplayed == 'workTimer'" alt="Tauotin logo" src="../assets/logo_work.png">
        <img v-if="viewDisplayed == 'breakTimer'" alt="Tauotin logo" src="../assets/logo_break.svg">
        <div id="vaihtuva">
          <setup-timer v-if="viewDisplayed == 'setupTimer'" />
          <work-timer v-if="viewDisplayed == 'workTimer'" />
          <break-timer v-if="viewDisplayed == 'breakTimer'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SetupTimer from '@/components/SetupTimer.vue'
import WorkTimer from '@/components/WorkTimer.vue'
import BreakTimer from '@/components/BreakTimer.vue'

export default {
  name: 'Home',
  components: {
    SetupTimer,
    WorkTimer,
    BreakTimer,

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
#kokoUI {
  font-family: 'Montserrat', sans-serif;
}
#vaihtuva {
  background-color: #acd0c0;
  border-width: 5px;
  border-radius: 6px;
  border-style: outset;
  border-color: #d9b44a;
}
</style>
