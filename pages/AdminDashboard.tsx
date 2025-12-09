import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2 } from 'lucide-react';

interface Enquiry {
  id: number;
  date: string;
  type: string;
  parentName?: string;
  childName?: string;
  mobile: string;
  email?: string;
  message?: string;
  subject?: string;
}

const AdminDashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin');

  useEffect(() => {
    if (!isAdmin) {
      navigate('/admin', { replace: true });
    } else {
      const data = JSON.parse(localStorage.getItem('school_enquiries') || '[]');
      setEnquiries(data);
    }
  }, [navigate, isAdmin]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin', { replace: true });
  };

  const clearData = () => {
    if(confirm("Are you sure you want to delete all enquiries?")) {
        localStorage.removeItem('school_enquiries');
        setEnquiries([]);
    }
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Enquiries</h2>
            {enquiries.length > 0 && (
                <button onClick={clearData} className="flex items-center text-red-600 hover:text-red-800 text-sm font-bold">
                    <Trash2 className="w-4 h-4 mr-1" /> Clear All
                </button>
            )}
        </div>

        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          {enquiries.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No enquiries found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-100 text-gray-700 uppercase font-bold">
                  <tr>
                    <th className="px-6 py-3">Date</th>
                    <th className="px-6 py-3">Type</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Contact</th>
                    <th className="px-6 py-3">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{enq.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${enq.type === 'Admission' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {enq.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900">{enq.parentName}</div>
                        {enq.childName && <div className="text-xs">Child: {enq.childName}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div>{enq.mobile}</div>
                        <div className="text-xs text-gray-400">{enq.email}</div>
                      </td>
                      <td className="px-6 py-4">
                         {enq.subject && <div className="font-bold mb-1">{enq.subject}</div>}
                         <div className="truncate max-w-xs">{enq.message || '-'}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;