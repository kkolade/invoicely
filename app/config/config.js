import { config } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env file in the root directory
config({ path: path.resolve(__dirname, '../../.env') })

const cfg = {
  development: {
    env: 'development',
    port: process.env.PORT || 5050,
    dir: {
      root: __dirname,
      static: `${path.resolve(__dirname, '../../', process.env.STATIC_DIR)}`,
      views: `${path.resolve(__dirname, '../', process.env.VIEWS_DIR)}`,
    },
    db: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
      // Add other configuration options as needed
      // url: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    },
  },
  production: {
    env: 'production',
    port: process.env.PORT || 8000,
    dir: {
      root: __dirname,
      static: `${path.resolve(__dirname, '../', process.env.STATIC_DIR)}`,
      views: `${path.resolve(__dirname, '../', process.env.VIEWS_DIR)}`,
    },
    db: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      url: process.env.DB_URL,
      dialect: process.env.DB_DIALECT,
    },
  },
  test: {
    env: 'test',
    port: process.env.PORT || 4050,
    dir: {
      root: __dirname,
      static: `${path.resolve(__dirname, '../', process.env.STATIC_DIR)}`,
      views: `${path.resolve(__dirname, '../', process.env.VIEWS_DIR)}`,
    },
    db: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      url: process.env.DB_URL,
      dialect: process.env.DB_DIALECT,
    },
  },
}

export default cfg
