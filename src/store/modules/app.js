// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
    drawer: null,
    drawerImage: true,
    mini: false,
    items: [{
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            to: '/'
        },
        {
            title: 'Courses',
            icon: 'mdi-bookshelf',
            to: '/components/courses/'
        }

    ]
}

const mutations = make.mutations(state)

const actions = {
    ...make.actions(state),
    init: async({ dispatch }) => {

    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}