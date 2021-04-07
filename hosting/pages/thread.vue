<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <h5 class="text-h5 mt-4">{{ thread.title }}</h5>
      <!-- コメント一覧 -->
      <div v-for="(comment, index) in comments" :key="index" class="mt-4">
        <span class="text-subtitle-2">{{ comment.name }}</span>
        <p class="mb-1 ml-2">{{ comment.text }}</p>
        <v-row>
          <v-col cols="12" class="text-right text-caption">
            <span>{{ comment.date }}</span>
          </v-col>
        </v-row>
      </div>

      <!-- 投稿文 -->
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="submit">
          <v-text-field label="お名前"></v-text-field>
          <validation-provider
            v-slot="{ erros, invalid }"
            name="comment"
            rules="required"
          >
            <v-textarea label="本文"></v-textarea>
          </validation-provider>
          <v-btn class="primary" type="submit">投稿</v-btn>
        </v-form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

/* ---------------------------------------
 * バリデーション
 * --------------------------------------- */
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

extend('required', {
  ...required,
  message: '入力してください。',
})

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data: () => ({
    thread: {
      title: 'タイトル1',
      comments: 100,
      date: '2021/02/01',
    },
    comments: [
      {
        name: 'ユーザー1',
        date: '2021/04/05 12:13',
        text: 'はじめてのコメントです。',
        fav: 0,
      },
      {
        name: 'ユーザー2',
        date: '2021/04/05 12:13',
        text: 'トワイライトが大好きです。',
        fav: 0,
      },
      {
        name: 'ユーザー1',
        date: '2021/04/05 12:13',
        text: '<script>alert(aaa)<\\/script>',
        fav: 0,
      },
    ],
  }),

  methods: {
    submit() {
      this.$refs.observer.validate()
    },
  },
}
</script>
