import { fromJS } from 'immutable';

const initialState = fromJS({
    peopleList: [
        {
            name: 'Aleksanteri Hämäläinen',
            loanSum: 4.00,
            infos: [
                'FI26 1234 2345 34',
                '+358 50 123 4567',
            ],
            id: 1,
        },
        {
            name: 'Teemu Teekkari',
            loanSum: 0.00,
            infos: [
                'FI12 3456 7890 12',
                '+358 50 987 6543',
            ],
            id: 2,
        },
        {
            name: 'Matti Meikäläinen',
            loanSum: -13.20,
            infos: [
                'FI11 2222 4444 55',
                '+358 50 111 2222',
            ],
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
