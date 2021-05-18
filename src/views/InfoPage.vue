<template>
  <div class="p-2">  
    <h1>Meine eigene Info Seite</h1>
  </div>
  <div class="p-2">  
    <h3>Anzahl aller Kinder: {{ numberOfChildren }}</h3>
  </div>
  <div class="p-2">  
    <h3>Durchschnittsalter aller Kinder: {{ avgOfChildAge }}</h3>
  </div>
  <div class="p-2">  
    <h3>Gesamtalter aller Kinder: {{ sumOfChildAge }}</h3>
  </div>
  <div class="p-2"> 
    <button @click="buttonBack" class="btn btn-info me-2">Zurück</button>
  </div>
</template>


<script>
export default {
  name: "InfoPage", 
  computed :{
    numberOfChildren(){        
        return  this.$store.getters.numberOfChildren;       
    },
    avgOfChildAge(){        
        return (this.sumOfChildAge / this.numberOfChildren).toFixed(1);  
    },
    sumOfChildAge(){        
        return  this.$store.getters.sumOfChildAge;  
    }
  },
  methods:{
    buttonBack(){      
      this.$router.push('/');
    }
  }
}
</script>