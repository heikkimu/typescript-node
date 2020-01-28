enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.INFO;

function LogMethod(level: LoggingLevel): Function {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        // console.log(target)
        // console.log(propertyKey)
        // console.log(descriptor)

        const originalFunction: Function = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (level <= loggingLevel) {
                console.log(`>> ${propertyKey} ${JSON.stringify(args)}`)
            }
            originalFunction.apply(this, args)
        }
    }
}

class Database {
    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    save(data: any) {
        // console.log(`Saving ${this.name}: ${JSON.stringify(data)}`);
    }
}

const db = new Database();

db.save({ message: 'Hello' })


// Class decorators

function registerOrmModel(model: Function) {
    // console.log(`registering ORM-models: ${model}`)
}
function Entity(tableName: string) {
    return (target: Function, ) => {
        registerOrmModel(target);
    }

}

function Column(columnName: string){
    return (target:any, propertyKey:string) => {
        console.log(target);
    }
}


@Entity("TODOSs")
class Todo {

    @Column('DESC')
    description: string = '';
    done: boolean = false;
}