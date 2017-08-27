import { fromJS } from 'immutable';

const initialState = fromJS({
    peopleList: [
        {
            name: 'Aleksanteri Hämäläinen',
            loanSum: 4.00,
            id: 1,
        },
        {
            name: 'Teemu Teekkari',
            loanSum: 0.00,
            id: 2,
        },
        {
            name: 'Matti Meikäläinen',
            loanSum: -13.20,
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
