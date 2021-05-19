<template>
  <v-container
    id="typography-view"
    fluid
    tag="section"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <LazyYoutube
          ref="lazyVideo"
          max-width="500"
          aspect-ratio="4:2"
          custom-title="Photoshop 101"
          src="https://www.youtube.com/watch?v=TcMBFSGVi1c"
        />
        <div class="text-center">
          <v-btn
            outlined
            color="primary"
            class="ma-1"
            @click="handleClick('playVideo')"
          >
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <v-btn
            outlined
            color="primary"
            class="ma-1"
            @click="handleClick('stopVideo')"
          >
            <v-icon>mdi-stop</v-icon>
          </v-btn>
          <v-btn
            outlined
            color="primary"
            class="ma-1"
            @click="handleClick('pauseVideo')"
          >
            <v-icon>mdi-pause</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card
          min-height="400"
          min-width="256"
          class="mx-auto"
        >
          <v-navigation-drawer
            permanent
            right
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Cours Content
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-sheet
        color="white"
        class="pa-5"
        elevation="1"
        min-height="100"
        min-width="100"
      >
        <div class="display-3 underline">
          About
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum laboriosam corrupti debitis cumque id molestias tempore,
          aspernatur delectus amet iusto culpa nesciunt magnam facere quam ad.
          Dolor, reprehenderit nobis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aspernatur magnam eius sunt quas! Ad, quos veniam
          recusandae magnam labore et a ipsam laboriosam illum eligendi dolorum
          consequatur nisi possimus accusantium.
        </p>
        <div>With<span class="font-weight-bold"> Mr. Antagana Njie</span></div>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script>
// Data

  export default {
    name: 'CoursesView',

    data: () => ({
      loading: false,
      selection: 1,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ],
      right: null
    }),
    methods: {
      handleClick (event) {
        this.$refs['lazyVideo'][event]()
      },
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      }
    }
  }
</script>
<style scoped>
.overlay {
  margin-top: 12% !important;
  margin: auto;
  background: rgba(34, 32, 32, 0.4);
  width: 50%;
  padding: 20px;
  color: aliceblue;
  font-size: 2rem;
  text-align: center;
}
</style>
