// ES7 Snippets
import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

{/* Functional components do not have a ref, 
    which is needed by Flip Move to work. 
    To make it work you need to wrap your functional 
    component into React.forwardRef and pass it down 
    to the first element which accepts refs, 
    such as DOM elements or class components:
 */}

const Message = forwardRef(({message, username }, ref) => {
   const isUser = username === message.username;

    return (

        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Uknown user'}:`} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
