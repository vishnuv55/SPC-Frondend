const store = {
  user: { is_user_logged_in: false },
  pageTitle: '',
  toastMessage: {
    severity: 'success',
    message: '',
  },
  reload: false,
  darkMode: false,
  installable: {
    installable: false,
    deferredPrompt: null,
  },
};

export default store;
