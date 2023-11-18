"use client"
import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Chip,
    Tooltip,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    Button
} from "@nextui-org/react";
import { EditIcon, DeleteIcon, EyeIcon } from '../icons/Icons';
import { DeleteModal } from '../../modal/DeleteModal';

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const columns = [
    { name: "NAME", uid: "name", label: "Name" },
    { name: "EMAIL", uid: "email", label: "Email" },
    { name: "TEAM", uid: "team", label: "Team" },
    { name: "CREATE", uid: "createdAt", label: "Create At" },
    { name: "Action", uid: "actions", label: "Actions" },
]

export const UserTable = () => {

    const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for deletion
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/admin/user');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(users);

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };

    const renderCell = React.useCallback((item, columnKey) => {
        const cellValue = users[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: item.avatar }}
                        description={item.name}
                        name={item.name}
                    >
                    </User>
                );
            case "team":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{item.team}</p>
                    </div>
                );
            case "email":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm lowercase">{item.email}</p>
                    </div>
                );
            case "createdAt":
                return (
                    <Chip className="capitalize" color={statusColorMap[item.createdAt]} size="sm" variant="flat">
                        {item.createdAt}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <Button className='bg-transparent'>
                                    <EditIcon />
                                </Button>
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={() => handleDeleteClick(item)}>
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div >
                );
            default:
                return item[columnKey];
        }
    }, [users, handleDeleteClick]);

    return (
        <>
            <Table aria-label="User Admin Column">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item._id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {selectedUser && (
                <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onOpenChange={closeDeleteModal}
                    user={selectedUser}
                />
            )}
        </>
    );
}

