<template>
    <header class="page-header uk-box-shadow-medium uk-background-header uk-sticky" uk-sticky>
      <div class="uk-container uk-container-expand uk-height-1-1">
        <nav class="uk-height-1-1 uk-navbar" uk-navbar="dropbar: true">
          <a class="uk-navbar-item uk-logo" href="#">
            <img width="178" height="38" src="/assets/images/getplus-logo-white.svg" alt="logo" uk-svg class="uk-preserve">
          </a>

          <ul class="uk-navbar-nav uk-navbar-center uk-visible@l">
            <li>
              <a href="">Kata Gita</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">
                Promo
              </a>
            </li>
            <li>
              <a href="">MyGetPlus</a>
            </li>
          </ul>

          <div class="uk-navbar-right">
            <button class="uk-icon-link uk-margin-right uk-visible@l" uk-icon="search" type="button" aria-label="Toggle Search Form"></button>
            <a href="#" class="uk-icon-link uk-margin-small-right uk-visible@l" uk-icon="facebook"></a>
            <a href="#" class="uk-icon-link uk-margin-small-right uk-visible@l" uk-icon="twitter"></a>
            <a href="#" class="uk-icon-link uk-visible@l" uk-icon="instagram"></a>
            <button class="uk-margin-left uk-hidden@l" uk-toggle="target: #offcanvas" uk-icon="icon: menu" type="button" aria-label="Toggle Mobile Menu"></button>
          </div>
        </nav>
      </div>

      <div class="offcanvas" id="offcanvas" uk-offcanvas="flip: true; overlay: true; mode: reveal">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close aria-label="Close Mobile Menu"></button>

          <ul class="top-menu uk-nav uk-margin-top">
            <li>
              <a href="">Kata Gita</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">
                Promo
              </a>
            </li>
            <li>
              <a href="">MyGetPlus</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

</template>

<style lang="less">
html {
  background: #e0e0e0;
}

.uk-background-header{
  background: #00aeef;
}

.page-header {
  height: 80px;
}

.page-header .uk-navbar-nav > li > a,
.page-header .uk-icon-link,
.page-header .uk-icon-link:hover {
  color: #333;
}

.page-header .uk-navbar-nav > li > a {
  padding: 0 25px;
  color: #ffffff;
}

.page-header .uk-navbar-nav > li > a:hover {
  background: #f6f7f9;
  color: #333;
}

/* just in case you want to remove the default white color */
/* 
.page-header .uk-navbar-dropdown {
  background: transparent;
}*/

.page-header .uk-navbar-dropdown-nav .uk-nav-header {
  color: #7c2a8a;
}

.page-header [class*="uk-column-"] > li {
  padding: 25px 0;
}

.page-header [class*="uk-column-"] > li:not(:last-child) {
  border-right: 1px solid #e5e5e5;
}

.page-header [class*="uk-column-"] .uk-icon {
  color: #c6c6c6;
}

.offcanvas .uk-nav-header {
  color: rgba(246, 247, 249, 0.5);
}

.offcanvas .top-menu > li + li {
  margin-top: 10px;
}

.offcanvas .sub-menu {
  border-left: 1px solid #484848;
}

.offcanvas .sub-menu li {
  padding-left: 30px;
}

.offcanvas .sub-menu li.uk-nav-header {
  padding-left: 10px;
}

.banner {
  height: calc(100vh - 80px);
}
</style>
