<template>
  <div>
    <v-form ref="form" lazy-validation class="py-5">
      <v-select
        :items="Persons"
        v-model="persona_id"
        item-text="nombre"
        item-value="_id"
        label="Codigo de las personas"
      />
      <DatePicker ref="DatePicker" />
      <v-text-field
        v-model="monto_prima_bruta"
        :counter="10"
        label="Monto prima bruta"
        required
        :rules="genericRule"
        outlined
        dense
        hide-details
        class="my-3"
        placeholder="00.00"
        @keyup="IGVCalculate"
      />

      <v-text-field
        v-model="igv"
        :counter="10"
        label="I.G.V"
        required
        :rules="genericRule"
        outlined
        dense
        hide-details
        class="my-3"
        placeholder="00.00"
        prefix="%"
        @keyup="IGVCalculate"
      />
      <v-text-field
        v-model="monto_prima_neta"
        :counter="10"
        label="Monto prima neta"
        required
        :rules="genericRule"
        solo
        dense
        hide-details
        class="my-3"
        placeholder="00.00"
        readonly
        @keyup="IGVCalculate"
      />

      <v-btn color="primary" class="mr-4 mt-4" @click="submitPerson">
        Ingresar Poliza
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import DatePicker from "./shared/DatePicker.vue";
import axios from "../plugins/axios";
export default {
  components: { DatePicker },
  name: "Policy",
  data: () => ({
    persona_id: null,
    monto_prima_bruta: 0,
    igv: 0,
    monto_prima_neta: 0,
    genericRule: [(v) => !!v || "Name is required"],
    Persons: [],
  }),
  methods: {
    async submitPerson() {
      const DatePicker = this.$refs.DatePicker._data.date;
      const params = {
        persona_id: this.persona_id,
        fec_inicio_vigencia: DatePicker,
        monto_prima_bruta: this.monto_prima_bruta,
        igv: this.igv,
        monto_prima_neta: this.monto_prima_neta,
      };

      await axios
        .post("policy", params)
        .then(() => {
          this.cleanForm();
          this.$store.dispatch("getPolicies");
        })
        .catch(console.error);
    },
    IGVCalculate() {
      const PrimaBruta = (this.monto_prima_bruta / 100) * this.igv;
      this.monto_prima_neta = parseFloat(
        PrimaBruta + parseFloat(this.monto_prima_bruta)
      ).toFixed(2);
    },
    cleanForm() {
      this.persona_id = 0;
      this.monto_prima_bruta = 0;
      this.igv = 0;
      this.monto_prima_neta = 0;
      this.genericRule = 0;
    },
  },
  // watch:{
  //   monto_prima_neta: (new,old)=>{
  //     this.answer = 'Waiting for you to stop typing...'
  //     this.debouncedGetAnswer()
  //   }
  // },
  created() {
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  async mounted() {
    const Persons = await axios("person");

    this.Persons = Persons.data;
  },
};
</script>

<style></style>
