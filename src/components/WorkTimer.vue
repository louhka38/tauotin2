<template>
    <div class="static bg-blue-100 p-4 border-round">
      <div class="timeDisplay">
        <h3>Seuraavaan taukoon:</h3>
        <span id="countdown">{{ workTimerDisplay() }}</span><br>
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
/*.timeDisplay {
    margin: 0 auto;
    padding: 50px;
    display: block;
    max-width: 500px;
    width: 100%;
    text-align: center;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 10px -5px #909090;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}*/

#countdown {
  font-size: 48px;
  margin: 20px 0 20px 0;
}
</style>