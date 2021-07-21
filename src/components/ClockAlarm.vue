<template>
    <div class="main-container ">
            <h1 class="text-center font-bold text-3xl">
                {{defaultHour}} : {{defaultMinute}}: {{defaultSecond}}
             </h1><br>
            
        <h1 class="font-bold text-center text-3xl mt-4">
            <template v-if="!alarmStarted">Select a quantity of <span class="text-green-600">Minutes</span> to set an alarm </template>
            <template v-else>Time Left is: {{minutesToAlarm}} </template></h1>

        <input type="number" v-model="minutesToAlarm" class="mt-6 bg-grey-lighter text-center text-grey-darker py-2 font-normal rounded text-grey-darkest border border-grey-lighter rounded-l-none font-bold">  
                <button
          v-on:click="alarmStart()"
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-4"
        >
          Set Alarm
        </button>
    </div>
</template>

<script>
export default {
    name: 'ClockAlarm',
    data(){
        return{
            defaultHour:new Date().getHours(),
            defaultMinute: new Date().getMinutes(),
            defaultSecond: new Date().getSeconds(),
            minutesToAlarm: 0,
            alarmStarted: false
        }
    },
    created(){
            setInterval(()=>{
                this.defaultHour = new Date().getHours()
                    // alert('is less than 10')
                    this.defaultMinute = new Date().getMinutes()
                
                this.defaultSecond = new Date().getSeconds()
            },1000);
    },
    methods: {
        alarmStart(){
            this.alarmStarted = true;
            let miliSeconds = this.minutesToAlarm * 10000;
            //console.log('Alarma Sonando en : '+this.minutesToAlarm)
            setTimeout(()=>{
                alert('hola')
            }, miliSeconds)
        }

    }
}
</script>