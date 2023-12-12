import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/data.js';

async function callAPI(id) {

    let mockData = false;
    if (!mockData) {
        let result = await fetchAll(id);
        let formatedData = formatData(result);
        return formatedData;
    } else if (mockData) {
        let result = await fetchMock(id);
        let formatedData = formatData(result);
        return formatedData;
    }
};

function formatData(data) {

    let clone = JSON.parse(JSON.stringify(data));

    let keys = Object.keys(clone[0].data);

    const daysMapping = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D"
    };
    const capitalize = s => s && s[0].toUpperCase() + s.slice(1);
    const kindMapping = clone[3].data.kind;

    if (keys[2] === 'score') {
        clone[0].data.todayScore = clone[0].data.score;
        delete clone[0].data.score;
    }

    clone[1].data.sessions = clone[1].data.sessions.map(session => {
        const dayPart = session.day.split('-')[2];
        const dayWithoutLeadingZero = String(parseInt(dayPart, 10));
        return {
            ...session,
            day: dayWithoutLeadingZero
        };
    });

    clone[2].data.sessions = clone[2].data.sessions.map(session => {
        const dayAbbreviation = daysMapping[session.day];
        return {
            ...session,
            day: dayAbbreviation
        };
    });

    clone[3].data.data = clone[3].data.data.map(dataPoint => {
        return {
            ...dataPoint,
            kind: capitalize(kindMapping[dataPoint.kind.toString()])
        };
    });

    return clone;
}

function fetchAll(id) {
    let urls = [
        `http://localhost:3000/user/${id}`,
        `http://localhost:3000/user/${id}/activity`,
        `http://localhost:3000/user/${id}/average-sessions`,
        `http://localhost:3000/user/${id}/performance`
    ];

    return (Promise.all(urls.map(url => fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error fetching data:', error)))
    ));
}

function fetchMock(id) {
    const numericId = Number(id);

    const userMainData = USER_MAIN_DATA.find(user => user.data.id === numericId);
    const userActivity = USER_ACTIVITY.find(activity => activity.data.userId === numericId);
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(session => session.data.userId === numericId);
    const userPerformance = USER_PERFORMANCE.find(performance => performance.data.userId === numericId);

    return Promise.all([
        Promise.resolve(userMainData),
        Promise.resolve(userActivity),
        Promise.resolve(userAverageSessions),
        Promise.resolve(userPerformance)
    ]);
}

export default callAPI;