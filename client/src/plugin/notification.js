import { ref } from "vue";

const notification = ref({
  show: false,
  type: "success",
  message: "",
});

const closeNotification = () => {
  notification.value.show = false
}

export const showNotification = ({ type = 'success', message = '', duration = 3000 }) => {
  notification.value.show = true
  notification.value.type = type
  notification.value.message = message

  setTimeout(() => {
    closeNotification()
  }, duration)
}

export default {
  install: (app) => {
    app.provide('notification', notification)
  }
}
