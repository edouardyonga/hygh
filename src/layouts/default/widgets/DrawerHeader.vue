<template>
  <v-list-item class="mb-0 justify-space-between pl-3">

    <v-list-item-content class="pl-2">
      <v-list-item-title class="text-h3">
        <strong class="mr-1 font-weight-black"><figure class="sc-1o2avtl-0 htjsNg" aria-label="HYGH"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" class="sc-1o2avtl-1 fukJYB mr-5"><path fill="#fff" d="M.69.57C.345.916.099 1.412.099 1.91v8.688h9.313V3.3c-2.07-1.043-4.09-2.036-6.11-3.078C2.464-.176 1.38-.027.69.569zm22.964 9.879c-.247-.199-.493-.298-.789-.447-3.45-1.688-6.85-3.376-10.299-5.064v13.703c3.499-1.738 6.948-3.426 10.447-5.163.246-.1.443-.2.64-.348.395-.298.641-.794.641-1.34.05-.547-.246-1.043-.64-1.341zM0 13.378v8.44c0 .745.542 1.39 1.183 1.639.64.297 1.429.297 2.07 0 2.07-1.043 4.09-2.086 6.16-3.128v-6.901c-3.155-.05-6.26-.05-9.413-.05z"></path></svg>HYGH</figure></strong>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') }
  }
</script>
