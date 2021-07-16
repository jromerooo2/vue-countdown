<template>
  <div>
    <div class="full-height">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#048c14" fill-opacity="1" d="M0,320L48,314.7C96,309,192,299,288,282.7C384,267,480,245,576,213.3C672,181,768,139,864,117.3C960,96,1056,96,1152,122.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            <h1 class="text-center font-bold text-4xl sm:text-5xl mt-6">Simple & Fun!</h1>

            <div class=" flex flex-wrap flex-col content-center mt-12">
                <button @click="sendCounter()" class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                  Start Counter
                </button>
            </div>
      </div>

    
  </div>
</template>
<script>
  export default {
    name: 'MainCount',
  data(){
    return{
    clickedCounter : 0
    }
  }, 
  methods: {
    
    sendCounter(){
        this.clickedCounter++;
        let mod = this.clickedCounter%2;
        
        if (mod === 0) {
          window.location.hash = "";
          window.location.hash = "counter";
        }
        else
        {
          window.location.hash = "counter";
        }
        
      
      

    }
  }
}
</script>

<style>
 .full-height{
   height: 100vh;
 } 

</style>

