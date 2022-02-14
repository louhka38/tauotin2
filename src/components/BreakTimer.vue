<template>
    <div class="static bg-blue-100 p-4 border-round">
      <div class="timeDisplay">
        <h3>Taukoa jäljellä:</h3>
        <span id="countdown">{{ breakTimerDisplay() }}</span><br>
        <Button v-if="breakTimerIsRunning" label="Pause" class="p-button-rounded p-button-danger" @click="pauseBreakTimer"/>
        <Button v-if="!breakTimerIsRunning" label="Start" class="p-button-rounded p-button-success" @click="runBreakTimer"/>
        <Button label="Takaisin" class="p-button-rounded p-button-warning" @click="returnToSetup"/>
      </div>  
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'BreakTimer',
  data() {
    return {
      breakTimeLeft: 0,
      breakMinutesLeft: 0,
      breakSecondsLeft: 0,
      breakTimeLeftPretty: ''
    }
  },
  computed: {
    ...mapState([ "breakTimeLeft" , "breakTimerIsRunning" ]),
    ...mapGetters([ "getBreakTimeLeft" ])
  },
  methods: {
    breakTimerDisplay() {
      this.breakTimeLeft = this.getBreakTimeLeft;
      this.breakMinutesLeft = Math.floor(this.breakTimeLeft % 3600 / 60);
      this.breakSecondsLeft = Math.floor(this.breakTimeLeft % 60);
      this.breakTimeLeftPretty = ( (this.breakMinutesLeft < 10) ? "0" : "" ) + this.breakMinutesLeft + ":" + ( (this.breakSecondsLeft < 10) ? "0" : "" ) + this.breakSecondsLeft;
      return this.breakTimeLeftPretty

    },
    ...mapMutations([ "returnToSetup" , "pauseBreakTimer" ]),
    ...mapActions([ "runBreakTimer" ])
  },
  mounted() {
    this.breakTimeLeft = this.getBreakTimeLeft;
  },
  watch: {
    workTimeLeft() {
      this.breakTimeLeft = this.getBreakTimeLeft;
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#countdown {
  font-size: 48px;
  margin: 20px 0 20px 0;
}
</style>