const state = {
  // ----- GLOBAL props -----
  isLoading: false,
  auth: {
    jwtToken: null,
    isLoggedIn: undefined,
  },
  modal: {
    type: null,
    isVisible: false,
  },
};

export default state;
