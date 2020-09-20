<template>
  <div>
    <Loading :active.sync="isLoading" />
    <table class="table mt-4">
      <thead>
        <tr>
          <th>下單時間</th>
          <th>購買款項</th>
          <th>付款方式</th>
          <th>應付金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr
          v-for="(item, key) in orders"
          :key="key"
          :class="{'text-secondary': !item.is_paid}"
        >
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >
                {{ product.product.title }} 數量：{{ product.quantity }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>
            {{ item.payment }}
          </td>
          <td class="text-right">
            <!-- 加入四捨五入的filter -->
            {{ item.amount | round}}
          </td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              >
              <label
                class="custom-control-label"
                :for="item.id"
              >
                <strong
                  v-if="item.paid"
                  class="text-success"
                >已付款</strong>
                <span
                  v-else
                  class="text-muted"
                >尚未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination
      :pages="pagination"
      @emitPages="getOrders"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      orders: {
        user: {}
      },
      isNew: false,
      pagination: {},
      isLoading: false,
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (pages = 1) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders?page=${pages}`

      this.$http.get(url).then((response) => {
        this.orders = response.data.data
        this.pagination = response.data.meta.pagination

        this.isLoading = false
      })
    },
    // 更改訂單付款狀態API
    setOrderPaid (item) {
      // 當 checkbox 狀態改變時傳入付款的api url，
      let url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders/${item.id}/paid`
      // 當 item.paid 狀態為false時改為取消付款狀態的api url
      if (!item.paid) {
        url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/orders/${item.id}/unpaid`
      }

      this.$http.patch(url, item.id).then(() => {
        this.$bus.$emit('message:push',
          '付款狀態已修改，好棒ヽ(＾Д＾)ﾉ ',
          'success')
        // 重新取得orders列表
        this.getOrders()
      })
    }
  }
}
</script>