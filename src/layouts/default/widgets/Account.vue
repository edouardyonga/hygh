<template>
  <v-menu
    bottom
    left
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-account</v-icon><b class="">John Doe Alex</b>
      </v-btn>
    </template>

    <v-list
      :tile="false"
      flat
      nav
    >
      <template>
       

        <app-bar-item
          to="/"
        >
          <v-list-item-title>Logout</v-list-item-title>
        </app-bar-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'DefaultAccount',

    data: () => ({
      profile: [
        { title: 'Profile' },
        { title: 'Settings' },
        { divider: true },
        { title: 'Log out' }
      ]
    })
  }
</script>
