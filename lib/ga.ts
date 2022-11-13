
type EventGA = {
  action : string,
  params : any,
}

// log specific events happening.
export const event = ({ action, params } : EventGA) => {
  if (typeof window === "undefined") return;

  window.gtag('event', action, params)
};

export const ON_CLICK_SAVE_POST_EVENT = "ON_CLICK_SAVE_POST_EVENT";
export const SAVE_POST_SUCESSFULLY_EVENT = "SAVE_POST_SUCESSFULLY_EVENT";

export const ga = {
  event,
};