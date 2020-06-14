import { combineReducers } from 'redux'


const listFood = []

function reducersFood(state = listFood, action) {
    if (action.type === "FoodListAction") {
        return action.data;
    }
    return state
}


function reducersFoodlist(state = listFood, action) {
    if (action.type === "getFoodFromApi") {
        return action.data;
    }
    return state
}


const initialState = {
    basketNumbers: 0,
    total: 0,

}





function basketNumbers(state = initialState, action) {
    if (action.type === "ADD_FOOD_BASKET") {
        return {
            basketNumbers: state.basketNumbers + 1,
            total: state.total + action.data.price,

        }

    }
    return state

}

const tabUsers = []


function usersReducer(state = tabUsers, action) {
    if (action.type === "userdata") {
        return state = action.data;
    }
    return state;
};




const allReducers = combineReducers({
    menuReducerkey: reducersFood,
    getFoodFromApiListReducer: reducersFoodlist,
    basketNumbers: basketNumbers,
    usersReducer: usersReducer
})

export default allReducers