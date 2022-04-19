type State = {
  isLoading: boolean;
  auth: {
    jwtToken: any;
    isLoggedIn: any;
  };
  modal: {
    name: string;
    isVisible: boolean;
  };
  block: {
    total: number;
    items: any;
  };
  transactions: {
    total: number;
    items: any;
  };
};

export const state: State = {
  // ----- GLOBAL props -----
  isLoading: false,
  auth: {
    jwtToken: null,
    isLoggedIn: undefined,
  },
  modal: {
    name: '',
    isVisible: false,
  },
  block: {
    total: 0,
    items: [],
  },
  transactions: {
    total: 0,
    items: [],
  },
};
