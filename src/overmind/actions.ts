// -----
// ----- GLOBAL section -----
// -----

export const setLoading = async (context: any, payload: any) => {
  context.state.isLoading = payload;
};

export const showModal = async (context: any, payload: any) => {
  context.state.modal = {
    ...context.state.modal,
    type: payload,
    isVisible: true,
  };
};

export const hideModal = async (context: any) => {
  context.state.modal = {
    ...context.state.modal,
    type: null,
    isVisible: false,
    isFullScreen: false,
  };
};
