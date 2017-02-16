<template>
  <aside class="main-sidebar">
    <section class="sidebar">

      <ul class="sidebar-menu">
        <li class="header">Navigation</li>
        <li class="treeview" v-for="(nav, i) in navigators" :class="{ 'active': i === 0}">
          <a href="javascript:;">
            <i class="fa" :class="nav.icon || 'fa-circle-o'"></i>
            <span>{{nav.name}}</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <ul class="treeview-menu">
            <router-link :to="item.url" tag="li" v-for="item in nav.sub">
              <a><i class="fa fa-circle-o"></i>{{ item.name }}</a>
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import user from 'api/user'

export default {
  computed: {
    ...mapGetters(['navigators'])
  },
  created () {
    user.getUserInfo()
  }
}
</script>

<style>
.skin-blue .treeview-menu>li.router-link-active>a {
  color: #fff;
}
</style>
