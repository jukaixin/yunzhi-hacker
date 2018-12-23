export default {
    data() {
      return {
        typeData: [],
        total: 0,
        pagenum: 1,
        // 分页假数据
        currentPage4: 1
      }
    },
    created(){
      this.renderList()
    },
    methods:{
      async renderList (pagenum = 1, query = '') {
        const res = await this.$http.get('http://230774d8k8.imwork.net/ssm_yunzhifan/vendor/getVD',{
          params: {
            VendorDescid:1,
            // 查询条件
            // query,
            // // 第几页数据
            // pagenum,
            // // 每页大小
            // pagesize: 2
          }
        })
        console.log(res);
        console.log(res.data[0]);

        if (res.data.meta.status === 200) {
          // 获取数据成功
          this.typeData = res.data[0]
          // 设置总条数
          this.total = res.data[0].total
          // 当前页码
          this.pagenum = res.data[0].pagenum
        } else {
          // // 获取数据失败，说明： token 失效，因此，直接跳回到登录页面，让用户登录
          // this.$router.push('/login')
          // // 清除token
          // localStorage.removeItem('token')
        }
        
      }
    }
  }