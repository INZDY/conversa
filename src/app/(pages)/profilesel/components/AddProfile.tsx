import { GoAlertFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

function ClickProfile()
{
  console.log("Click Profile")
}


export function Extend({visible,onClose})
{
  const HandleOnClose = () =>
    {
      onClose();
    };

  if (!visible) return null;

  return(
    <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-50
    flex justify-center items-center">

      
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-300">
              Create New Profile
            </h3>
            <button onClick= {HandleOnClose} className="flex justify-center items-center w-24 h-24 absolute right-0">
            <RxCross2 className="w-1/4 h-1/4" style={{ color: "white" }} />

            </button>
            
          </div>
          <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
              <div>
                <label htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Profile Name
                  </label>
                <input type="email" name="email" id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="Display Name" required />
              </div>

              <div>
                <label htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Desciption
                  </label>
                <input type="email" name="email" id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                placeholder="Desciption" 
                />
              </div> 

              </form>

              <div className="mt-4">
               
              <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create Profile
              </button>
            </div>
            </div>
            
            
        </div>
      </div>
    </div>
  )
}