<template>
  <div class="p-2"> 
    <h1>CreateParent</h1>  
    <input type="text" v-model="parentName" class="form-control">
    <div class="pt-2">
      <button @click="buttonCancel" class="btn btn-outline-secondary me-2">Cancel</button>
      <button @click="buttonSave" class="btn btn-success">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){   
    return {
        parentName: ""
    } 
  },
  methods:{
    buttonCancel(){      
      this.$router.push('/');
    },
    buttonSave(){
      const newId = this.$store.getters.newId;
      const newParent = {
        id: newId,
        name: this.parentName        
      };
      this.$store.dispatch('addParent', newParent);
      this.$router.push('/');
    }
  }
}
</script>
