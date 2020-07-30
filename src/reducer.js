export const reducer = (state, action) => {

    if (action.type === "set_token") {
        return {...state, token: action.payload }
    } else if (action.type === 'remove_token') {
        return {...state, token: "" }
    } 
    else if(action.type==='empty_cart'){

        return {...state,cart:[]}

    }
    
    else if(action.type==='me'){

        return {...state,me:action.payload}

    }
    
    else if (action.type === 'add_to_cart') {


        const exist = state.cart.find(item => item._id === action.payload._id)

        if (exist) {
            let cart = state.cart.map(item => {

                if (item._id === action.payload._id)
                    return {...item, qty: item.qty + 1, price: item.price + action.payload.price }
                else
                    return item;
            })

            return {...state, cart: cart }
        }
        return {...state, cart: [...state.cart, action.payload] }

    } else if (action.type === 'remove_from_cart') {

        let cart = state.cart.filter(p => {
            return (action.payload._id !== p._id)
        })

        return ({...state, cart })

    } else if (action.type === 'update_qty') {

        if (action.payload.qty > 0 && action.payload.qty <= action.payload.stock) {
            let cart = state.cart.map(item => {

                if (item._id === action.payload._id) {

                    return {...item, price: (item.price / item.qty) * action.payload.qty, qty: action.payload.qty }


                } else
                    return item



            })
            return {...state, cart: cart }
        } else {
            let cart = state.cart.filter(item => item._id !== action.payload._id)
            return {...state, cart: cart }
        }

    }



}