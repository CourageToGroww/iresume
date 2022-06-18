let work_history

export default class Work_historyDAO{
    static async injectDB(conn){
        if(work_history){
            return
        }
        try{
            work_history=await conn.db(process.env.IRESUME_NS)
                .collection('work_history')
        }
        catch(e){
            console.error('unable to connect in Work_historyDAO: ${e}')
        }
    }
}