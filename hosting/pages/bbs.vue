<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <div class="text-h5">掲示板</div>
      <v-data-table
        :headers="headers"
        :items="threads"
        @click:row="clickRow"
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },

  data: () => ({
    headers: [
      {
        text: 'タイトル',
        value: 'title',
        sortable: false,
      },
      {
        text: 'コメント数',
        value: 'comments',
        sortable: true,
      },
      {
        text: '最終投稿日時',
        value: 'date',
        sortable: false,
      },
    ],
    threads: [
      {
        title: 'タイトル1',
        comments: 100,
        date: '2021/02/01',
      },
      {
        title: 'タイトル2',
        comments: 300,

        date: '2021/02/01',
      },
      {
        title: 'タイトル3',
        comments: 140,

        date: '2021/02/01',
      },
    ],
  }),

  methods: {
    clickRow: () => {
      console.log('クリック')
    },
  },
}
</script>
