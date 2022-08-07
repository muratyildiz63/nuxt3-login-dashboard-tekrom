<template>

    <dashboardLayout>
      <ReferenceCustumer
        v-for="(reference, index) in referenceData"
        :key="index"
        :referenceItem="reference"
      />
    </dashboardLayout>

</template>


<script setup>
import apiRequest from "../services/apiRequest";
import ReferenceCustumer from "../components/referenceCustumer.vue";
import dashboardLayout from "../layouts/dashboardLayout";

let referenceData = ref([]);

apiRequest("/reference", "GET").then((res) => {
  referenceData.value = res;
});
</script>
