<template>
  <h3>Asetukset</h3>
  <div class="flex justify-content-center flex-wrap">
    <div class="grid p-fluid">
    
      <div class="static bg-blue-100 p-4 border-round">
        <h4>Työn kesto</h4>
        <label for="workMinutesInput" style="display: block">Minuuttia:</label>
        <InputNumber  id="workMinutesInput" v-model="workTimeInput" mode="decimal" showButtons buttonLayout="vertical" style="width:3rem"
        decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="0" :max="240"/>
      </div>

      <div class="static bg-blue-100 p-4 border-round">
        <h4>Tauon kesto</h4>
        <label for="breakMinutesInput" style="display: block">Minuuttia:</label>
        <InputNumber id="breakMinutesInput" v-model="breakTimeInput" mode="decimal" showButtons buttonLayout="vertical" style="width:3rem"
        decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="0" :max="240"/>
      </div>
    </div>
  </div>
  <div style="margin-top:25px;">
      <Button label="OK" class="p-button-rounded p-button-success" @click="startTimer"/>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'SetupTimer',
  data() {
    return {
      workTimeInput: 0,
      breakTimeInput: 0,
    }    
  },
  computed: {
    ...mapState(["workTimeChosen", "breakTimeChosen"]),
    ...mapGetters(["getWorkTime", "getBreakTime"])
  },
  methods: {
    ...mapActions(["runWorkTimer"]),
    ...mapMutations(["initiateWorkTimer", "initiateBreakTimer"]),
    startTimer() {
      this.initiateWorkTimer(this.workTimeInput);
      this.initiateBreakTimer(this.breakTimeInput);
      this.runWorkTimer();
    }
  },
  mounted() {
    this.workTimeInput = this.getWorkTime;
    this.breakTimeInput = this.getBreakTime;
    console.log(this.getWorkTime)
  },
  watch: {
    workTimeChosen() {
      this.workTimeInput = this.getWorkTime;
    },
    breakTimeChosen() {
      this.breakTimeInput = this.getBreakTime;
    }
  } 
}
</script>


<style scoped>

</style>
