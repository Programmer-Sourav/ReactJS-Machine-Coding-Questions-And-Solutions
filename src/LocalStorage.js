
const myLocalStorage = () =>{
    const myStore = {  
       storage: window.localStorage 
    }

    return {
        setItem : (key, value, expiry) =>{
            const currentDate = new Date()

            const data = {
                val: value,
                expiryTime: currentDate.getTime() + expiry
            }

            console.log(222, data);
            myStore.storage.setItem(key, JSON.stringify(data))
        },

        getItem : (key) =>{
            const currentTime = new Date().getTime();
            console.log(111, currentTime)
            const data = JSON.parse(myStore.storage.getItem(key))
            
        }
    }
}