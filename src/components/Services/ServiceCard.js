/*
  File Name: components/Services/ServiceCard.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Service Card Component
*/
export default function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="relative border p-2 rounded">
      <div className="flex flex-col flex-start sm:flex-row sm:items-center  space-x-2">
        <img
          src={imageUrl}
          alt={title}
          className="mb-4 rounded-md oject-cover sm:h-[120px] sm:max-w-[150px]"
          height={300}
        />
        <div>
          <h3 className="text-base font-semibold leading-7 text-orange-500">
            {title}
          </h3>
          <p className="mt-2 text-base leading-7 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
