<template>
  <div class="container">
    <Loading :active.sync="isLoading" />
    <div class="text-center mt-4 d-flex  justify-content-between align-items-center">
      <button
        class="btn btn-dark mb-3"
        @click="openModal('new')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item) in products"
          :key="item.id"
        >
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price | currency }}
          </td>
          <td class="text-right">
            {{ item.price | currency }}
          </td>
          <td>
            <span
              v-if="item.enabled"
              class="text-success"
            >啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="Pagination">
      <Pagination
        :pages="pagination"
        @emitPages="getProducts"
      />
    </div>
    <!-- Modal -->
    <div
      id="productModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯 {{ tempProduct.title }}</span>
            </h5>
            <button
              type="button"
              class="close text-light"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div
                  v-for="i in 5"
                  :key="i + 'img'"
                  class="form-group"
                >
                  <label :for="'img' + i">輸入圖片網址</label>
                  <input
                    :id="'img' + i"
                    v-model="tempProduct.imageUrl[i - 1]"
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                  >
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i
                      v-if="status.fileUploading"
                      class="fas fa-spinner fa-spin"
                    />
                  </label>
                  <input
                    id="customFile"
                    ref="file"
                    type="file"
                    class="form-control"
                    @change="uploadFile"
                  >
                </div>
                <img
                  class="img-fluid"
                  :src="tempProduct.imageUrl[0]"
                  alt
                >
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    id="title"
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                    required
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      id="category"
                      v-model="tempProduct.category"
                      type="text"
                      class="form-control"
                      placeholder="請輸入分類"
                      required
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      id="unit"
                      v-model="tempProduct.unit"
                      type="text"
                      class="form-control"
                      placeholder="請輸入單位"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入原價"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      id="price"
                      v-model="tempProduct.price"
                      type="number"
                      class="form-control"
                      placeholder="請輸入售價"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品說明</label>
                  <textarea
                    id="description"
                    v-model="tempProduct.description"
                    type="text"
                    class="form-control"
                    placeholder="請輸入產品說明"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="content">產品描述</label>
                  <vue-editor
                    id="content"
                    v-model="tempProduct.content"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.enabled"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label
                      class="form-check-label"
                      for="is_enabled"
                    >是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct(pagination.current_page)"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delProductModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5
              id="exampleModalLabel"
              class="modal-title"
            >
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="delProduct(pagination.current_page)"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
// Modular Version 載入vueEditor
import { VueEditor } from 'vue2-editor/dist/vue2-editor.core'
import Pagination from '@/components/Pagination.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Products',
  components: {
    Pagination,
    VueEditor
  },
  props: ['token'],
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: []
      },
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      },
      uuid: process.env.VUE_APP_UUID
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true

      const api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/products?page=${page}&paged=10&orderBy=category&sort=desc`

      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      })
    },
    getDetails (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${id}`

      this.$http.get(api).then((response) => {
        this.tempProduct = response.data.data
        $('#productModal').modal('show')
        this.isLoading = false
      })
    },
    // 開啟 Modal 視窗
    openModal (isNew, item, currentPage) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: []
          }

          this.isNew = true

          $('#productModal').modal('show')
          break
        case 'edit':
          this.isNew = false
          this.getDetails(item.id)
          break
        case 'delete':
          this.tempProduct = { ...item }

          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    updateProduct (page) {
      const vm = this
      // 新增商品
      let api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product`
      var updateStatus = '新增'
      let httpMethod = 'post'

      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`
        updateStatus = '修改'
        httpMethod = 'patch'
      }

      this.$http[httpMethod](api, this.tempProduct).then(() => {
        $('#productModal').modal('hide')

        this.$bus.$emit('message:push',
          updateStatus + '成功囉，好棒ヽ(＾Д＾)ﾉ ',
          'success')

        this.isLoading = false

        this.getProducts(page)
      }).catch((error) => {
        this.isLoading = false
        // 將錯誤訊息的物件一個一個推出並送至Toast元件
        var errorData = error.response.data.errors
        $('#productModal').modal('hide')
        Object.keys(errorData).map(function (objectKey, index) {
          var newErrorData = errorData[objectKey]
          vm.$bus.$emit('message:push',
          `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${newErrorData}`,
          'danger')
        })
      })
    },
    // 刪除產品，修改為刪除成功後停留在執行刪除的頁數
    delProduct (page) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`

      this.$http.delete(url).then(() => {
        $('#delProductModal').modal('hide')

        this.isLoading = false

        this.$bus.$emit('message:push',
          '刪除成功囉，好棒ヽ(＾Д＾)ﾉ',
          'success')

        this.getProducts(page)
      })
    },
    // 上傳檔案
    uploadFile () {
      const uploadedFile = this.$refs.file.files[0]

      const formData = new FormData()

      formData.append('file', uploadedFile)

      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UID}/admin/storage`

      this.status.fileUploading = true

      this.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.status.fileUploading = false

        if (response.status === 200) {
          this.tempProduct.imageUrl.push(response.data.data.path)
        }
      }).catch(() => {
        this.$bus.$emit('message:push',
          `檔案上傳失敗惹，好糗Σ( ° △ °|||)︴
          請檢查是不是檔案大小超過 2MB`,
          'danger')

        this.status.fileUploading = false
      })
    }
  }
}
</script>

<style lang="css">
@import '~vue2-editor/dist/vue2-editor.css';
/* vueEditro css */
/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
.Pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* left: 50%;
  transform: translateX(-50%); */
}
</style>
