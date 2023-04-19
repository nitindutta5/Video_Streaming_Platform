const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center mb-2 first:mt-auto shadow-sm p-2">
            <img
                src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png"
                alt="User Icon - Member Icon Png, Transparent Png@kindpng.com"
                className="h-4" />
            <div className="mr-2 ml-2 font-semibold text-sm">{name}</div>
            <p className="text-sm font-normal">{message}</p>
        </div>
    )
}

export default ChatMessage