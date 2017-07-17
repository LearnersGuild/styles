const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const ROOT_PATH = path.resolve(__dirname, '..')

const config = {
  sources: [
    'base',
  ],
  outputStyles: [
    'nested',
    'compressed',
  ],
}

const outFileName = (source, outputStyle) => {
  return outputStyle === 'compressed' ?
    `${source}.min.css` :
    `${source}.css`
}

config.sources.forEach((source) => {
  config.outputStyles.forEach((outputStyle) => {
    const file = path.resolve(ROOT_PATH, 'src', `${source}.scss`)
    const outFile = path.resolve(ROOT_PATH, 'dist', outFileName(source, outputStyle))

    const options = { file, outFile, outputStyle }

    sass.render(options, (error, result) => {
      if (error) return console.error(error)

      fs.writeFile(outFile, result.css, function(err) {
        if (error) return console.error(error)
        console.log(`Compiled ${file} => ${outFile}`)
      })
    })
  })
})
