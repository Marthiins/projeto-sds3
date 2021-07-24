import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/request';

type SeriesData = {
    name: string;
    data: number[];
}


type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

//function BarChart() { declarar a função de outro modo
const BarChart = () => { //Essa função é com o Lambda

    const [chartData, setChartData] = useState<ChartData>({ //usar o useState para guardar o Chardata 
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => { // resposta quando chegar com sucesso
                const data = response.data as SaleSucess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1)); //usei o round para format o numero

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucess",
                            data: mySeries
                        }
                    ]
                });
            });
    }, []);


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

   /* const mockData = { //Criar dados de mentiras "dados estaticos"
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };*/


    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"

        />
    );
}

export default BarChart;