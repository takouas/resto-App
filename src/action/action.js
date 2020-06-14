import axios from 'axios'


export function apiData(data) {
    return {
        type: "FoodListAction",
        data
    }
}
export function getListFromApi() {
    return (dispatch) => {
        axios.get("http://localhost:3000/posts").then(response => {
            dispatch(apiData(response.data
            ))
        })
    }
}


export function addFoodToApi(el) {

    return () =>
        axios.post('http://localhost:3000/list', {
            id: el.id,
            image: el.image,
            title: el.title,
            price: el.price,
            numbers: el.numbers + 1,
            incart: el.false
        }).then((res) =>
            console.log(res.data)
        );
}


export function getFoodFromApi(data) {
    return {
        type: "getFoodFromApi",
        data
    }
}
export function getListFromApiList() {
    return (dispatch) => {
        axios.get("http://localhost:3000/list").then(response => {
            dispatch(getFoodFromApi(response.data
            ))
        })
    }
}
export const addBasket = (nameOfFood) => {
    return (dispatch) => {
        dispatch
            ({ type: "ADD_FOOD_BASKET", data: nameOfFood })
    }
}


export function incrementFoodToApi(el, id) {

    return () =>
        axios.patch(`http://localhost:3000/list/${id}`, {

            numbers: el.numbers + 1,


        }).then((res) =>
            console.log(res.data),
            window.location.reload()
        );
}




export function decrementFoodToApi(el, id) {


    return () =>
        axios.patch(`http://localhost:3000/list/${id}`, {

            numbers: el.numbers - 1,


        }).then((res) =>
            console.log(res.data),
            window.location.reload()
        );
}


export function deleteFood(el) {


    return () =>
        axios.delete(`http://localhost:3000/list/${el.id}`).then((res) =>
            console.log(res.data), window.location.reload()

        );
}


export const Sign = (el) => {
    return axios.post('http://localhost:3000/users', el)
        .then((response) => {
            alert('welcome')
        })
};



