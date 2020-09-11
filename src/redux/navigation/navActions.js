export const toggleNavItem = (idx, action) => ({
  type: `ITEM${idx}_TOGGLE`,
  payload: action
});

export const setActiveMenu = (idx, menu) => ({
  type: `SET_ACTIVE_MENU${idx}`,
  payload: menu
});

export const setMenuHeight = (idx, height) => ({
  type: `SET_MENU_HEIGHT${idx}`,
  payload: height
});