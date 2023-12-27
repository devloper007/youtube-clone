import React, { useEffect ,useState} from 'react';
import LiveCommentCard from './LiveCommentCard';
import { generateName, generateRandomString } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChat } from '../utils/chatSlice';

const LiveComments = () => {
  const [myComment, setMyComment] = useState("");
  const dispatch = useDispatch();
  const {chatInfo} = useSelector(state => state.chat);
  useEffect(()=>{
    const interval = setInterval(()=>{
      const name = generateName();
      const randomString = generateRandomString(50);
      dispatch(addNewChat({name:name, comment:randomString}));
    },1500);
    return () => clearInterval(interval);
  },[])

const addChat = async() =>{
  dispatch(addNewChat({name:"Rakesh Seervi", comment:myComment}));
}

  return (
  <>
    <div className="flex flex-col-reverse h-[450px] overflow-y-scroll overflow-x-hidden custom-scrollbar">
      {chatInfo.map((c,i) =>(<LiveCommentCard name={c.name} comment={c.comment} key={i}/>))}
     </div>
    <div className='flex items-center mx-auto'>
    <form className="w-full" onSubmit={(e)=>{
      e.preventDefault();
      console.log('e',e);
      addChat();
      setMyComment("");
    }}>
      <input className="px-2 py-1 border-b-2 text-sm focus:outline-none w-3/4 mr-2" placeholder="Type Here" value={myComment} onChange={(e)=>setMyComment(e.target.value)}></input>
      <button className="bg-teal-300 rounded-md px-2 py-1">send</button>
    </form>
    </div>
  </>
  )
  
}

export default LiveComments