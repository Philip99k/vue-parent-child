<template>
  <div class="p-2">
    <h1>CreateParent</h1>
    <input type="text" v-model="parentName" class="form-control" />
    <br />
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="man"
        value="man"
        v-model="manorwoman"
      />
      <label class="form-check-label" for="man"> Man </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="woman"
        checked
        value="woman"
        v-model="manorwoman"
      />
      <label class="form-check-label" for="woman"> Woman </label>
    </div>
    <span>manorwoman: {{ manorwoman }}</span>
    <br />
    <div class="pt-2">
      <button @click="buttonCancel" class="btn btn-danger me-2">Cancel</button>
      <button @click="buttonSave" class="btn btn-primary">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parentName: "",
      manorwoman: "woman",
    };
  },
  methods: {
    buttonCancel() {
      this.$router.push("/");
    },
    buttonSave() {
      const newId = this.$store.getters.newId;
      const newParent = {
        id: newId,
        name: this.parentName,
        gender: this.manorwoman,
      };
      console.log(this.manorwoman);
      this.$store.dispatch("addParent", newParent);
      this.$router.push("/");
    },
  },
};
</script>
