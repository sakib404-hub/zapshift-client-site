import React from 'react';
import Logo from '../../Components/Logo/Logo';
import { IoIosHome } from "react-icons/io";
import { Outlet, useNavigate } from 'react-router';
import { SiMyget } from "react-icons/si";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaCreditCard, FaUsers } from 'react-icons/fa';
import { RiEBike2Fill } from 'react-icons/ri';
import useRole from '../../Hooks/useRole/useRole';
import { MdAssignmentInd } from 'react-icons/md';


const DashBoard = () => {
    const navigate = useNavigate();
    const { role } = useRole();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <TbLayoutSidebarLeftCollapseFilled className="my-1.5 inline-block size-6" />
                    </label>
                    <div className="px-4">
                        <Logo></Logo>
                    </div>
                </nav>
                {/* Page content here */}
                <div className="p-4">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <button
                                onClick={() => navigate('/')}
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <IoIosHome
                                    className="my-1.5 inline-block size-4" />
                                <span className="is-drawer-close:hidden">Homepage</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Percels">
                                {/* Settings icon */}
                                <SiMyget className="my-1.5 inline-block size-4" />
                                <span className="is-drawer-close:hidden">My Percels</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate('/dashboard/payment-history')}
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payment History">
                                {/* Settings icon */}
                                <FaCreditCard className="my-1.5 inline-block size-4" />
                                <span className="is-drawer-close:hidden">Payment History</span>
                            </button>
                        </li>
                        {
                            role === 'admin' && <li>
                                <button
                                    onClick={() => navigate('/dashboard/approve-riders')}
                                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Approve Riders">
                                    {/* Settings icon */}
                                    <RiEBike2Fill className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Approve Riders</span>
                                </button>
                            </li>
                        }
                        {
                            role === 'admin' && <li>
                                <button
                                    onClick={() => navigate('/dashboard/assign-riders')}
                                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Assign Riders">
                                    {/* Settings icon */}
                                    <MdAssignmentInd className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Assign Riders</span>
                                </button>
                            </li>
                        }
                        {
                            role === 'admin' && <li>
                                <button
                                    onClick={() => navigate('/dashboard/users-managements')}
                                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Users Management">
                                    {/* Settings icon */}
                                    <FaUsers className="my-1.5 inline-block size-4" />
                                    <span className="is-drawer-close:hidden">Users Management</span>
                                </button>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoard;