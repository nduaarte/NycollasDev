export interface RootState {
  image: string;
  dataContact: string;
  motivationText: string;
}

const INITIAL_STATE = {
  image: '',
  dataContact: '',
  motivationText: ''
};

export default function SkillReducer(state = INITIAL_STATE, action: { type: any; value: string; }) {
  switch (action.type) {
    case 'UPDATE_IMAGE':
      return { ...state, image: action.value };
    case 'UPDATE_DATA_CONTACT':
      return { ...state, dataContact: action.value };
    case 'UPDATE_MOTIVATION_TEXT':
      return { ...state, motivationText: action.value };
    default:
      return state;
  }
}

export function UPDATE_IMAGE(value: string) {
  return { type: 'UPDATE_IMAGE', value };
};

export function UPDATE_DATA_CONTACT(value: string) {
  return { type: 'UPDATE_IMAGE', value };
};

export function UPDATE_MOTIVATION_TEXT(value: string) {
  return { type: 'UPDATE_IMAGE', value };
};