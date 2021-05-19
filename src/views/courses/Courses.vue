<template>
  <v-container
    id="typography-view"
    fluid
    tag="section"
  >
    <view-intro
      heading="Your Learning"
      link="styles/typography"
    />

    <v-row
      align="center"
      justify="center"
    >
      <v-col
        v-for="(elm,index) in 6"
        :key="index"
        cols="12"
        md="4"
      >
        <v-card
          :loading="loading"
          class="mx-auto my-5"
          max-width="374"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>

          <v-img
            height="250"
            src="https://i.pinimg.com/474x/c4/00/bf/c400bfe6c05b5f7cf3f0f59dfc330871.jpg"
          />

          <v-card-title>Photoshop 101</v-card-title>

          <v-card-text>
            <div class="my-4 subtitle-1">
              By • Italian Mark
            </div>

            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, autem laboriosam quasi eligendi ut, assumenda perferendis, rem quidem repudiandae nihil sunt? Reprehenderit sit nobis laboriosam hic quia repellat consectetur iure.
            </div>
          </v-card-text>

          <v-divider class="mx-4" />

          <v-card-title>availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="primary accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary lighten-2"
              text
              to="/components/cours/:id"
              @click="reserve"
            >
              Learn
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Data

  export default {
    name: 'CoursesView',

    data: () => ({
      loading: false,
      selection: 1
    }),
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (

          this.loading = false
        ), 2000)
      },
      change:function(){
        console.log('Changed!')
      }
    },
    created:function(){
this.change()
    }
  }
</script>
