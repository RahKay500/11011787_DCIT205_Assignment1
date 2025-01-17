import React from 'react'
import Sidebar from '../Components/Sidebar'

function Dashboard() {
  return (
    <div>
        <Sidebar />
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-50">
                
                <div className=" items-center mb-4 rounded">
                  <div className='pb-4'>
                  <h2 className=' text-xl'>Grade Overview</h2>
                  <h3 className='text-yellow-800'>Overall CGPA= 2.84</h3> 
                  </div>
                  

                  <div className="flex">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                  <th scope="col" className="px-6 md:pr-96 py-3">
                                      Level
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                      Total Credit Hours
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                      Total Score
                                  </th>
                                  <th scope="col" className="px-6 pr-24 py-3">
                                      CGPA
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-100">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                                      100
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      24
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      64
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      2.83
                                  </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-100">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                                      200
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      24
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      58
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      2.4
                                  </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-100">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-800">
                                      300
                                  </th>
                                  <td className="px-6 py-4  text-gray-500">
                                      24
                                  </td>
                                  <td className="px-6 py-4  text-gray-500 ">
                                      72
                                  </td>
                                  <td className="px-6 py-4 text-gray-500">
                                      3.2
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="items-center justify-center p-4 rounded bg-gray-50 h-48 dark:bg-violet-100">
                        <h2 class="mb-2 text-lg font-semibold text-gray-900">Missing Grade Summary:</h2>
                        <ul class="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-500">
                            <li>
                            Total Missing Grades: [X]
                            </li>
                            <li>
                            Recent Submissions without Grades: [Y]
                            </li>
                            <li>
                            Pending Grade Review Requests: [Z]
                            </li>
                        </ul> 
                    </div>
                    <div className="items-center justify-center p-4 rounded bg-gray-50 h-48 dark:bg-green-100">
                        <h2 class="mb-2 text-lg font-semibold text-gray-900">Upcoming Deadlines:</h2>
                        <p class="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-500">
                        Stay ahead of your assignments and exams. View a calendar of upcoming deadlines and submission dates.
                        </p> 
                    </div>
                    <div className="items-center justify-center p-4 rounded bg-gray-50 h-48 dark:bg-yellow-100">
                        <h2 class="mb-2 text-lg font-semibold text-gray-900">Important Announcements::</h2>
                        <p class="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-500">
                        Check for any important announcements from your instructors or the academic department regarding grading policies, system updates, or scheduled maintenance.
                        </p> 
                    </div>
                    <div className="items-center justify-center p-4 rounded bg-gray-50 h-48 dark:bg-blue-100">
                        <h2 class="mb-2 text-lg font-semibold text-gray-900">Need Help?:</h2>
                        <p class="max-w-md space-y-1 text-gray-700 list-disc list-inside dark:text-gray-500">
                        If you encounter any issues or have questions about the Missing Grade Report Dashboard, feel free to reach out to our support team at [support@academicaffairs.com] for assistance.
                        </p> 
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Dashboard