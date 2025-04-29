import React, { useState } from "react";

import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { updateUserApi } from "../services/allApi";
//   import { XMarkIcon } from "@heroicons/react/24/outline";

const EditUser = ({ user,userOnLoad }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [editData, setEditData] = useState({
    userName: "",
    email: "",
    age: "",
    dob: "",
    phone: "",
    place: "",
    bloodGroup: "",
    photo: "",
  });
  console.log(editData);

  const handleEdit = async () => {
    const reqBody = new FormData();
    reqBody.append("userName",editData.userName);
    reqBody.append("email", editData.email);
    reqBody.append("age",editData.age);
    reqBody.append("dob", editData.dob);
    reqBody.append("phone", editData.phone);
    reqBody.append("place", editData.place);
    reqBody.append("bloodGroup", editData.bloodGroup);
    reqBody.append("photo", editData.photo);

    console.log(reqBody)

    try {
      const token = sessionStorage.getItem("token");
      if (token != " ") {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
        const result = await updateUserApi(reqBody, reqHeader);

        console.log(result.data)
        if(result.status == 200){
          sessionStorage.setItem("user",JSON.stringify(result.data))
        }
       
      }
    } catch (err) {
      console.log(err.message);
    }
    userOnLoad()

    handleOpen()
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <i className="fa-regular fa-pen-to-square hover:bg-slate-800 hover:text-white px-2 py-1 rounded"></i>
      </Button>
      <Dialog open={open} handler={handleOpen} className="p-4">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Edit Data
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <span className="h-4 w-4 stroke-2 ">x</span>
          </IconButton>
        </DialogHeader>

        <DialogBody className="flex gap-7 space-y-4 pb-6">
          <div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. White Shoes"
                defaultValue={user.userName}
                name="name"
                onChange={(e) =>
                  setEditData({ ...editData, userName: e.target.value })
                }
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                email
              </Typography>
              <Input
                color="gray"
                size="lg"
                defaultValue={user.email}
                name="name"
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className=" text-left font-medium"
              >
                Blood Group
              </Typography>
              <select
                className="!w-full h-10 !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary rounded"
                onChange={(e) =>
                  setEditData({ ...editData, bloodGroup: e.target.value })
                }
                name=""
                id=""
              >
                <option value="">select</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <div>
            {/* photo */}
            <div>
              <input
                className="border rounded"
                onChange={(e) =>
                  setEditData({ ...editData, photo: e.target.files[0] })
                }
                type="file"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  DOB
                </Typography>
                <Input
                  onChange={(e) =>
                    setEditData({ ...editData, dob: e.target.value })
                  }
                  type="date"
                  color="gray"
                  size="lg"
                  placeholder="eg. <8.8oz | 250g"
                  name="weight"
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium"
                >
                  Age
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="eg. 28"
                  name="size"
                  onChange={(e) =>
                    setEditData({ ...editData, age: e.target.value })
                  }
                  className="placeholder:opacity-100 focus:!border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div></div>
            <div>
              <label htmlFor="">Mobile</label>
              <Input
                onChange={(e) =>
                  setEditData({ ...editData, phone: e.target.value })
                }
                type="Number"
              />
            </div>
            <div>
              <label htmlFor="">Place</label>
              <Input
                onChange={(e) =>
                  setEditData({ ...editData, place: e.target.value })
                }
                type="text"
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleEdit} className="ml-auto bg-blue-600" >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default EditUser;
