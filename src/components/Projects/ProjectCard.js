/*
  File Name: components/Projects/ProjectCard.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Project Card Component
*/
export default function ProjectCard({
  title,
  description,
  role,
  outcome,
  imageUrl,
}) {
  return (
    <div className="text-left w-full relative bg-white p-4 rounded shadow flex flex-col md:flex-row flex-start gap-3">
      <div className="p-4">
        <img
          src={imageUrl}
          alt={title}
          className="mb-4 rounded-md h-full oject-cover w-[360px] "
        />
      </div>

      <div className="p-2 h-full">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
        <p className="font-semibold mt-2">Role: {role}</p>
        <p className="mt-1 italic">{outcome}</p>
      </div>
    </div>
  );
}
