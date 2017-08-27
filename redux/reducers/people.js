import { fromJS } from 'immutable';

const initialState = fromJS({
    peopleList: [
        {
            name: 'Aleksanteri Hämäläinen',
            loaned: 4.97,
            id: 1,
        },
        {
            name: 'Teemu Teekkari',
            loaned: 0,
            id: 2,
        },
        {
            name: 'Matti Meikäläinen',
            loaned: -13.01,
            id: 3,
        },
    ]
});

const people = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default people;
