async function generateChartData() {

    let chartData = []
    let date = new Date(2020);
    let confirmed = 0;
    // let recovered = 0;
    let deaths = 0;

    const api_url = 'https://covid19.mathdro.id/api/daily'

    async function getData() {
        try {
            const response = await fetch(api_url)
            const data = await response.json()
            // console.log('data', data)
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    date = new Date(data[i].reportDate)
                    confirmed = data[i].confirmed.total
                    deaths = data[i].deaths.total

                    document.getElementById('figures').textContent = date
                    chartData.push({
                        date: date,
                        confirmed: confirmed,
                        deaths: deaths
                    }) // END PUSH METHOD
                } // END FOR LOOP
            } else {
                document.getElementById('figures').textContent = 'Loading...'

            }
            console.log('chartDataInner', chartData)

        } catch (error) {
            console.log(error)
        }
    }
    console.log('chartData', chartData)

    getData()

}

generateChartData()