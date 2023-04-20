import { useState } from "react";

const CommentsContainer = () => {
    const commentData = [{
        comment: "lorem Ispem dolar siras.d",
        name: "Nitin",
        id: 1,
        replies: [{
            comment: "lorem Ispem dolar siras.d",
            name: "Nitin",
            id: 11,
            replies: []
        }]
    },
    {
        comment: "lorem Ispem dolar siras.d",
        name: "Sikki",
        id: 2,
        replies: [{
            comment: "H T dolar siras.d",
            name: "Harry",
            id: 22,
            replies: []
        }]
    },
    {
        comment: "lorem Ispem dolar siras.d lorem Ispem dolar siras.d",
        name: "Dev",
        id: 3,
        replies: [{
            comment: "lorem Ispem dolar siras.d",
            name: "Nitin",
            id: 33,
            replies: []
        }]
    }];
    const [comments, setComments] = useState(commentData);

    const getMapData = (temp, parentId, data) => {
        temp.map((curr) => {
            if (curr.id === parentId) {
                curr.replies.push({ ...data, id: Math.random() });
            }
            else if (curr.replies.length > 0) {
                getMapData(curr.replies, parentId, data);
            }
        });
        return temp
    };

    const handleReply = (msg, name, parentId) => {
        let commentsDataItems = [...comments];
        let data = getMapData(commentsDataItems, parentId, { id: Math.random(), comment: msg, replies: [], name: name })
        setComments(data);
    }



    const Comment = ({ data, index }) => {
        const [showReply, setShowReply] = useState(false);
        const [reply, setReply] = useState('')
        return (
            <div className="p-2 border-black bg-gray-50 shadow-md rounded-sm mb-2 flex items-start justify-start">
                <img
                    src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png"
                    alt="User Icon - Member Icon Png, Transparent Png@kindpng.com"
                    className="h-5"
                />
                <div className="ml-2 font-medium text-xs">{data?.name}<br />
                    <p className="font-light text-xs">{data?.comment}</p>
                    {!showReply && <><br /><span className="text-xs p-0 cursor-pointer font-light" onClick={() => setShowReply(data.id)}>Reply</span></>}
                    {
                        showReply === data.id &&
                        <div className="flex">
                            <input type="text" value={reply} onChange={(e) => setReply(e.target.value)} className="block p-2 w-fit border mr-2 border-black mt-2" />
                            <button onClick={() => handleReply(reply, "Hatim", data.id)}>Reply</button>
                        </div>
                    }
                </div>
            </div>
        )
    }

    const CommentList = ({ commentsList }) => {
        return <>        {commentsList?.map((item, id) => (
            <div key={item.id}>
                <Comment data={item} index={id} />
                <div className="pl-5 border-l-2 border-black ml-5">
                    <CommentList commentsList={item.replies} />
                </div>
            </div>
        ))}

        </>

    }

    return (
        <div className="mt-2" >
            <h3 className="text-xl font-bold">Comments:</h3>
            <CommentList commentsList={comments} />
        </div>
    )
}

export default CommentsContainer