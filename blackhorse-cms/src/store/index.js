import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function readCartsFromStorage() {
  var cartsStr = localStorage.getItem('carts-info');
  if (cartsStr == null || cartsStr.trim() == "") {
    cartsStr = []
  } else {
    cartsStr = JSON.parse(cartsStr)
  }
  return cartsStr
}

function writeCartsFromStorage(carts) {
  localStorage.setItem("carts-info", JSON.stringify(carts))
}

export default new Vuex.Store({
  state: {
    //读取到数数据
    carts: readCartsFromStorage()
  },
  //获取购物车里的id ，数量，总数
  getters: {
    //总数
    totalCount: (function (state) {
        var result = 0;
        state.carts.forEach(function (v) {
            result += v.count;
        });
        return result;
    }),
    getIds: (function (state) {
      return state.carts.map(function (v) {
        return v.id;
      }).join(",");
    }),
    getCountById: (function (state) {
      return function (id) {
        var temp = state.carts.find(function (v) {
          return v.id == id;
        });
        return temp.count;
      }
    })
  },
  mutations: {
    addTocarts(state, num) {
    var temp = state.carts.find(function (v) {
        return v.id == num.id;
        });
        if (temp) {
        temp.count += num.count;
        } else {
        state.carts.push(num);
        }
      writeCartsFromStorage(state.carts);   
    },
    updataCount(state,cartList){
        cartList.forEach(function(v){
            let num = state.carts.find(function(e){
                return e.id == v.id
            })
            num.count = v.count
        })
        writeCartsFromStorage(state.carts);     
    }  
  }
})
