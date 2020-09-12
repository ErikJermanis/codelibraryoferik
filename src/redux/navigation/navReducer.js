const INITIAL_STATE = {
  item1: false,
  item2: false,
  activeMenu1: 'main',
  activeMenu2: 'main',
  menuHeight1: null,
  menuHeight2: null
}

const navReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ITEM1_TOGGLE':
      return {
        ...state,
        item1: action.payload,
        item2: false,
        activeMenu1: 'main',
        activeMenu2: 'main',
        menuHeight1: null,
        menuHeight2: null
      };
    case 'ITEM2_TOGGLE':
      return {
        ...state,
        item2: action.payload,
        item1: false
      };
    case 'SET_ACTIVE_MENU1':
      return {
        ...state,
        activeMenu1: action.payload
      }
    case 'SET_ACTIVE_MENU2':
      return {
        ...state,
        activeMenu2: action.payload
      }
    case 'SET_MENU_HEIGHT1':
      return {
        ...state,
        menuHeight1: action.payload
      }
    case 'SET_MENU_HEIGHT2':
      return {
        ...state,
        menuHeight2: action.payload
      }
    default:
      return state;
  }
};

export default navReducer;