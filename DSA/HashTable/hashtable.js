class HashTable{
    constructor(size){
        this.size = size;
        this.count = 0;
        this. table = new Array(size);
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const existing = bucket.find(item => item[0] === key);
            if(existing){
                existing[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }else{
            this.table[index] = [[key,value]];
        }
        this.count++;
        if(this.count / this.size > 0.7){
            this.reSize();
        }
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const itemIndex = bucket.findIndex(item => item[0] === key);
            if(itemIndex !== -1){
                bucket.splice(itemIndex,1);
                this.count--;
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const existing = bucket.find(item => item[0] === key);
            if(existing){
                return existing[1];
            }
        }else{
            return undefined;
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i," : ",this.table[i]);
            }
        }
    }

    getSize(){
        return this.size;
    }

    reSize(){
        const newSize = this.size * 2;
        const newTable = new HashTable(newSize);
        const oldTable = this.table;
        this.table = newTable.table;
        this.size = newSize;
        this.count = 0;
        for(let bucket of this.table){
            if(bucket){
                for(let [key,value] of bucket){
                    this.set(key,value);
                }
            }
        }
    }
}

const ht = new HashTable(50)
ht.set("astin","Aston martin")
ht.set("bntl","Bently")
ht.set("cadil","Cadilac")
ht.set("dg","Dodge")
ht.set("fr","Ferrari")
ht.set("er1","Entevour")
ht.set("er2","Mercedes")
ht.set("er3","Mercedes S Class")
ht.display()
console.log("Size of table : ",ht.getSize())
ht.reSize()
console.log("Size of table : ",ht.getSize())