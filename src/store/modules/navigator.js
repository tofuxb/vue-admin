const state = {
  value: [{
    name: '数据统计',
    icon: 'fa-line-chart',
    url: '/datastats',
    sub: [
      { name: '每日汇总', url: '/datastats/daily' },
      { name: '样式报表', url: '/datastats/style' },
      { name: '广告类别', url: '/datastats/category' },
      { name: '广告主统计', url: '/datastats/advertiser' }
    ]
  }]
}

export default {
  state
}
