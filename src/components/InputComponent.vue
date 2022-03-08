<template>
  <div
    class="input-form-item input-name"
  >
    <label for="name">
      <p class="input-label">{{ label }}</p>
      <input
        class="input"
        :type="type"
        id="name"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'label', 'type'],
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.input-form-item {
  box-sizing: border-box;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  height: 56px;
  padding: 6px 16px;
  text-align: left;
}
.input-label {
  display: inline-block;

  font-size: 13px;
  color: #1111117A;
  margin: 2px 0;
}
.input {
  box-sizing: border-box;
  width: 100%;
  height: 24px;
  border: none;
  outline: none;

  font-size: 14px;
  line-height: 24px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
