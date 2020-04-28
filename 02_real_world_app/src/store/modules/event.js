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
  async createEvent({ commit }, event) {
    await EventService.postEvent(event);
    commit("ADD_EVENT", event);
  },
  async fetchEvents({ commit }, { perPage, page }) {
    try {
      const res = await EventService.getEvents(perPage, page);
      commit("SET_EVENTS", res.data);
      commit("SET_EVENTS_LENGTH", res.headers["x-total-count"]);
    } catch (error) {
      console.error(error.message);
    }
  },
  async fetchEvent({ commit, getters }, id) {
    const event = getters.getEventById(id);
    // console.log(event);
    if (event) {
      commit("SET_EVENT", event);
    } else {
      try {
        const res = await EventService.getEvent(id);
        commit("SET_EVENT", res.data);
      } catch (error) {
        console.error(error.message);
      }
    }
  }
};

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id);
  }
};
