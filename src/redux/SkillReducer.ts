export interface RootState {
  SkillReducer: any;
  isVisible: boolean;
  dataContact: string;
  motivationText: string;
}

const INITIAL_STATE = {
  isVisible: false,
  dataContact: '',
  motivationText: ''
};

export default function SkillReducer(state = INITIAL_STATE, action: { type: any; value: string; }) {
  switch (action.type) {
    case 'UPDATE_IS_VISIBLE':
      return { ...state, isVisible: action.value };
    case 'UPDATE_DATA_CONTACT':
      return { ...state, dataContact: action.value };
    case 'UPDATE_MOTIVATION_TEXT':
      return { ...state, motivationText: action.value };
    default:
      return state;
  }
}

export function UPDATE_IS_VISIBLE(value: string) {
  return { type: 'UPDATE_IS_VISIBLE', value };
};

export function UPDATE_DATA_CONTACT(value: string) {
  return { type: 'UPDATE_DATA_CONTACT', value };
};

export function UPDATE_MOTIVATION_TEXT(value: string) {
  return { type: 'UPDATE_MOTIVATION_TEXT', value };
};