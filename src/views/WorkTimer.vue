<template>
  <div class="static p-4 border-round">
    <div class="timeDisplay">
      <h3>Seuraavaan taukoon:</h3>
      <span id="countdown">{{ workTimerDisplay() }}</span><br><br>
      <Button v-if="workTimerIsRunning" label="Pause" class="p-button-rounded p-button-danger" @click="pauseWorkTimer"/>
      <Button v-if="!workTimerIsRunning" label="Start" class="p-button-rounded p-button-success" @click="runWorkTimer"/>
      <Button label="Takaisin" class="p-button-rounded p-button-warning" @click="returnToSetup"/>
    </div>  
  </div> 
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'WorkTimer',
  data() {
    return {
      workTimeLeft: 0,
      workMinutesLeft: 0,
      workSecondsLeft: 0,
      workTimeLeftPretty: ''
    }    
  },
  computed: {
    ...mapState([ "workTimeLeft" , "workTimerIsRunning" ]),
    ...mapGetters(["getWorkTimeLeft"])
  },
  methods: {
    workTimerDisplay() {
      this.workTimeLeft = this.getWorkTimeLeft;
      this.workMinutesLeft = Math.floor(this.workTimeLeft % 3600 / 60);
      this.workSecondsLeft = Math.floor(this.workTimeLeft % 60);
      this.workTimeLeftPretty = ( (this.workMinutesLeft < 10) ? "0" : "" ) + this.workMinutesLeft + ":" + ( (this.workSecondsLeft < 10) ? "0" : "" ) + this.workSecondsLeft;
      return this.workTimeLeftPretty

    },
    ...mapMutations([ "returnToSetup" , "pauseWorkTimer" ]),
    ...mapActions([ "runWorkTimer" ])
  },
  mounted() {
    this.workTimeLeft = this.getWorkTimeLeft;
  },
  watch: {
    workTimeLeft() {
      this.workTimeLeft = this.getWorkTimeLeft;
    },
  } 
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#countdown {
  font-family: "VT323", sans-serif;
  font-size: 100px;
  margin: 20px 0 20px 0;
}
Button {
  margin: 0 10px 0 10px;
}
</style>