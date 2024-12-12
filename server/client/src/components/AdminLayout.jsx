import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Null for loading state
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Track if the component is still mounted
  
    const fetchAdminStatus = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");

        
        if (!token) throw new Error("No token found");
       
        
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/admin`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
          }
        );
  
        if (isMounted && response?.data?.success) {
          setIsLoggedIn(true);
        } else {
          throw new Error("Admin check failed");
        }
      } catch (error) {
        if (isMounted) {
          setIsLoggedIn(false);
          navigate("/admin/login");
          console.error("Error checking admin status:", error);
        }
      }
    };
  
    fetchAdminStatus();
  
    const checkScreenWidth = () => {
      setIsOpen(window.innerWidth >= 768);
    };
  
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
  
    return () => {
      isMounted = false;
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [navigate]);
  

  if (isLoggedIn === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; // Render nothing during redirection
  }

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
        >
          Toggle Panel
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;


// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "./admin/Sidebar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminLayout = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(null); // null for initial loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAdminStatus = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/admin`,
//           { withCredentials: true }
//         );

//         if (response?.data?.success) {
//           setIsLoggedIn(true);
//         } else {
//           setIsLoggedIn(false);
//           navigate("/admin/login");
//         }
//       } catch (error) {
//         setIsLoggedIn(false);
//         navigate("/admin/login");
//         console.error("Error checking admin status:", error);
//       }
//     };

//     fetchAdminStatus();

//     const checkScreenWidth = () => {
//       setIsOpen(window.innerWidth >= 768);
//     };

//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);

//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, [navigate]);

//   // Show a loading spinner or placeholder while checking login status
//   if (isLoggedIn === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   // Redirect handled via useEffect; no direct navigate in render.
//   if (!isLoggedIn) {
//     return null; // Avoid rendering until redirection completes
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
//         >
//           Open Panel
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;


// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "./admin/Sidebar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminLayout = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     (async () => {
//       try {
//         const isAdmin = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/admin`,
//           { withCredentials: true }
//         );


//         if (isAdmin?.data?.success) {
//           setIsLoggedIn(true);

//         } else {
//            navigate("/admin/login");
//           setIsLoggedIn(false);
//         }
//       } catch (error) {
//         setIsLoggedIn(false);
//         navigate("/admin/login");
//         console.log(error);
//       }
//     })();
//     const checkScreenWidth = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false);
//       }
//     };
//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);
//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, [navigate]);

//   if (!isLoggedIn) {
//     return navigate("/admin/login");
//   }
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
//         >
//           Open Panel
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

  
 
//     // Handle sidebar toggle on screen resize
//     const checkScreenWidth = () => {
//       setIsOpen(window.innerWidth >= 768);
//     };

//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);

//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, [navigate]);

//   // Show a loading state while checking admin status
//   if (isLoggedIn === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   // Avoid rendering content if user is not logged in
//   if (!isLoggedIn) {
//     return null;
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
//         >
//           Open Panel
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "./admin/Sidebar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminLayout = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(null); // null for initial loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAdminStatus = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/admin`,
//           { withCredentials: true }
//         );

//         if (response?.data?.success) {
//           setIsLoggedIn(true);
//         } else {
//           setIsLoggedIn(false);
//           navigate("/admin/login");
//         }
//       } catch (error) {
//         setIsLoggedIn(false);
//         navigate("/admin/login");
//         console.error("Error checking admin status:", error);
//       }
//     };

//     fetchAdminStatus();

//     const checkScreenWidth = () => {
//       setIsOpen(window.innerWidth >= 768);
//     };

//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);

//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, [navigate]);

//   // Show a loading spinner or placeholder while checking login status
//   if (isLoggedIn === null) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   // Redirect handled via useEffect; no direct navigate in render.
//   if (!isLoggedIn) {
//     return null; // Avoid rendering until redirection completes
//   }

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
//         >
//           Open Panel
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;


// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "./admin/Sidebar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminLayout = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     (async () => {
//       try {
//         const isAdmin = await axios.get(
//           `${import.meta.env.VITE_API_URL}/api/v1/admin`,
//           { withCredentials: true }
//         );


//         if (isAdmin?.data?.success) {
//           setIsLoggedIn(true);

//         } else {
//            navigate("/admin/login");
//           setIsLoggedIn(false);
//         }
//       } catch (error) {
//         setIsLoggedIn(false);
//         navigate("/admin/login");
//         console.log(error);
//       }
//     })();
//     const checkScreenWidth = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(true);
//       } else {
//         setIsOpen(false);
//       }
//     };
//     checkScreenWidth();
//     window.addEventListener("resize", checkScreenWidth);
//     return () => {
//       window.removeEventListener("resize", checkScreenWidth);
//     };
//   }, [navigate]);

//   if (!isLoggedIn) {
//     return navigate("/admin/login");
//   }
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//       {/* Main Content */}
//       <main className="flex-1 bg-gray-100 p-6 overflow-auto">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-blue-500 text-white px-4 py-2 rounded block md:hidden"
//         >
//           Open Panel
//         </button>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;
