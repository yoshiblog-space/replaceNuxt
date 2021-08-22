<template>
  <div>
    <TopHeader />
    <BodyContent />
    <TopFooter />
  </div>
</template>

<script>
import TopHeader from "~/components/TopHeader.vue";
import BodyContent from "~/components/BodyContent.vue";
import TopFooter from "~/components/TopFooter.vue";
export default {
  components: {
    TopHeader,
    BodyContent,
    TopFooter,
  },
};
</script>

