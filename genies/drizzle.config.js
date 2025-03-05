/** @type {import ("drizzle-kit").Config} */
export default{
    schema: "./utils/schema.tsx",
    dialect:'postgresql',
    dbCredentials: {
        url: 'postgresql://AI-Content-Generator_owner:npg_bomUzg7sX1tn@ep-plain-frog-a56oqto3-pooler.us-east-2.aws.neon.tech/Content-creator?sslmode=require'
    },

}