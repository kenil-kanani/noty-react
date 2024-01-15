import { v4 as uuidv4 } from 'uuid';

const useId = () => {
    return uuidv4();
};

const NotyReducer = (state, action) => {
    if (action.type === "ADD_NOTY") {
        return [...state, {
            id: useId(),
            text: action.payload.text,
            type: action.payload.type,
        }]
    } else if (action.type === "REMOVE_NOTY") {
        const newArr = state.filter(item => item.id !== action.payload.id)
        return newArr
    }
    else return state;
}

export default NotyReducer;