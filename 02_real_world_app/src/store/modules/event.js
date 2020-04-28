import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  events: [],
  events_length: 0,
  event: {}
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_LENGTH(state, length) {
    state.events_length = length;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
};

export const actions = {
  async createEvent({ commit, dispatch }, event) {
    try {
      await EventService.postEvent(event);
      commit("ADD_EVENT", event);
      const notification = {
        type: "success",
        text: "success adding event"
      };
      dispatch("notification/add", notification, { root: true });
    } catch (error) {
      const notification = {
        type: "error",
        text: "There was a problem adding event: " + error.message
      };
      dispatch("notification/add", notification, { root: true });
      throw error;
    }
  },
  async fetchEvents({ commit, dispatch }, { perPage, page }) {
    try {
      const res = await EventService.getEvents(perPage, page);
      commit("SET_EVENTS", res.data);
      commit("SET_EVENTS_LENGTH", res.headers["x-total-count"]);
    } catch (error) {
      const notification = {
        type: "error",
        text: "There was a problem fetching events: " + error.message
      };
      dispatch("notification/add", notification, { root: true });
    }
  },
  async fetchEvent({ commit, getters, dispatch }, id) {
    const event = getters.getEventById(id);
    // console.log(event);
    if (event) {
      commit("SET_EVENT", event);
    } else {
      try {
        const res = await EventService.getEvent(id);
        commit("SET_EVENT", res.data);
      } catch (error) {
        const notification = {
          type: "error",
          text: "There was a problem fetching event: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      }
    }
  }
};

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  }
};
