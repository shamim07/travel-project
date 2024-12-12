


import uploadToCloudinary from "../config/cloudinary.config.js";
import { v4 as uuid } from "uuid";
import Service from "../models/service.model.js";
//
const createServiceController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file;

    // chekc if all fields are filled
    if (!title || !description || !image) {
      throw new Error("Please fill in all fields");
    }
    // upload image
    const id = uuid();
    const imageURL = await uploadToCloudinary(image, id);

    // create service
    const service = await Service.create({
      title,
      description,
      image: { id, imageURL },
    });
    if (!service) {
      throw new Error("Service not created");
    }
    res
      .status(200)
      .json({ message: "Service created successfully", success: true });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const readServicesController = async (req, res) => {
  try {
    const services = await Service.find({});
  
    res.status(200).json({ data: services, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};
const deleteServiceController = async (req, res) => {
  const { id } = req.body;
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res
        .status(404)
        .json({ message: "Service not found", success: false });
    }
    res
      .status(200)
      .json({ message: "Service deleted successfully", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Server Error", success: false });
  }
};
const updateServiceController = async (req, res) => {
  try {
    const { id, title, description, imageID } = req.body;
    const image = req.file;

    // Validate required fields
    if (!id) throw new Error("Service ID is required");

    let updatedData = { title, description };

    // If a new image is provided, upload it to Cloudinary
    if (image) {
      const imageURL = await uploadToCloudinary(image, imageID || uuid());
      updatedData.image = { id: imageID || uuid(), url: imageURL };
    }

    // Update service
    const service = await Service.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
    });

    if (!service) throw new Error("Service not found or not updated");

    res
      .status(200)
      .json({ message: "Service updated successfully", success: true, updatedService: service });
  } catch (error) {
    console.error("Update Service Error:", error);
    res.status(400).json({ message: error.message, success: false });
  }
};
// const updateServiceController = async (req, res) => {
//   try {
//     const { id, title, description, imageID } = req.body;
//     const image = req.file;
//     if (image) {
//       // upload image
//       const imageURL = await uploadToCloudinary(image, imageID);
//       // update service
//       const service = await Service.findByIdAndUpdate(
//         id,
//         { title, description, image: { id: imageID, url: imageURL } },
//         { new: true }
//       );
//       if (!service) {
//         throw new Error("Service not updated");
//       }
//     } else {
//       // update service
//       const service = await Service.findByIdAndUpdate(
//         id,
//         { title, description },
//         { new: true }
//       );
//       if (!service) {
//         throw new Error("Service not updated");
//       }
//     }

//     res
//       .status(200)
//       .json({ message: "Service updated successfully", success: true });
//   } catch (error) {
//     res.status(400).json({ message: error.message, success: false });
//   }
// };

export {
  createServiceController,
  readServicesController,
  deleteServiceController,
  updateServiceController,
};
