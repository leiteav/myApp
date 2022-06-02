import '@capacitor-community/sqlite';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, from, of } from 'rxjs';
import { JsonSQLite } from '@capacitor-community/sqlite';
import dbCoffeApp from './database';

const { CapacitorSQLite, Device, Storage } = Plugins;

const DB_SETUP_KEY = 'first_db_setup';
const DB_NAME_KEY = 'db_name';

export class DatabaseService {
    dbReady = new BehaviorSubject(false);
    dbName = '';

    constructor(){};

    async init(): Promise<void>{
        const info = await Device.getInfo();

        if(info.platform == 'android'){
            try{
                const sqlite = CapacitorSQLite as any;
                await sqlite.requestPermissions();
                this.setupDatabase();
            }catch(err){
                const msg = ({
                    header: 'No DB access',
                    message: 'Não foi possível acessar DB local.',
                    butttons: ['Ok']
                });
                alert(msg);
            }
        }else{
            this.setupDatabase();
        }
    }

    private async setupDatabase(){
        const dbSetupDone = await Storage.get({key: DB_SETUP_KEY});

        if(!dbSetupDone.value)
            this.setDatabase();
        else{
            this.dbName = (await Storage.get({key: DB_NAME_KEY })).value;
            await CapacitorSQLite.open({ database: this.dbName });
            this.dbReady.next(true);
        }    
    }

    private setDatabase(update = false){
        const isValid = await CapacitorSQLite.isJsonValid({dbCoffeApp});

        if(isValid.result){
            this.dbName = dbCoffeApp.database;
            await Storage.set({ key: DB_NAME_KEY, value: this.dbName });
            await CapacitorSQLite.importFromJson ({ dbCoffeApp });
            await Storage.set({ key: DB_SETUP_KEY, value: '1'});
            
            if(!update){
                await CapacitorSQLite.createSyncTable();
            }else{
                await CapacitorSQLite.setSyncDate({ syncdat: '' + new Date().getTime() })
            }
            this.dbReady.next(true);
        }
    }
}