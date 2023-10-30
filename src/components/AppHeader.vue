<script setup>
import HeaderLinkItem from './HeaderLinkItem.vue'

</script>

<template>

  <!-- bootstrap navbar -->
  <nav class="navbar navbar-expand-lg header-light sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">EduConsult</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse hide" id="navbarNav">
        <ul class="navbar-nav">
          <HeaderLinkItem to="/" title="HOME"/>
          <HeaderLinkItem to="/about" title="ABOUT US" />
          <HeaderLinkItem to="/services" title="SERVICES" />
          <HeaderLinkItem to="/news" title="ANNOUNCEMENTS" />
          <HeaderLinkItem to="/upcoming" title="EVENTS" />
          <HeaderLinkItem to="/contact" title="CONTACT US" />         
        </ul>
      </div>
    </div>
  </nav>

</template>


