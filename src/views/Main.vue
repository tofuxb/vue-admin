<template lang="html">
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>

    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          {{ $route.name }}
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><router-link to="/"><i class="fa fa-home"></i>首页</router-link></li>
          <li class="active">{{ $route.name }}</li>
        </ol>
      </section>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from 'components/AppHeader'
import AppSidebar from 'components/AppSidebar'

export default {
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
