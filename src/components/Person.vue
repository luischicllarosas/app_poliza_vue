<template>
  <div>
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="nombre"
        :counter="25"
        label="Nombre"
        required
        :rules="genericRule"
        outlined
        dense
        hide-details
        class="my-3"
      />

      <v-text-field
        v-model="apellidos.paterno"
        :counter="25"
        label="Apellido paterno"
        required
        :rules="genericRule"
        outlined
        dense
        hide-details
        class="my-3"
      />

      <v-text-field
        v-model="apellidos.materno"
        :counter="25"
        label="Apellido materno"
        required
        :rules="genericRule"
        outlined
        dense
        hide-details
        class="my-3"
      />

      <v-btn color="primary" class="mr-4 mt-4" @click="submitPerson">
        Ingresar Persona
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "../plugins/axios";
export default {
  name: "Person",
  data: () => ({
    apellidos: {
      paterno: null,
      materno: null,
    },
    nombre: null,
    genericRule: [(v) => !!v || "Name is required"],
  }),
  methods: {
    async submitPerson() {
      const params = {
        nombre: this.nombre,
        apellido_paterno: this.apellidos.paterno,
        apellido_materno: this.apellidos.materno,
      };
      axios
        .post("person", params)
        .then(() => {
          this.cleanForm();
          this.$store.dispatch("getPersons");
        })
        .catch(console.error);
    },
    cleanForm() {
      this.apellidos.paterno = "";
      this.apellidos.materno = "";
      this.nombre = "";
    },
  },
};
</script>

<style></style>
