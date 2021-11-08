<template>
  <v-app>
    <Navbar />

    <v-main>
      <!-- Modal Person -->
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">
            Crear Persona
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Nueva Persona</v-toolbar>
            <Person class="px-5" />
            <!-- Close -->
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!-- Modal Policy -->
      <v-dialog transition="dialog-bottom-transition" max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary ml-10" v-bind="attrs" v-on="on"> Crear Poliza </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>Nueva Poliza</v-toolbar>
            <Policy class="px-5" />
            <!-- Close -->
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!-- Data  -->
      <!-- <div class="table-container"> -->
        <PersonTable :Data="Persons" />
        <PolicyTable :Data="Policies" />
      <!-- </div> -->
    </v-main>
  </v-app>
</template>

<script>
import Policy from "./components/Policy";
import Person from "./components/Person";
import Navbar from "./components/shared/Navbar.vue";
import PersonTable from "./components/PersonTable.vue";
import { mapActions, mapState } from "vuex";
import PolicyTable from "./components/PolicyTable.vue";
export default {
  name: "App",

  components: {
    Navbar,
    Policy,
    Person,
    PersonTable,
    PolicyTable,
  },

  methods: {
    ...mapActions(["getPolicies", "getPersons"]),
  },

  computed: {
    ...mapState(["Persons", "Policies"]),
  },

  mounted() {
    this.getPolicies();
    this.getPersons();
  },
};
</script>
<style lang="scss">
main {
  width: 85vw;
  max-width: 1800px;
  margin: auto;
  height: 80vh;
  display: grid;
  place-content: center;
  margin-top: 2rem;
}
.custom-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  margin: auto;
  margin-top: 5.5rem;
  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
}
</style>
