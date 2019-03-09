<template>
  <div></div>
</template>
<script>
  if (process.browser) {
    window.socialLoginCode = (new URL(document.location)).searchParams.get('code');
  }

  export default {}
</script>
