const MyModule = (function (){
    let privateValue = "I am Private!"

    function getMyPrivateValue(){
        console.log(privateValue)
    }

    return { publicMethod: function(){
      getMyPrivateValue();
    }}
})()

MyModule.publicMethod();

//observer 

class Subject{
    constructor(){
        this.observers = []
    }

 subscribe(observer){
    this.observers.push(observer)
 }

 unsubscribe(observer){
   this.observers = this.observers.filter((item)=>item!==observer)
 }

 notify(data){
  this.observers.forEach((observer)=>observer(data))
 }
}


const subject = new Subject();

function observer1(data){
 console.log("Observer 1 ", data)
}

function observer2(data){
  console.log("Observer 2", data)
}

subject.subscribe(observer1);
subject.subscribe(observer2);