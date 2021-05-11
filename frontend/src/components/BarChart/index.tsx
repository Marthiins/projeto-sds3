import Chart from 'react-apexcharts';

//function BarChart() { declarar a função de outro modo
const BarChart = () => { //Essa função é com o Lambda
    
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = { //Criar dados de mentiras "dados estaticos"
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };
    
    
    return (
      <Chart 
      options ={{ ...options, xaxis: mockData.labels}}
      series={mockData.series} 
      type="bar"
      height="240"

      />
    );
}

export default BarChart;