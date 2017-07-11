const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const ROOT_PATH   = path.resolve(__dirname, '..')
const SOURCE_FILE = path.resolve(ROOT_PATH, './src/main.scss')
const DIST_FILE   = path.resolve(ROOT_PATH, './dist/main.min.css')

const options = {
  file: SOURCE_FILE,
  outputStyle: 'nested' // options: nested, expanded, compact, compressed
}

sass.render(options, (error, result) => {
  if (error) {
    console.error(error)
  } else {
    fs.writeFile(DIST_FILE, result.css, (err) => {
      if (err) console.error(err)
    })
  }
})
