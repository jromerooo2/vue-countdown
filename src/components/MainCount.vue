<template>
  <div class="background-marijuana">

    <div class="main-container"> 
     
                <h1 class="text-center font-bold text-4xl sm:text-5xl z-20 text-white 		"><span class="text-purple-300 tracking-widest"> Simplest</span> &  <span class="text-yellow-400 tracking-widest">Funniest</span></h1> <h1 class="text-center font-bold text-4xl sm:text-5xl z-20 text-white mt-2">Website Ever!</h1>

                <div class=" flex flex-wrap flex-col content-center mt-12 z-20">
                    <a href="#counter" v-smooth-scroll  class="text-center hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-black hover:border-yellow-500 rounded-full w-64">
                        Go To Counter
                       <svg xmlns="http://www.w3.org/2000/svg" 
                      style="display:block;margin:auto; margin-top:4px"
                       class="icon icon-tabler icon-tabler-arrow-down" width="34" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="18" y1="13" x2="12" y2="19" />
                        <line x1="6" y1="13" x2="12" y2="19" />
                      </svg>
                    </a>

                </div>
                      <div class="break-all" style="position:relative; left:50%; color:#fff;transform: translateX(-50%);">
         Coded with ❤️ and a lot of ☕ By <a class="text-blue-200" href="https://github.com/jromerooo2">Juan Romero</a>
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

  }
}
</script>


