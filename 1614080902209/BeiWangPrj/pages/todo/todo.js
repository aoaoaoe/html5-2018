// miniprogram/pages/flag/flag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TodayList:[],
    Today:"",
    input:""
  },
 
  AddInput:function(e){
    this.setData({
      input:e.detail.value
    });
  },
  /**
   * 更改任务状态
   * */
  toggleTodoHandle: function (e) {
    var todo = this.data.TodayList;
    //获取e传输的id
    var index = e.currentTarget.id;
    //改变complete状态
    todo[index].completed = !todo[index].completed;
    //更改数据
    this.setData({
      TodayList:todo
    });
    this.save();
  },
  
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //计算日期
    var that = this;
    var date1 = new Date;
    var date2 = new Array("星期日","星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var Today;
    Today = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + '   ' + (date2[date1.getDay()]);
    var TodayStorage = wx.getStorageSync("Today");
    if (TodayStorage != Today){
      wx.setStorageSync("Today", Today);
    }
    that.setData({
      Today:Today
    });

    //获取本地存储日志
    this.loadData();

    


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})