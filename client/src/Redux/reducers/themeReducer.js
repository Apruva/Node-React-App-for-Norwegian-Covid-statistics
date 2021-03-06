const initState = {
  status: true,
  palette: {
    type: 'light',
    primary: { main: '#393C75' },
    secondary: { main: '#ffffff' },
    tertiary: { main: '#7482cc' },
    fortiary: { main: '#393C75' },
    fifthiary: { main: '#3b3991' },
    sixthiary: { main: '#ffffff' },
    background: { default: '#FFFFFF' },
  },
  typography: {
    fontFamily: 'Segoe UI',
    fontWeight: 400,
    fontSize: 12,
    h3: {
      fontFamily: 'Segoe UI',
      fontWeight: 400,
      fontSize: 20,
    },
  },
  fullWidth: {
    maxWidth: 300,
  },

  props: {
    MuiButton: {
      color: 'primary',
      // disableRipple: true,
      // textTransform: 'none',
    },
  },
  spacing: 5,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        disableRipple: true,
        color: 'primary',
        backgroundColor: 'primary',
      },
    },
  },
};
const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {
        ...state,
        status: !state.status,
        palette: { ...action.payload },
      };
    default:
      return state;
  }
};
export default themeReducer;
