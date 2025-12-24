"use client";

const sites = [
  {
    title: "Residential Tower – Ghaziabad",
    status: "Ongoing",
    image: "/site-images/site1.jpg",
  },
  {
    title: "Commercial Complex – Noida",
    status: "Ongoing",
    image: "/site-images/site2.jpg",
  },
  {
    title: "Luxury Villas – Completed",
    status: "Completed",
    image: "/site-images/site3.jpg",
  },
];

export default function Sites() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Live Construction Sites
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">
        {sites.map((site, index) => (
          <div key={index} className="bg-white shadow-md">
            <img src={site.image} alt={site.title} />
            <div className="p-4">
              <h3 className="font-bold">{site.title}</h3>
              <p className="text-sm text-gray-600">{site.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
