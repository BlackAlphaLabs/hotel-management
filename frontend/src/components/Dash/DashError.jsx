import React from 'react'
import { AlertTriangle, Wrench } from 'lucide-react'

const DashError = ({ type = "notfound" }) => {
    const isNotFound = type === "notfound"

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-purple-50 via-indigo-50 to-sky-50 rounded-xl shadow-inner border border-indigo-100">
            <div className="mb-6 p-6 rounded-full bg-indigo-100 text-indigo-600 shadow-lg animate-pulse">
                {isNotFound ? <AlertTriangle size={48} /> : <Wrench size={48} />}
            </div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                {isNotFound ? "Page Not Found" : "Page Under Development"}
            </h2>
            <p className="text-gray-600 text-sm">
                {isNotFound
                    ? "The page you're looking for doesn't exist or has been moved."
                    : "This feature is currently being built. Check back soon!"}
            </p>
        </div>
    )
}

export default DashError
