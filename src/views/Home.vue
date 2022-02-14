<template>
  <div class="justify-content-center flex">
    <div class="h-screen-10 justify-content-center static bg-blue-200 p-4 border-round" style="min-width: 300px; max-width: 800px;">
      <nav-bar />
      <h1>Tauotin</h1>
      <img v-if="viewDisplayed == 'setupTimer'" alt="Tauotin logo" src="../assets/logo_setup.svg">
      <img v-if="viewDisplayed == 'workTimer'" alt="Tauotin logo" src="../assets/logo_work.png">
      <img v-if="viewDisplayed == 'breakTimer'" alt="Tauotin logo" src="../assets/logo_break.svg">
      <setup-timer v-if="viewDisplayed == 'setupTimer'" />
      <work-timer v-if="viewDisplayed == 'workTimer'" />
      <break-timer v-if="viewDisplayed == 'breakTimer'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SetupTimer from '@/components/SetupTimer.vue'
import WorkTimer from '@/components/WorkTimer.vue'
import BreakTimer from '@/components/BreakTimer.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    SetupTimer,
    WorkTimer,
    BreakTimer,
    NavBar
  },
  computed: {
    ...mapState(["viewDisplayed"])
  },
}
</script>

<style scoped>
img {
  height: 150px;
}
</style>
