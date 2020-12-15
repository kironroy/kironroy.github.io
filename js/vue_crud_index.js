var products = [
  {id: 1, name: 'struts', description: ' 4 struts: Monroe Gas Struts. 9-11-2017 | #75878 | 95,422 mi',  price: 1251.64},
  {id: 2, name: 'tires', description: ' 4 tires Replaced: Goodyear Assurance. 9-6-2017 | #75722 | 95,346 mi', price: 504.88},
  {id: 3, name: 'radiator headlight', description: 'Radiator Leak and headight replacement bulb. 8-29-2017 | #75502 | 95,227 mi', price: 608.64}
];

function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].id == productId) {
      return key;
    }
  }
};

var List = Vue.extend({
  template: '#product-list',
  data: function () {
    return {products: products, searchKey: ''};
  },
  computed: {
    filteredProducts: function () {
      return this.products.filter(function (product) {
        return this.searchKey=='' || product.name.indexOf(this.searchKey) !== -1;
      },this);
    }
  }
});

var Product = Vue.extend({
  template: '#product',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  }
});

var ProductEdit = Vue.extend({
  template: '#product-edit',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    updateProduct: function () {
      var product = this.product;
      products[findProductKey(product.id)] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price
      };
      router.push('/');
    }
  }
});

var ProductDelete = Vue.extend({
  template: '#product-delete',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push('/');
    }
  }
});

var AddProduct = Vue.extend({
  template: '#add-product',
  data: function () {
    return {product: {name: '', description: '', price: ''}}
  },
  methods: {
    createProduct: function() {
      var product = this.product;
      products.push({
        id: Math.random().toString().split('.')[1],
        name: product.name,
        description: product.description,
        price: product.price
      });
      router.push('/');
    }
  }
});

var router = new VueRouter({routes:[
  { path: '/', component: List},
  { path: '/product/:product_id', component: Product, name: 'product'},
  { path: '/add-product', component: AddProduct},
  { path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
  { path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
]});
app = new Vue({
  router:router
}).$mount('#app')