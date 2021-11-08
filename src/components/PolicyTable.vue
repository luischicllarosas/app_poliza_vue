<template>
  <table class="custom-table">
    <thead>
      <tr>
        <!-- <th class="text-left">ID</th> -->
        <th class="text-left">Persona ID</th>
        <th class="text-left">Fecha de inicio de vigencia</th>
        <th class="text-left">Monto prima bruta</th>
        <th class="text-left">I.G.V</th>
        <th class="text-left">Monto prima neta</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in Data" :key="item.id">
        <!-- <td>{{ item._id }}</td> -->
        <td>{{ item.persona_id }}</td>
        <td>{{ formatDate }}</td>
        <td>{{ item.monto_prima_bruta }}</td>
        <td>{{ item.igv }}</td>
        <td>{{ item.monto_prima_neta }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import moment from "moment";
export default {
  props: {
    Data: {
      type: Array,
    },
  },
  computed: {
    formatDate: (value) => {
      return moment(value.fec_inicio_vigencia).format("LL");
    },
  },
};
</script>
