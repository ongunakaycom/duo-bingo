<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Duolingo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <!-- Bağlantıyı dropdown tetikleyiciyle birleştirin -->
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SITE LANGUAGE: ENGLISH
              </a>
              <!-- Dropdown menüsü -->
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">SPANISH</a></li>
                <li><a class="dropdown-item" href="#">TURKISH</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // Herhangi bir mantık veya veri özelliği buraya eklenebilir
};
</script>

<style scoped>
/* Herhangi özel CSS stilleri buraya eklenebilir */
@import './AppHeader.css';
</style>
