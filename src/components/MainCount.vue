<template>
  <div class="background-marijuana">

    <div class="main-container"> 
     
                <h1 class="text-center font-bold text-4xl sm:text-5xl z-20 text-white">Simple & Fun!</h1>

                <div class=" flex flex-wrap flex-col content-center mt-12 z-20">
                    <button @click="sendCounter()" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Go To Counter
                    </button>
                    <p class="text-center text-white mt-5">Coded with ❤️ and a lot of ☕ By <a class="text-blue-200" href="https://github.com/jromerooo2">Juan Romero</a></p>
                </div>


      </div>

    
  </div>
</template>
<script>

  export default {
    name: 'MainCount',
  data(){
    return{
    clickedCounter : 1
    }
  }, 
  methods: {
    
    sendCounter(){
      
        this.clickedCounter++;
        let mod = this.clickedCounter % 2;
        
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


