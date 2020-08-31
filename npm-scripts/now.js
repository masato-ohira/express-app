const moment = require('moment')
const fs = require('fs-extra')

const main = () => {
  const datetime = moment().format('YYYY-MM-DD HH:mm:ss')
  const distDir = './dist/json'
  const fileName = `${distDir}/now.json`
  fs.mkdirsSync(distDir)
  fs.writeFile(fileName, JSON.stringify({datetime}, null, 2))
}

main()
