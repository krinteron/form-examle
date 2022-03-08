<template>
  <button
    class="add-btn flex-container"
    @click="$emit('touch')"
  >
    <span class="plus-wrapper">
      <div class="plus-horizontal"></div>
      <div class="plus-vertical"></div>
    </span>
    <span class="add-btn-label">Добавить ребенка</span>
  </button>
</template>

<style scoped>
.add-btn {
  box-sizing: border-box;
  color: #01A7FD;
  text-align: center;
  margin-bottom: 11px;
  padding: 8px 18px;
  border: 2px solid #01A7FD;
  border-radius: 100px;
  font-size: 14px;
  line-height: 24px;
  background: none;
}
.add-btn-label {
  min-width: 136px;
}
.plus-wrapper {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 4px;
}
.plus-horizontal {
  position: relative;
  top: 11px;
  left: 4px;
  height: 2px;
  width: 16px;
  background-color: #01A7FD;
  border-radius: 138.148px;
}
.plus-vertical {
  position: relative;
  left: 11px;
  top: 2px;
  height: 16px;
  width: 2px;
  background-color: #01A7FD;
  border-radius: 138.148px;
}
</style>
