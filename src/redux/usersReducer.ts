type PhotosType = {
    small: string;
    large: string;
};
export type UserType = {
    id: number;
    name: string;
    status: string;
    followed: boolean;
    photos: PhotosType;
};
type UsersInitialStateType = typeof usersInitialState;
type UsersReducerActionTypes =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>;
// TYPES

export const followAC = (userID: number) => ({type: FOLLOW, userID,} as const);
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID,} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users,} as const);
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage,} as const);
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount,} as const);

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const usersInitialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};
export const usersReducer = (
    usersState: UsersInitialStateType = usersInitialState,
    action: UsersReducerActionTypes
): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...usersState,
                users: usersState.users.map((user) =>
                    //@ts-ignore
                    user.id === action.userID ? {...user, followed: true} : user
                ), // also copying USER to be changed
            };

        case UNFOLLOW:
            return {
                ...usersState,
                users: usersState.users.map((user) =>
                    //@ts-ignore
                    user.id === action.userID ? {...user, followed: false} : user
                ),
            };

        case SET_USERS:
            //@ts-ignore
            return {...usersState, users: action.users};

        case SET_CURRENT_PAGE:
            return {...usersState, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...usersState, totalUsersCount: action.count};

        default:
            return usersState;
    }
};
