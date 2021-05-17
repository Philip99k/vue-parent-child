<template>  
    <p>Anzahl der Frauen: {{ numberOfWoman }}</p>
    <p>Anzahl der Männer: {{ numberOfMan }}</p>   
     <p>Prozentsatz der Frauen: {{ avgOfWoman.toFixed(2)}}%</p>
    <p>Prozentsatz der Männer: {{ avgOfMan.toFixed(2)}}%</p>               
</template>

<script>
export default {
  name: "GenderInfo",  
  computed :{
    numberOfMan(){        
        return  this.$store.getters.numberOfMan;  
    },
    numberOfWoman(){        
        return  this.$store.getters.numberOfWoman;  
    },
    avgOfMan(){        
        return  (this.$store.getters.numberOfMan / this.$store.getters.numberOfParents)*100;  
    },
    avgOfWoman(){        
        return  (this.$store.getters.numberOfWoman / this.$store.getters.numberOfParents)*100;  
    }
  }
};
</script>

<style scoped>
p {
  background-color: greenyellow;
  color: black;
  padding: 0.2em 0.5em;
  margin-top: 0.2em;
}
</style>