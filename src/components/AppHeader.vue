<template>
  <!-- Header component -->
  <header>
    <!-- Container for layout -->
    <div class="container">
      <!-- Navigation row -->
      <nav class="row">
        <!-- Logo link -->
        <a aria-current="page" href="/" class="col">
          <img alt="Duolingo" src="../assets/logo.png" /> 
        </a>
        <!-- Language dropdown -->
        <div class="col" tabindex="0" style="--offset: 13px;">
          <div class="dropdown">
            <button class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>Site language: English</span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">English</a>
              <a class="dropdown-item" href="#">Spanish</a>
              <a class="dropdown-item" href="#">French</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
/* Add your component-specific styles here */

/* Styling for the container */
.container {
  max-width: 1200px; /* For example, a specific maximum width */
  margin: auto; /* To center the content on the page */
}

/* Styling for the row */
.row {
  display: flex; /* Aligns row elements horizontally */
}

/* Styling for the columns */
.col {
  flex: 1; /* Makes columns equally wide */
}

/* Styling for the dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 12px;
}

.dropdown-menu {
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 1;
}

.dropdown-item {
  color: #333;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
}

.dropdown-item:hover {
  background-color: #f2f2f2;
}
</style>
