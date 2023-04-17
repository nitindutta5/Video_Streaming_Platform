const CommentsContainer = () => {
    const comments = [{
        comment: "lorem Ispem dolar siras.d",
        name: "Nitin",
        replies: [{
            comment: "lorem Ispem dolar siras.d",
            name: "Nitin",
            replies: [{
                comment: "lorem Ispem dolar siras.d",
                name: "Nitin",
                replies: [{
                    comment: "lorem Ispem dolar siras.d",
                    name: "Nitin",
                    replies: []
                }]
            }]
        }]
    },
    {
        comment: "lorem Ispem dolar siras.d",
        name: "Sikki",
        replies: [{
            comment: "H T dolar siras.d",
            name: "Harry",
            replies: [{
                comment: "Ok Ispem dolar siras.d",
                name: "Harmant",
                replies: [{
                    comment: "lorem Ispem dolar siras.d",
                    name: "DEB",
                    replies: []
                }]
            }]
        }]
    },
    {
        comment: "lorem Ispem dolar siras.d lorem Ispem dolar siras.d",
        name: "Dev",
        replies: [{
            comment: "lorem Ispem dolar siras.d",
            name: "Nitin",
            replies: []
        }]
    }];

    const Comment = ({ data }) => {
        return (
            <div className="p-2 border-black bg-gray-50 shadow-md rounded-sm mb-2">
                <div className="flex align-center justify-start">
                    <img
                        src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png"
                        alt="User Icon - Member Icon Png, Transparent Png@kindpng.com"
                        className="h-5"
                    />
                    <div className="ml-2 font-medium text-xs">{data?.name}<br />
                        <p className="font-light text-xs">{data?.comment}</p>
                    </div>
                </div>

            </div>
        )
    }

    const CommentList = ({ commentsList }) => {
        return <>        {commentsList?.map((item, id) => (
            <div>
                <Comment key={id} data={item} />
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