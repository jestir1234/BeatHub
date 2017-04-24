export const RECEIVE_PRESENTATION_ITEM = "RECEIVE_PRESENTATION_ITEM";

export const receivePresentationItem = (presentationItem, presentationType) => {
  return {
    type: RECEIVE_PRESENTATION_ITEM,
    presentationItem: presentationItem,
    presentationType: presentationType
  };
};
