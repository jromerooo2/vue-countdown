<template>
    <div id="counter">
        <div class="full-height">
            <div class="flex justify-center	space-x-6">
                        <h1 class="font-bold text-left text-3xl">Hour</h1>
                        <h1 class="font-bold text-left text-3xl">Minutes</h1>
                        <h1 class="font-bold text-center text-3xl">Seconds</h1>

            </div>
             <div class="flex  justify-center space-x-24 ">
                        <h1 class="font-bold text-left text-3xl" >{{hour}}</h1>
                        <h1 class="font-bold text-left text-3xl" >{{minutes}}</h1>
                        <h1 class="font-bold text-center text-3xl" >{{seconds}}</h1>
                

            </div>
        </div>



    </div>
</template>

<script>
  export default {
    name: 'Counter',
    props:['clicked'],
  data(){
    return{
    hour: 0,
    seconds : 0,
    minutes: 0
    }
  },  
  methods:{

setCounterInterval(){
               setInterval(() => {
         if (this.minutes >= 60) {
             this.minutes = 0;
             this.hour++;
         }
         if (this.seconds >= 60) {
             this.seconds = 0;
             this.minutes++;
         }
         else{
             this.seconds++;
            //alert(this.seconds)
         }

            
        }, 1000)
      }
  },

}
</script>
<style>
 .full-height{
   height: 100vh;
 } 

</style>