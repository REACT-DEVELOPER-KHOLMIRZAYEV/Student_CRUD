

const allData = (state = { dataArr: [] }, action) => {
    switch (action.type) {
        case "allDataAction":
            return {
                dataArr: [...state.dataArr, action.payload],
            };
        default:
            return state
    }
}

export default allData