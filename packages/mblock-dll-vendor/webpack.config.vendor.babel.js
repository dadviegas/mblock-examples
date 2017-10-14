import { join } from 'path'
import { use, build } from 'mblock-module'
import { base, entry, output, enviromnent, uglify, dllCreate } from 'mblock-module/plugins'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

use(
  entry({
    vendor: [
      'react',
      'react-dom'
    ]
  }),
  output({
    filename: '[name].js',
    path: outputPath,
    library: '[name]',
  }),
  enviromnent(),
  uglify(),
  dllCreate({
    name: '[name]',
    path: join(outputPath, '[name].json')
  }),
  base({
    context: sourcePath
  })
)

export default build

