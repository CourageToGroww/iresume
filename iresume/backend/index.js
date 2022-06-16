import app from './server.js'
import mongdb from "mongodb"
import dotenv from "dotenv"

async function main(){

    dotenv.config()

        const client=new mongdb.MongoClient(
            process.env.IRESUME_DB_URI
        )
        const port=process.env.PORT || 8000

        try{
            //Connect to MongoDB cluster
            await client.connect()

            app.listen(port,()=>{
                console.log('server is running on port:'+port);
            })
        } catch(e) {
            console.error(e);
            process.exit(1)
        }
}
main().catch(console.error);