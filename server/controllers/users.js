import { v4 as uuid } from "uuid";


let users = []

export const getUser = (req,res) =>{
    res.send(users);
} 

export const createUser = (req,res) =>{
    const user = req.body;
    users.push({...user, id:uuid()});
    res.send("User Added Successfully")
}

export const deleteUser = (req,res) =>{
    users = users.filter((user)=> user.id !== req.params.id);
    res.send("User deleted successfully")
}

export const editUser = (req,res) =>{
    const user = users.find((user) => user.id === req.params.id)

    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;

    res.send("User updated successfully");
}