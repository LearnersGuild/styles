const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')
const SOURCE_NAME = 'base'
const DIST_FONT_PATH = '/assets/fonts/'

const inputSCSS = `
$fonts-path: "${DIST_FONT_PATH}"; // override default for dist

@import "${SOURCE_NAME}";
`

const outputStyles = [
  'nested',
  'compressed',
]

const outFileName = (outputStyle) => {
  return outputStyle === 'compressed' ?
    `${SOURCE_NAME}.min.css` :
    `${SOURCE_NAME}.css`
}

outputStyles.forEach((outputStyle) => {
  const outFile = path.resolve(DIST_PATH, outFileName(outputStyle))

  const options = {
    data: inputSCSS,
    outFile,
    outputStyle,
    includePaths: [SRC_PATH]
  }

  sass.render(options, (error, result) => {
    if (error) return console.error(error)

    fs.writeFile(outFile, result.css, function(err) {
      if (error) return console.error(error)
      console.log(`Compiled ${SOURCE_NAME}.scss => ${outFile}`)
    })
  })
})
