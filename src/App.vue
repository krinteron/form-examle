<template>
  <body>
    <nav>
      <div class="logo">
        <img alt="logo" src="./assets/logo.png">
      </div>
      <div class="form-link">
        <router-link class="link" to="/">Форма</router-link>
        <div class="preview-link">
          <router-link class="link" to="/preview">Превью</router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer class="footer">
      all right reserved
    </footer>
  </body>
</template>

<style>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
nav {
  position: relative;
  height: 76px;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  margin-bottom: 30px;
}
.logo {
  position: absolute;
  top: calc(50% - 16px);
  left: 51px;
}
.form-link {
  display: inline-block;
  position: relative;
  top: calc(50% - 12px);
}
.preview-link {
  position: absolute;
  left: calc(100% + 24px);
  top: 0;
}
.link {
  text-decoration: none !important;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
}
main {
  flex-grow: 1;
}
footer {
  box-sizing: border-box;
  height: 76px;
  flex-shrink: 0;
  align-items: center;
  padding: 30px;
  background: #FAFAFA;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
}
</style>
