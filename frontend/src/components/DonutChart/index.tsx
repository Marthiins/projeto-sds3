import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSun } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    series: number[];
    labels: string[];
}


//function DonutChart() { declarar a função de outro modo
const DonutChart = () => { //Essa função é com o Lambda

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => { // resposta quando chegar com sucesso
                const data = response.data as SaleSun[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });

            });

    }, []);


    /* const mockData = {  //Criar dados de mentiras "dados estaticos"
       //   series: [477138, 499928, 444867, 220426, 473088], //Array de numeros
       //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
      }*/

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"

        />
    );
}

export default DonutChart;