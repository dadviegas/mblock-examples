import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { use, build } from 'mblock-module'
import { hotReload } from 'mblock-react/plugins'
import {
  base,
  babel,
  entry,
  output,
  enviromnent,
  resolve,
  extractCss,
  file,
  uglify,
  commonsChunk,
  html,
  devServer,
  dllReference,
  compression
} from 'mblock-module/plugins'


const sourcePath = join(__dirname, 'src')
const outputPath = join(__dirname, 'dist')

use(
  babel(),
  hotReload(),
  entry({
    index: [
      './index'
    ]
  }),
  output({
    path: outputPath,
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/'
  }),
  enviromnent(),
  resolve({ mainFields: [ 'web', 'browser', 'module', 'jsnext:main', 'style', 'main' ] }),
  extractCss({ filename: 'style.css' }),
  file(),
  uglify(),
  html({
    title: 'React Boilerplate',
    template: join(__dirname, 'src', 'index.ejs'),
  }),
  devServer(),
  dllReference({
    manifest: require(join(outputPath, 'vendor.json'))
  }),
  base({
    context: sourcePath
  }),
  compression()
)

export default build
