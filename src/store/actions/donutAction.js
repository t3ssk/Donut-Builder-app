export const getOrder = (order) => {
    return {
        type: 'GET_ORDER',
        finalOrder: order
    }
}

export const getTotal = (total) =>{
  return {type: 'GET_TOTAL', total: total}
}