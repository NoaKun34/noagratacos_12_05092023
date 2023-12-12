const USER_MAIN_DATA = [
    {data:
    {
        id: 12,
        userInfos: {
            firstName: 'John',
            lastName: 'Doe',
            age: 31,
        },
        todayScore: 0.45,
        keyData: {
            calorieCount: 3200,
            proteinCount: 233,
            carbohydrateCount: 312,
            lipidCount: 22
        }
    },},
    {data:
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.89,
        keyData: {
            calorieCount: 2000,
            proteinCount: 57,
            carbohydrateCount: 179,
            lipidCount: 113
        }
    }},
]

const USER_ACTIVITY = [
    {data:
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 230
            },
            {
                day: '2020-07-02',
                kilogram: 70,
                calories: 200
            },
            {
                day: '2020-07-03',
                kilogram: 71,
                calories: 290
            },
            {
                day: '2020-07-04',
                kilogram: 71,
                calories: 299
            },
            {
                day: '2020-07-05',
                kilogram: 70,
                calories: 180
            },
            {
                day: '2020-07-06',
                kilogram: 68,
                calories: 130
            },
            {
                day: '2020-07-07',
                kilogram: 66,
                calories: 450
            }
        ]
    },},
    {data:
    {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }},
]


const USER_AVERAGE_SESSIONS = [
    {data:
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },},
    {data:
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }},
]


const USER_PERFORMANCE = [
    {data:
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },},
    {data:
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }},
]



module.exports = {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
}