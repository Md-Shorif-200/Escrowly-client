"use client";
import toast from "react-hot-toast";

const useToastNotification = () => {
  // ✅ Success toast
  const successToast = (message) => {
    toast.success(message, {
         duration : 2000
    //   style: {
    //     border: "1px solid #10B981",
    //     padding: "10px 16px",
    //     color: "#065F46",
    //     fontWeight: "500",
    //   },
    //   iconTheme: {
    //     primary: "#10B981",
    //     secondary: "#fff",
    //   },
    });
  };

  // ❌ Error toast
  const errorToast = (message) => {
    toast.error(message, {
        duration : 2000,
    //   style: {
    //     border: "1px solid #EF4444",
    //     padding: "10px 16px",
    //     color: "#7F1D1D",
    //     fontWeight: "500",
    //   },
    //   iconTheme: {
    //     primary: "#EF4444",
    //     secondary: "#fff",
    //   },
    });
  };

  // ⚠️ Confirmation toast (with callback)
  const confirmToast = (message, onConfirm) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-gray-800">{message}</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 text-sm border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                await onConfirm();
                toast.dismiss(t.id);
             
              }}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      ),
      { duration: 4000, style: { minWidth: "250px" } }
    );
  };

  return { successToast, errorToast, confirmToast };
};

export default useToastNotification;
