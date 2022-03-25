import loading from "@/services/loading.service";

export default async function ({$axios, store, redirect}) {

  $axios.onError(error => {
    // По хорошему - нужно расписать, но в этот раз:)
    if (error.response && error.response.status === 500) {
      console.log(error);
    }
  })

  $axios.interceptors.request.use((config) => {
      loading.open()
      return config;
    }, function (error) {
      console.log(error);
      return Promise.reject(error);
    }
  )

  $axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(response.data)
          }, 2000);
        }).then((wait) => {
          loading.close()
          return wait
        })

      }
    }
  )
}
