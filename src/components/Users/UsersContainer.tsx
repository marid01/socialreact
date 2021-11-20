import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootStateType } from "../../redux/redux-store";
import { Users } from "./Users";
import {
  followAC, setCurrentPageAC,
  setUsersAC, setUsersTotalCountAC,
  unfollowAC,
  UserType,
} from "../../redux/usersReducer";
// IMPORTS

type MapStatePropsType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number
};
type MapDispatchPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (pageNumber: number) => void;
  setTotalUsersCount: (totalCount: number) => void
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;
// TYPES

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber : number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount : number) => {
      dispatch(setUsersTotalCountAC(totalCount))
    }
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
