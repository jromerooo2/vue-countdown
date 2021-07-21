<template>
  <div id="counter" >
    <div class="main-container">
      <div class="flex justify-center	space-x-6">
        <h1 class="font-bold text-left text-3xl">Hour</h1>
        <h1 class="font-bold text-left text-3xl">Minutes</h1>
        <h1 class="font-bold text-center text-3xl">Seconds</h1>
      </div>
      <div class="flex  justify-center space-x-24 ">
        <h1 class="font-bold text-left text-3xl">{{ hour }}</h1>
        <h1 class="font-bold text-left text-3xl">{{ minutes }}</h1>
        <h1 class="font-bold text-center text-3xl">{{ seconds }}</h1>
      </div>
      <div class=" flex flex-wrap flex-col content-center mt-12 z-20">
        <button
          v-on:click="setCounterInterval();"
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
              <template v-if="!isClicked">Start Counter</template>
              <template v-else>Stop Counter</template>
        </button>
      </div>
    
    </div>

  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      hour: 0,
      seconds: 0,
      timer: null,
      isClicked: false,
      minutes: 0,
      defaultHour:new Date().getHours(),
      defaultMinute:new Date().getMinutes()
    };
  },
  methods: {
    setCounterInterval() {

      if (!this.isClicked) {
        this.isClicked = true;
         this.timer = setInterval(() => {
            if (this.minutes >= 60) {
              this.minutes = 0;
              this.hour++;
            }
            if (this.seconds >= 60) {
              this.seconds = 0;
              this.minutes++;
            } else {
              this.seconds++;
            }
      }, 1000);

    }
    else{
      clearInterval(this.timer);
      this.isClicked = false;

      //!! important to debug
      // alert('Timer is already running');
    }

    },
  },
};
</script>

