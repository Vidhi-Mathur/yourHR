export const Alert = ({ messages, type, onClose }) => {
  const alertStyles = {
    Success: 'bg-green-100 text-green-700 border-green-700',
    Error: 'bg-red-100 text-red-700 border-red-700',
  }
  return (
    <div className={`p-2 mb-4 text-sm rounded-lg flex justify-between items-center border ${alertStyles[type]}`} role="alert">
        <div>
            <span className='font-semibold'>{type}!</span>
            {Array.isArray(messages) ? (
            <ul className="list-disc pl-5 space-y-1">
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            ) : (
                <p>{messages}</p>
            )}
        </div>
        <button type="button" className="ml-4 inline-flex items-center justify-center p-1.5 text-2xl font-medium text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" onClick={onClose}>&times;</button>
    </div>
  )
}