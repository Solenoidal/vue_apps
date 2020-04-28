let nextId = 1;

export default {
  namespaced: true,
  state: {
    notifications: []
  },
  mutations: {
    PUSH(state, notifications) {
      state.notifications.push({
        ...notifications,
        id: nextId++
      });
    },
    DELETE(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        notification => notification.id !== notificationToRemove.id
      );
    }
  },
  actions: {
    add({ commit }, notification) {
      commit("PUSH", notification);
    },
    remove({ commit }, notificationToRemove) {
      commit("DELETE", notificationToRemove);
    }
  }
};
