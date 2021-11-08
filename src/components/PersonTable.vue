<template>
  <table class="custom-table">
    <thead>
      <tr>
        <!-- <th class="text-left">ID</th> -->
        <th class="text-left">Nombre</th>
        <th class="text-left">Apellido paterno</th>
        <th class="text-left">Apellido materno</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in Data" :key="item.id">
        <!-- <td>{{ item._id }}</td> -->
        <td>{{ item.nombre }}</td>
        <td>{{ item.apellido_paterno }}</td>
        <td>{{ item.apellido_materno }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    Data: {
      type: Array,
    },
  },
};
</script>
