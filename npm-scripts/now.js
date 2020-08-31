const moment = require('moment')
const fs = require('fs-extra')
const _ = require('lodash')
const PromiseFtp = require('promise-ftp')

const distDir = './dist/json'
const nowJson = `${distDir}/now.json`

require('dotenv').config()

const main = async () => {
  const ftp = new PromiseFtp()
  try {
    const datetime = moment().format('YYYY-MM-DD HH:mm:ss')
    fs.mkdirsSync(distDir)
    fs.writeFileSync(nowJson, JSON.stringify({datetime}, null, 2))

    await ftp.connect({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
    })
    await ftp.cwd('/json')
    const input = fs.createReadStream(nowJson)
    await ftp.put(input, 'now.json')

    console.log(`uploaded ${nowJson}`)

    ftp.end()
  } catch (error) {
    console.error({error})
    ftp.end()
  }
}

main()
