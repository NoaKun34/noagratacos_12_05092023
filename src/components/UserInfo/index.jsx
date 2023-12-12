import { useEffect, useState } from 'react';
import ChartContainer from '../Charts/ChartContainer'
import FoodContainer from '../Food/FoodContainer'
import CallAPI from './../CallAPI';
import './UserInfo.css'

function UserInfo() {
    let defaultArray = [];
    const [data, setData] = useState(defaultArray);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await CallAPI(idParam);
                setData(result);
                setLoading(false);
            } catch (error) {
                console.log("Failed to fetch:");
                setLoading(false);
                setError(true);
            }
        }

        fetchData();
    }, [idParam]);

    const firstName = data[0]?.data?.userInfos?.firstName;

    if (loading) {
        return (
            <div className='loading'>Loading</div>
        )
    }

    if (error) {
        return (
            <div className='error'>Erreur revenez plus tard</div>
        )
    }

    return !loading && (
        <div className='userInfo'>
            <h1 className='userInfoName'>Bonjour <b className='userInfoNameVar'>{firstName}</b></h1>
            <p className='userInfoText'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='dataContainer'>
                <ChartContainer chartData1={data[1]} chartData2={data[2]} chartData3={data[3]} chartData4={data[0]} />
                <FoodContainer data={data[0]?.data?.keyData} />
            </div>
        </div>
    );
};

export default UserInfo;