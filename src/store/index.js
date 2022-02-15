import { createStore } from 'vuex'

export default createStore({
  state: {

    viewDisplayed: 'setupTimer',

    workTimeChosen: 0,
    workTimeLeft: 0,
    workTimeLeftHolder: 0,
    workTimer: null,
    workEndSound: new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"), 

    breakTimeChosen: 0,
    breakTimeLeft: 0,
    breakTimeLeftHolder: 0,
    breakTimeLeftPretty: '',
    breakTimer: null,
    breakEndSound: new Audio("https://www.soundjay.com/phone/rotary-phone-1-nr5.mp3"),

    // These states exist purely for changing both timers' button status (Start/Stop)
    workTimerIsRunning: false,
    breakTimerIsRunning: false

  },
  mutations: {
    // Mutations for the WorkTimer -component:

    initiateWorkTimer(state, workTime) {
      state.workTimeChosen = workTime;
      state.workTimeLeftHolder = workTime * 60;
      state.workTimeLeft = state.workTimeLeftHolder; 
    },
    pauseWorkTimer(state) {
      state.workTimerIsRunning = false;
      clearInterval(state.workTimer);
      state.workTimer = null;
    },
    // Mutations for the BreakTimer -component:

    initiateBreakTimer(state, breakTime) {
      state.breakTimeChosen = breakTime;
      state.breakTimeLeftHolder = breakTime * 60;
      state.breakTimeLeft = state.breakTimeLeftHolder; 
    },
    pauseBreakTimer(state) {
      state.breakTimerIsRunning = false;
      clearInterval(state.breakTimer);
      state.breakTimer = null;
    },
    

    // Mutation for 'Back'-button, visible in both WorkTimer- & BreakTimer-components.

    returnToSetup(state) {
      clearInterval(state.workTimer);
      clearInterval(state.breakTimer);
      state.workTimer = null;
      state.breakTimer = null;

      
      state.workTimeLeft = 0;
      state.breakTimeLeft = 0;
      state.workTimeLeftPretty = '',
      state.breakTimeLeftPretty = '',
      
      state.workTimerIsRunning = false;
      state.breakTimerIsRunning = false;
      state.viewDisplayed = 'setupTimer';
      
    }
  },
  actions: {

    runWorkTimer({ state, dispatch }) {
      state.viewDisplayed = 'workTimer';
      state.workTimerIsRunning = true;
      if (!state.workTimer) {
        state.workTimer = setInterval( () => {
          if (state.workTimeLeft > 0) {
            state.workTimeLeft--;  
          } else {
            state.workEndSound.play();
            clearInterval(state.workTimer);
            state.workTimer = null;
            dispatch('runBreakTimer');
          }
        }, 1000);
      }
    },
    stopWorkTimer(commit) {
      commit('pauseWorkTimer');
    },
    runBreakTimer({ state, dispatch }) { 
      state.viewDisplayed = 'breakTimer';
      state.breakTimerIsRunning = true;
      if (!state.breakTimer) {
        state.breakTimer = setInterval( () => {
          if (state.breakTimeLeft > 0) {
            state.breakTimeLeft--;  
          } else {
            state.breakEndSound.play();
            clearInterval(state.breakTimer);
            state.breakTimer = null;
            dispatch('runWorkTimer');
          }
        }, 1000);
      }
    }
  },
  getters: {
    getWorkTime(state) {
      return state.workTimeChosen
    },
    getBreakTime(state) {
      return state.breakTimeChosen
    },
    getWorkTimeLeft(state) {
      return state.workTimeLeft
    },
    getBreakTimeLeft(state) {
      return state.breakTimeLeft
    }
  },
  modules: {
  },
})
