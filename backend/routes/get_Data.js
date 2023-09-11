const graph_data = require('../model/graph_data')
const moment = require('moment')

module.exports = async function (req, res) {



    const get_Data = await graph_data.find({}).select('total_kwh createdAt algo_status').then((data) => {

        // console.log(data)
        let finaldata = {}

        for (let x in data) {

            const date = moment(data[x].createdAt).utc().format('ll')
            let kwh = data[x].total_kwh
            let status = data[x].algo_status


            // if not include in the finaldata
            if (finaldata[date] == undefined) {
                if (kwh == parseFloat(0)) {
                    finaldata[date] = {
                        active: 0,
                        inactive: 0
                    }
                }
                else {
                    if (status == 1) {
                        finaldata[date] = {
                            active: parseFloat(kwh),
                            inactive: 0
                        }
                    }
                    else {
                        finaldata[date] = {
                            active: 0,
                            inactive: parseFloat(kwh)
                        }
                    }
                }
            }
            //if already included
            else {
                if (status == 1) {
                    finaldata[date].active += parseFloat(kwh)
                }
                else {
                    finaldata[date].inactive += parseFloat(kwh)


                }
            }

        }


        return res.send(finaldata)

    })
}
