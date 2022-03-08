<template>
  <PersonForm />
</template>

<script>
// @ is an alias to /src
import PersonForm from '@/components/PersonForm.vue';

export default {
  name: 'FormView',
  components: {
    PersonForm,
  },
};
</script>
