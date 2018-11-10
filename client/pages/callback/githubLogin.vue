<template>
  <div></div>
</template>
<script>
  if (process.browser) {
    window.onLogin((new URL(document.location)).searchParams.get('code'));
    window.close();
  }

  export default {}
</script>
