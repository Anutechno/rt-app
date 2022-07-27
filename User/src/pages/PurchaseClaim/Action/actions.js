import action_type from "./action.type";

export const hasButton = (payload) => {
  return {
    type: action_type.HAS_MESSAGE_BUTTON_GROUP,
    payload,
  };
};
