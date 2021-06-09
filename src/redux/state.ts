export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}





let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\' my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it?'},
            {id: 3, message: 'I\'m fine'},
            {id: 4, message: 'How are you?'},
        ],
        dialogs: [
            {id: 1, name: 'Света'},
            {id: 2, name: 'Игорь'},
            {id: 3, name: 'Иван'},
            {id: 4, name: 'Петя'},
            {id: 5, name: 'Саша'},
            {id: 6, name: 'Виктор'},
        ]
    }
}

export default state;