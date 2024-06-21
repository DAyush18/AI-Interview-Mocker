/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:FlY1AsRM0dVJ@ep-muddy-cell-a5c46ljg.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };