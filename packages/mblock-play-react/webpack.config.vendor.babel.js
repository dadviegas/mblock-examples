import { join } from 'path'
import { use, build, configuration } from 'mblock-module'
import { entry, output, enviromnent, uglify, dllCreate, base } from 'mblock-module/plugins'

const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

use(
  entry({
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'semantic-ui-react'
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

