<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <!-- <v-col
        cols="12"
        md="6"
      >
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
      </v-col> -->
      Dashboard
    </v-row>
  </v-container>
</template>

<script>
// Utilities
  import { get } from 'vuex-pathify'
  // import Vue from 'vue'

  export default {
    name: 'DashboardView',

    data: () => ({}),

    computed: {
      sales: get('sales/sales'),
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      }
    }
  }
</script>
