const nodeFetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = async (req, res) => {
  try {
    const result = await nodeFetch(req.query.url)
    const body = await result.text()
    const $ = cheerio.load(body)

    const obj = {
      title:       $('title').text(),
      description: $('meta[name="description"]').attr('content'),
      og_image:    $('meta[property="og:image"]').attr('content'),
    }
    res.json(obj)
    res.end()
  } catch (error) {
    console.log({error})
    res.json({info: 'error'})
    res.end()
  }
}
