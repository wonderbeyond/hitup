import ReactGA from 'react-ga';
import {
  UPDATE_DATE_TYPE,
  UPDATE_LANGUAGE,
  UPDATE_VIEW_TYPE,
  SET_COLOR_THEME,
  SET_WHETHER_OCCUPY_NEWTAB,
} from "./types";

export const updateViewType = function (viewType = 'grid') {
  return dispatch => {
    dispatch({
      type: UPDATE_VIEW_TYPE,
      payload: viewType
    });
    ReactGA.event({
      category: 'Preference',
      label: 'Set Trending ViewType',
      action: `Trending ViewType Set to ${viewType}`
    });
  };
};

export const updateLanguage = function (language) {
  return dispatch => {
    dispatch({
      type: UPDATE_LANGUAGE,
      payload: language
    });
    ReactGA.event({
      category: 'Preference',
      label: 'Set Trending Language',
      action: `Trending Language Set to ${language || "All"}`
    });
  };
};

export const updateDateJump = function (dateJump) {
  return dispatch => {
    dispatch({
      type: UPDATE_DATE_TYPE,
      payload: dateJump
    });
    ReactGA.event({
      category: 'Preference',
      label: 'Set Trending Period',
      action: `Trending Period Set to ${dateJump}`
    });
  };
};


export function setColorTheme(theme) {
  return dispatch => {
    dispatch({
      type: SET_COLOR_THEME,
      payload: theme
    });
    ReactGA.event({
      category: 'Preference',
      label: 'Set Color Theme',
      action: `Color Theme Set to ${theme}`
    });
  };
}

export function setWhetherOccupyNewTab(b) {
  return dispatch => {
    dispatch({
      type: SET_WHETHER_OCCUPY_NEWTAB,
      payload: b
    });
    ReactGA.event({
      category: 'Preference',
      label: 'Set Whether Occupy New Tab',
      action: b? 'OK to Occupy New Tab' : 'Not Occupy New Tab'
    });
  };
}
