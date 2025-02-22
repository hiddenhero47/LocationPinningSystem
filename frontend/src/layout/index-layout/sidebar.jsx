import React from "react";
import {
    SidebarSell,
    RoutersBox,
    Options,
    RoutersBoxFoot,
    OptionsFoot,
} from "./index.style";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiFillHome } from "react-icons/ai";
// import { IoIosSettings } from "react-icons/io";
// import { TbListDetails } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slice/auth";
import { setTheme } from "../../store/slice/app-theme";
import { getFromLocalStorage } from "../../utilities/basicFunctions";


function Sidebar({ close }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
	const location = useLocation();

    const Logout = async () => {
        const myThemes = getFromLocalStorage("appThemes") || "dark";
        await navigate("/auth");
        dispatch(logout());
        localStorage.clear();
        dispatch(setTheme(myThemes));
    };

    const handelClose = () => {
        if (close) {
            close();
        }
    };

    return (
        <>
            <SidebarSell>
                <div className="wrapper">
                    <RoutersBox className="border-b-[2px] border-solid border-search-borderColor pb-[5px]">
                        <Options>
                            <Link
                                to="/dashboard"
                                className={
                                    location.pathname === "/dashboard"
                                        ? "bg-sidebar-bgActive text-sidebar-textActive"
                                        : "hover:text-sidebar-textHover text-sidebar-text"
                                }
                                onClick={handelClose}
                            >
                                <i>
                                    <MdDashboard size={24} />
                                </i>
                                <span>Dashboard</span>
                            </Link>
                        </Options>

                        {/* <Options>
                            <Link
                                to="/dashboard/users"
                                className={
                                    location.pathname.startsWith("/dashboard/users")
                                        ? "bg-sidebar-bgActive text-sidebar-textActive"
                                        : "hover:text-sidebar-textHover text-sidebar-text"
                                }
                                onClick={handelClose}
                            >
                                <i>
                                    <TbListDetails size={24} />
                                </i>
                                <span>Users</span>
                            </Link>
                        </Options> */}
                    </RoutersBox>

                    <RoutersBoxFoot>
                        {/* <Options>
                            <Link
                                to="/dashboard/settings"
                                className={
                                    location.pathname.startsWith("/settings")
                                        ? "bg-sidebar-bgActive text-sidebar-textActive"
                                        : "hover:text-sidebar-textHover text-sidebar-text"
                                }
                                onClick={handelClose}
                            >
                                <i>
                                    <IoIosSettings size={24} />
                                </i>
                                <span>settings</span>
                            </Link>
                        </Options> */}

                        <OptionsFoot>
                            <button
                                onClick={() => Logout()}
                                className="hover:text-sidebar-textHover text-sidebar-text"
                            >
                                <i>
                                    <BiLogOut size={24} />
                                </i>
                                <span>Log out</span>
                            </button>
                        </OptionsFoot>
                    </RoutersBoxFoot>
                </div>
            </SidebarSell>
        </>
    );
}

export default Sidebar;
