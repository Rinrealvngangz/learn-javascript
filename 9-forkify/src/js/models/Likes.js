export default class likes{
    constructor(){
        this.likes =[];
    }
    addlike(id,title,author,img){
        const like = {id,title,author,img};
        this.likes.push(like);

        // Perist data in localStorage
        this. persistData();
    }
    deletelike(id){
        const index = this.likes.findIndex(el=>el.id===id);
        this.likes.splice(index,1);
        // Perist data in localStorage
        this. persistData();
    }
    islike(id){
        return this.likes.findIndex(el=>el.id===id) !== -1 ;

    }
    getNumber(){
        return this.likes.length;
    }

    persistData(){
        localStorage.setItem('likes',JSON.stringify(this.likes));
    }
    readStorage(){
        const storage= JSON.parse(localStorage.getItem('likes'));
        
        // Restoring likes from the localStorage
        if(storage) this.likes=storage;
    }
}