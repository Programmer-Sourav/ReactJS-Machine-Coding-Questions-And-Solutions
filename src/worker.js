export default () =>{
  /* eslint-disable-next-line no-restricted-globals */
  self.addEventListener('message', e=>{
    if(!e)
    return;

    let {users, type} = e.data;

    if(type === "ASC"){
       users = users.sort((a,b)=>(a.commentCount - b.commentCount))
    }
    else{
      users = users.sort((a, b)=>(b.commentCount - a.commentCount))
    }
    postMessage(users)
  })
}