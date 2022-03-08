<template>
  <div class="container">
    <div class="person">
      <p class="title">Персональные данные</p>
      <div class="input-form flex-container">
        <InputComponent
          v-model="personData.name"
          label="Имя"
          type="text"
          :class="errors.person && !errors.person.name && 'invalid'"
        />
        <InputComponent
          v-model="personData.age"
          label="Возраст"
          type="number"
          :class="errors.person && !errors.person.age && 'invalid'"
        />
      </div>
    </div>
    <div class="children">
      <div class="flex-container title-wrapper">
        <span class="">Дети (макс. 5)</span>
        <ChildAddButton
          @touch="addChild"
          :class="(Object.keys(childrenData).length > 4) && 'hidden'"
        />
      </div>
      <div class="input-form flex-container">
        <div
          class="flex-container children-wrap"
          v-for="child in childrenData"
          :key="child.id"
        >
          <InputComponent
            v-model="childrenData[child.id].name"
            label="Имя"
            type="text"
            :class="errors[child.id] && !errors[child.id].name && 'invalid'"
          />
          <InputComponent
            v-model="childrenData[child.id].age"
            label="Возраст"
            type="number"
            :class="errors[child.id] && !errors[child.id].age && 'invalid'"
          />
          <a href="#" class="remove-btn" @click="delete childrenData[child.id]">Удалить</a>
        </div>
      </div>
    </div>
    <div class="save-btn-wrapper">
      <button class="save-btn" @click="saveForm">Сохранить</button>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ChildAddButton from '@/components/ChildAddButton.vue';

export default {
  components: {
    InputComponent,
    ChildAddButton,
  },
  data() {
    return {
      personData: {},
      childrenData: {},
      errors: {},
      newData: {},
    };
  },
  beforeMount() {
    this.importData();
  },
  methods: {
    importData() {
      this.personData = JSON.parse(JSON.stringify(this.$store.state.person));
      this.childrenData = JSON.parse(JSON.stringify(this.$store.state.children));
    },
    addChild() {
      const id = Math.random().toString(16).slice(2);
      const newChild = {
        id,
        name: '',
        age: '',
      };
      this.childrenData[id] = newChild;
    },
    validate() {
      this.errors = {};
      this.newData = {};
      Object.values(this.childrenData)
        .forEach((child) => {
          if (child.name && child.age) this.newData[child.id] = child;
          if (!child.name && !child.age) return;
          if (!child.name || !child.age) {
            this.errors[child.id] = { ...child };
          }
        });
      if (!this.personData.name || !this.personData.age) {
        this.errors.person = { ...this.personData };
      }
    },
    saveForm() {
      this.validate();
      if (!Object.keys(this.errors).length) {
        this.$store.commit('saveForm', {
          personData: this.personData,
          childrenData: this.newData,
        });
        this.importData();
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 616px;
  align-content: center;
  display: inline-block;
}
.person {
  margin-bottom: 33px;
}
.children {
  margin-bottom: 30px;
}
.title {
  margin: 0 0 20px 0;

  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #111111;
}
.flex-container {
  display: flex;
  justify-content:space-between;
}
.input-form {
  flex-direction: column;
  gap: 10px;
}
.children
.input-form-item {
  width: 260px;
}
.remove-btn {
  min-width: 60px;
  margin: auto 0;

  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  color: #01A7FD;
}
.title-wrapper {
  align-items: center;
}
.hidden {
  visibility: hidden;
}
.save-btn-wrapper {
  text-align: left;
}
.save-btn {
  min-width: 78px;
  background: #01A7FD;
  border: none;
  border-radius: 100px;
  padding: 10px 20px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
button {
  cursor: pointer;
}
button:hover {
  opacity: 0.7;
}
button:active {
  opacity: 1;
}
.invalid {
  border: 2px solid red;
}
</style>
