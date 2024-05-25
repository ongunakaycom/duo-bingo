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
        <!-- Language button -->
        <div class="col" tabindex="0" style="--offset: 13px;">
          <button>
            <span>Site language: English</span>
            <img alt="" src="demo.jpg" />
          </button>
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
</style>
