export default function (Vue) {
  Vue.mixin({
    mounted() {
      const { syncDataRouter: queryMap } = this.$options
      if (queryMap) {
        if (!this.$router) {
          throw new Error('You need to use vue-router!')
        }

        const dataKeysThatDiffFromRouter = Object.keys(queryMap)
          .filter(dataKey => {
            const queryKey = queryMap[dataKey]
            return this[dataKey] && this[dataKey] !== this.$route.query[queryKey]
          })

        if (dataKeysThatDiffFromRouter.length > 0) {
          const newQuery = dataKeysThatDiffFromRouter.reduce((res, dataKey) => {
            const queryKey = queryMap[dataKey]
            res[queryKey] = this[dataKey]
            return res
          }, {})
          this.$router.push({
            query: {
              ...this.$route.query,
              ...newQuery
            }
          })
        }

        for (const dataKey in queryMap) {
          const queryKey = queryMap[dataKey]
          this.$watch(dataKey, newValue => {
            this.$router.push({
              query: {
                ...this.$route.query,
                [queryKey]: newValue
              }
            })
          })
        }
      }
    }
  })
}
