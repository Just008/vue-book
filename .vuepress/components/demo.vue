<template>
  <div>
    <button v-if="showBtn" v-on:click="handleClick">Click Me</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showBtn : true
      }
    },
    methods: {
      handleClick: function (){
        console.log('Clicked')
      }
    }
  }
</script>